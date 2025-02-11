import { useSearchParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import {DEFAULT_PAGE_SIZE} from "../utils/constants";

function Pagination({ totalCount, results }) {
    const paginationButtonStyle = "bg-transparent w-8 h-8 flex justify-center items-center border border-main4 hover:border-neutral0 disabled:border-none text-main4 hover:text-neutral0 disabled:text-main3 rounded-full hover:cursor-pointer disabled:cursor-default disabled:bg-main2";
    const paginationPagesStyle ="text-main4 font-bold text-sm p-1.5"

    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const totalNumPages = Math.ceil(totalCount / DEFAULT_PAGE_SIZE);
  
    function previousPage() {
      searchParams.set("page", currentPage > 1 ? currentPage - 1 : currentPage);
      setSearchParams(searchParams);
    };
  
    function nextPage() {
      searchParams.set("page", currentPage < totalNumPages ? currentPage + 1 : currentPage);
      setSearchParams(searchParams);
    };
  
    return (
      <div className="flex flex-row gap-1 justify-center items-center p-1 w-full h-max bg-main3 rounded-xl">
          {/* <p>Results {currentPage * 10 - 10 + 1}-{currentPage !== totalNumPages ? currentPage * DEFAULT_PAGE_SIZE : totalCount} of {totalCount}.</p> */}
          <button onClick={previousPage} disabled={currentPage === 1} className={paginationButtonStyle}><HiChevronLeft/></button>
          <p className={paginationPagesStyle}>{currentPage}/{totalNumPages}</p>
          <button onClick={nextPage} disabled={currentPage === totalNumPages} className={paginationButtonStyle}><HiChevronRight/></button>
      </div>
    );
  };
  
  export default Pagination;