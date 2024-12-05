import React, { useContext } from 'react'
import searchIcon from '../assets/search-interface-symbol.png';
import locationIcon from '../assets/location.png';
import target from '../assets/aim.png';
import SearchContext from '../context/SearchContext';

const Searchbar = () => {

    const { searchTerm, setSearchTerm, searchCountry, setSearchCountry, setSearchTriggered } = useContext(SearchContext);

    const handleSearch = () => {
        setSearchTriggered(true); // Trigger the search when the button is clicked
    };

    return (
        <div className="ml-[146px] max-w-[1000px] px-6 mt-16 border border-gray-200 shadow-md rounded-lg">
            <div className="flex justify-between items-center">

                <div className="flex items-center border-r-2 border-gray-300 pr-6 w-1/2">
                    <img src={searchIcon} alt="Search Icon" className="h-[20px] w-[20px] mr-2" />
                    <input
                        type="text"
                        placeholder="Search by: Job title, Position, Keywords..."
                        className="w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center pr-6 w-1/3">
                    <img src={locationIcon} alt="Location Icon" className="h-[20px] w-[20px] mr-2" />
                    <input
                        type="text"
                        placeholder="City, state or country"
                        className="w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
                        value={searchCountry}
                        onChange={(e) => setSearchCountry(e.target.value)} />
                </div>

                <div className="flex items-center justify-center w-[50px]">
                    <img src={target} alt="Target Icon" className="h-[25px] w-[25px]" />
                </div>

                <div>
                    <button
                        onClick={handleSearch}
                        className="bg-orange-500 rounded text-white my-2 p-4 py-2 hover:bg-orange-600 transition-all">
                        Find Job
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Searchbar