import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TableLoader from "../../components/TableLoader";
import { useGetContracts } from "../../services/customHook";
import { tableHeaders } from "../../utils/data";
import { FaTimes } from "react-icons/fa";
const HomePage = () => {
  const { data: buyerDetails, isLoading: isContractsLoading } =
    useGetContracts();
  const navigate = useNavigate();
  console.log(isContractsLoading);
  // if (isContractsLoading) {
  //   return <TableLoader />;
  // }
  return (
    <div className="md:px-16 px-8 pt-16 flex flex-col bg-light">
      <div className="mb-4 flex flex-row justify-between">
        <Button onClick={() => navigate("/create")}>Add New Buyer</Button>
        <div className="w-[250px] flex items-center justify-start w-[100%]">
          <Input
            search
            className="w-[100%] lg:w-[100%] md:w-[100%] text-sm placeholder:text-sm mx-auto md:ml-auto"
            placeholder="Search by phone number"
          />
          <FaTimes
            size={18}
            opacity={0.5}
            className="ml-[-36px] cursor-pointer"
          />
        </div>
      </div>
      <table className="w-[100%] h-[400px] border-collapse">
        <thead className="text-left sticky top-0 bg-[#686de0] text-light">
          <tr>
            {tableHeaders.map((el: string) => (
              <th className="p-2 border-[1px]" key={el}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {buyerDetails?.map((item, idx) => (
            <tr
              key={idx}
              className={`cursor-pointer  text-sm ${
                idx % 2 === 0 ? `bg-[#ddd]` : `bg-light`
              }`}
            >
              <td className="p-2 border-[1px] border-[#ddd]">
                {item.companyName}
              </td>
              <td className="p-2 border-[1px] border-[#ddd]">
                {item.companyRegistrationNumber}
              </td>
              <td className="p-2 border-[1px] border-[#ddd]">
                {item.representedBy}
              </td>
              <td className="p-2 border-[1px] border-[#ddd]">{item.title}</td>
              <td className="p-2 border-[1px] border-[#ddd]">
                {item.nationality}
              </td>
              <td className="p-2 border-[1px] border-[#ddd]">
                {item.telephoneFax}
              </td>
              <td className="p-2 border-[1px] border-[#ddd]">{item.email}</td>
              <td className="p-2 border-[1px] border-[#ddd]">
                <a href={item.website} target="_blank">
                  {item.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
