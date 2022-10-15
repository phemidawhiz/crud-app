import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TableLoader from "../../components/TableLoader";
import { useGetContracts } from "../../services/customHook";
import { tableHeaders } from "../../utils/data";
import { FaPen, FaTimes } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { IContract } from "../../utils/types";
import { useDebounce } from "../../customHooks";
const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: buyerDetails, isLoading: _isContractsLoading } =
    useGetContracts();
  const navigate = useNavigate();
  const handleEditContract = (e: SyntheticEvent, item: IContract) => {
    e.stopPropagation();
    navigate(`/update/${item.companyRegistrationNumber}`, {
      state: {
        item,
      },
    });
  };
  const handleDeleteContract = (e: SyntheticEvent, item: IContract) => {
    e.stopPropagation();
  };
  const debouncedValue = useDebounce(searchValue, 2000);
  console.log(debouncedValue);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  // if (isContractsLoading) {
  //   return <TableLoader />;
  // }
  return (
    <div className="md:px-16 px-2 sm:px-8 pt-16 flex flex-col bg-light">
      <div className="mb-4 flex flex-col sm:flex-row  sm:justify-between gap-4">
        <Button
          onClick={() => navigate("/create")}
          className="flex flex-row items-center gap-2 sm:w-[250px]"
        >
          Add Buyer <HiOutlinePlusCircle size={18} />
        </Button>
        <div className="sm:w-[250px] flex items-center justify-start w-[100%]">
          <Input
            search
            className="w-[100%] lg:w-[100%] md:w-[100%] h-[48px] text-sm placeholder:text-sm mx-auto md:ml-auto"
            placeholder="Search by phone number"
            value={searchValue}
            onChange={handleSearch}
          />
          <FaTimes
            size={18}
            opacity={0.5}
            className="ml-[-36px] cursor-pointer"
            onClick={() => setSearchValue("")}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
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
                onClick={() =>
                  navigate(`/contract/${item.companyRegistrationNumber}`)
                }
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
                  <a
                    href={item.website}
                    target="_blank"
                    className="text-[blue]"
                  >
                    {item.website}
                  </a>
                </td>
                <td className="p-2 border-[1px] border-[#ddd]">
                  {item.activated ? "Yes" : "No"}
                </td>
                <td
                  className="border-[0px] border-[#ddd] h-[100%]"
                  onClick={(e) => handleEditContract(e, item)}
                >
                  <FaPen color="black" className="mx-auto" />
                </td>
                <td
                  className="border-[1px] border-[#ddd]  h-[100%]"
                  onClick={(e) => handleDeleteContract(e, item)}
                >
                  <FaTimes color="tomato" className="mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
