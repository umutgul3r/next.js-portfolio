import React from "react";

const Pagination = ({ paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(4); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-9">
      <ul className="flex gap-2 ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="bg-[#C4C4C4] w-[39px] h-[39px] rounded-full flex items-center justify-center"
          >
            <button
              className="font-bold  text-xl"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
