import React from "react";

function SearchBox() {
  return (
    <>
      <div className="flex place-content-center pt-80 pb-12">
        <div class="relative ">
          <div class="absolute pointer">
            <svg
              class="absolute text-slate-400 pl-1 cursor-pointer h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="shadow-xl pl-12 h-8 w-96 rounded-lg "
          />
        </div>
      </div>
    </>
  );
}

export default SearchBox;
