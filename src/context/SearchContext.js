import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCountry, setSearchCountry] = useState('');

    return (
        <SearchContext.Provider value={{
            searchTerm,
            setSearchTerm,
            searchCountry,
            setSearchCountry
        }}>
            {children}
        </SearchContext.Provider>
    );
};


export default SearchContext;