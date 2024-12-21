import { SearchRounded, ClearRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { SearchBarProps } from "./types";
import { useRouter } from "next/router";

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();
  const { search } = router.query;

  // Sincroniza el valor inicial del input con la query de la URL
  useEffect(() => {
    if (typeof search === "string") {
      setInputValue(search);
    }
  }, [search]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
    router.push({ pathname: "/", query: { page: 1 } }); // Resetea la búsqueda y mantiene la paginación
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative max-w-md mx-auto my-6">
      <input
        type="search"
        placeholder="Buscar películas..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="w-full text-black py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-16 flex items-center px-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <ClearRounded />
        </button>
      )}
      <button
        onClick={handleSearch}
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <SearchRounded />
      </button>
    </div>
  );
};
