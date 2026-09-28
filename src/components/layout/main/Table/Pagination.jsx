import clsx from "clsx";
import React, { useEffect, useState } from "react";

function Pagination({ products, setItems, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(products.length / itemsPerPage);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = products.slice(startIndex, endIndex);
    setItems(currentItems);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center gap-2 bg-zinc-50/40 pagination">
      <button
        className={clsx(
          "pagination-prev-button",
          currentPage === 1 && "pages-ended active-tab",
        )}
        disabled={currentPage === 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        قبلی
      </button>
      {[...Array(pages)].map((_, index) => (
        <button
          key={index}
          className={clsx(
            "pagination-button",
            currentPage === index + 1 ? "active-tab" : "non-active-tab",
          )}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage === pages ? true : false}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={clsx(
          "pagination-next-button",
          currentPage === pages && "pages-ended active-tab",
        )}
      >
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
