import React, { CSSProperties } from "react";
import ReactPaginate from "react-paginate";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./pagination.css";

interface IPaginationProps {
  pageCount: number;
  handlePageClick: (e: any) => void;
  onNext?: any;
  onPrev?: any;
  currentPage?: any;
}
const Pagination = ({ pageCount, handlePageClick }: IPaginationProps) => {
  return (
    <div className="py-5 flex flex-row items-center justify-center rounded-[10px] text-purple">
      <ReactPaginate
        containerClassName="pagination-container"
        breakLabel="..."
        pageClassName="pagination-item"
        pageLinkClassName="pagination-link"
        nextClassName="next-pagination-item"
        previousClassName="prev-pagination-item"
        breakClassName="pagination-item"
        breakLinkClassName="pagination-link"
        previousLabel={<MdChevronLeft />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        nextLabel={<MdChevronRight />}
        // renderOnZeroPageCount={null}
        activeClassName="active"
        disabledClassName="disabled"
        nextLinkClassName="next-page-link"
        previousLinkClassName="prev-page-link"
      />
    </div>
  );
};

export default Pagination;
