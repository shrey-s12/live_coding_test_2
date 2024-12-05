import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCountry, setSearchCountry] = useState('');
    const [searchTriggered, setSearchTriggered] = useState(false);

    return (
        <SearchContext.Provider value={{
            searchTerm,
            setSearchTerm,
            searchCountry,
            setSearchCountry,
            searchTriggered,
            setSearchTriggered
        }}>
            {children}
        </SearchContext.Provider>
    );
};


export default SearchContext;