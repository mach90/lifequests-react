import { useSearchParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import {DEFAULT_PAGE_SIZE} from "../utils/constants";

function Pagination({ totalCount, results, color }) {
    const paginationButtonStyle = `bg-${color}/50 px-2 rounded-sm flex flex-row gap-1 items-center disabled:bg-slate-700 hover:cursor-pointer disabled:cursor-not-allowed`;

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
      <div className="flex flex-col gap-4 justify-center items-center p-4">
  
        <div className="flex flex-row gap-1">
            <p>Results {currentPage * 10 - 10 + 1}-{currentPage !== totalNumPages ? currentPage * DEFAULT_PAGE_SIZE : totalCount} of {totalCount}.</p>
            <button onClick={previousPage} disabled={currentPage === 1} className={paginationButtonStyle}><HiChevronLeft/></button>
            <p>Page {currentPage}/{totalNumPages}</p>
            <button onClick={nextPage} disabled={currentPage === totalNumPages} className={paginationButtonStyle}><HiChevronRight/></button>
        </div>
      </div>
    );
  };
  
  export default Pagination;