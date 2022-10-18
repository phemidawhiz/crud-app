import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TableLoader from "../../components/TableLoader";
import { useDeleteBuyer, useGetContracts } from "../../services/customHook";
import { tableHeaders } from "../../utils/data";
import { FaPen, FaTimes } from "react-icons/fa";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { IContract } from "../../utils/types";
import { useDebounce, useNotifications } from "../../customHooks";
import Modal from "../../components/Modal";
import { ALL_BUYERS } from "../../services/customHook/queryKeys";
import { useQueryClient } from "@tanstack/react-query";
const HomePage = () => {
  const queryClient = useQueryClient();
  const { successAlert } = useNotifications();
  const [searchValue, setSearchValue] = useState("");
  const [showDeleteBuyerModal, setShowDeleteBuyerModal] = useState(false);
  const [buyer, setDeleteBuyer] = useState<any>(null);
  const {
    data: buyerDetails,
    isLoading: isContractsLoading,
    error,
  }: any = useGetContracts();
  const { mutate: handleMutateDelete, isLoading: isDeletingBuyer } =
    useDeleteBuyer({
      onSuccess: async () => {
        successAlert("Buyer deleted successfully");
        setShowDeleteBuyerModal(false);
        await queryClient.refetchQueries([ALL_BUYERS]);
      },
    });
  const navigate = useNavigate();
  const handleEditContract = (e: SyntheticEvent, item: any) => {
    e.stopPropagation();
    navigate(`/update/${item.id}`);
  };
  const showDeleteModal = (e: SyntheticEvent, item: any) => {
    e.stopPropagation();
    setDeleteBuyer(item);
    setShowDeleteBuyerModal(true);
  };
  const debouncedValue = useDebounce(searchValue, 2000);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  if (isContractsLoading) {
    return <TableLoader />;
  }
  return (
    <>
      <Modal
        showModal={showDeleteBuyerModal}
        setShowModal={setShowDeleteBuyerModal}
        handleDeleteBuyer={() => handleMutateDelete(buyer.id)}
        buyer={buyer}
        isLoading={isDeletingBuyer}
      />
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
            {searchValue && (
              <FaTimes
                size={18}
                opacity={0.5}
                className="ml-[-36px] cursor-pointer"
                onClick={() => setSearchValue("")}
              />
            )}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-[100%] max-h-[400px] overflow-y-scroll border-collapse mt-[40px]">
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
              {buyerDetails?.data?.length > 0 ? (
                buyerDetails?.data?.map((item: any, idx: number) => (
                  <tr
                    key={idx}
                    onClick={() => navigate(`/contract/${item.id}`)}
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
                    <td className="p-2 border-[1px] border-[#ddd]">
                      {item.title}
                    </td>
                    <td className="p-2 border-[1px] border-[#ddd]">
                      {item.nationality}
                    </td>
                    <td className="p-2 border-[1px] border-[#ddd]">
                      {item.telephoneFax}
                    </td>
                    <td className="p-2 border-[1px] border-[#ddd]">
                      {item.email}
                    </td>
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
                      {item.status}
                    </td>
                    <td
                      className="border-[0px] border-[#ddd] h-[100%]"
                      onClick={(e) => handleEditContract(e, item)}
                    >
                      <FaPen color="black" className="mx-auto" />
                    </td>
                    <td
                      className="border-[1px] border-[#ddd]  h-[100%]"
                      onClick={(e) => showDeleteModal(e, item)}
                    >
                      <FaTimes color="tomato" className="mx-auto" />
                    </td>
                  </tr>
                ))
              ) : error ? (
                <tr className="colspan absolute mx-auto w-screen text-center top-[60vh] md:top-[40vh] left-[0px]">
                  <h1>
                    {error.message ||
                      `A problem occurred while fetch the buyers' list. Kindly try again`}
                  </h1>
                </tr>
              ) : (
                <tr className="colspan absolute mx-auto w-screen text-center top-[60vh] md:top-[40vh] left-[0px]">
                  <h1>
                    No buyers. Click{" "}
                    <Link to="/create" className="text-blue underline">
                      here
                    </Link>{" "}
                    to create buyer
                  </h1>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomePage;
