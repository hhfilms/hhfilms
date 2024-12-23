const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="flex justify-center mt-8">
        {pages.map((page) => (
          <button key={page} onClick={() => onPageChange(page)}
            className={`py-2 px-4 mx-1 rounded ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
            {page}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  