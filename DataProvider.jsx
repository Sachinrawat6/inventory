import React, { createContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Products from './Products';

// Create a Context
export const DataContext = createContext();

// Create a Provider Component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://sachinrawat6.github.io/inventory/products.json');
                if (!response.ok) return;
                const result = await response.json();
                setData(result);
                setFilteredData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);
   
    // const handleSearch = (q) => {
    //     if (!q || q.length === 0) {
    //         setFilteredData(data); // Show all if no search query
    //     } else {
    //         const filtered = data.filter(item => q.includes(item.styleNumber)); // Check if styleNumber is in the array q
    //         if (filtered.length > 0) {
    //             console.log(filtered);
    //             setFilteredData([...filtered]); // Set filtered data as an array
    //         } else {
    //             setFilteredData([]); // Optionally set to an empty array if no match is found
    //         }
    //     }
    // };
    const handleSearch = (q) => {
        if (!q || q.length === 0) {
            setFilteredData(data); // Show all if no search query
        } else {
            // Ensure q is an array (in case it's passed as a string or other type)
            const searchTerms = Array.isArray(q) ? q : [q];
    
            // Filter items where the styleNumber matches any of the search terms
            const filtered = data.filter(item => searchTerms.includes(item.styleNumber));
    
            if (filtered.length > 0) {
                setFilteredData([...filtered]); // Set filtered data as an array
            } else {
                setFilteredData([]); // Optionally set to an empty array if no match is found
            }
        }
    };
   
    
    

    return (
        <DataContext.Provider value={{ data, error, loading,filteredData }}>
            <Navbar handleSearch={handleSearch} data={filteredData} />
            <Products productData={filteredData} />
            {children}
        </DataContext.Provider>
    );
};
