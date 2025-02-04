// import { useSearchParams } from "react-router-dom";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// const PAGE_SIZE = 10;

// function Pagination({ totalNumResults }) {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
//     const totalNumPages = Math.ceil(totalNumResults / PAGE_SIZE);
  
//     function previousPage() {
//       searchParams.set("page", currentPage > 1 ? currentPage - 1 : currentPage);
//       setSearchParams(searchParams);
//     };
  
//     function nextPage() {
//       searchParams.set("page", currentPage < totalNumPages ? currentPage + 1 : currentPage);
//       setSearchParams(searchParams);
//     };
  
//     return (
//       <StyledPagination>
//         <p>Page <span>{currentPage}</span> of <span>{totalNumPages}</span>. Showing results <span>{currentPage * 10 - 10 + 1}</span> to {currentPage !== totalNumPages ? currentPage * PAGE_SIZE : totalNumResults} of <span>{totalNumResults}</span>.</p>
  
//         <Buttons>
//           <PaginationButton onClick={previousPage} disabled={currentPage === 1}><HiChevronLeft/> <span>Previous</span></PaginationButton>
//           <PaginationButton onClick={nextPage} disabled={currentPage === totalNumPages}><span>Next</span> <HiChevronRight/></PaginationButton>
//         </Buttons>
//       </StyledPagination>
//     );
//   };
  
//   export default Pagination;

function Pagination() {
    return (
        <div>
            Pagination
        </div>
    );
};

export default Pagination;
