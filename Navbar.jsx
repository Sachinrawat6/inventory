import React, { useState } from 'react';

const Navbar = ({ handleSearch, data }) => {
  const [query, setQuery] = useState('');
  const [storeQuery, setStoreQuery] = useState([]);
  // Handle form submit to prevent page reload and call handleSearch
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    console.log("Search Query:", query); // Log query to check the value

    // Add the new query to the storeQuery state (without duplicate queries)
    setStoreQuery((prevQueries) => {
      const updatedQueries = [...prevQueries, parseInt(query)];
      handleSearch(updatedQueries); // Pass updated queries to handleSearch
      return updatedQueries; // Update state with new queries
    });

    // Clear the input field after submitting
    setQuery("");
  };









  // Convert selected products to CSV format
  // const handleDownload = () => {
  //   const sizes = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
  //   data.length = 100; // Truncate data to first 10 products if needed

  //   // Generate the CSV content with repeated products for each size
  //   const csvContent = [
  //     ["SKU", "Spec Product Type","Product ID Type", "Product ID", "Product Name", "Brand Name",
  //       "Selling Price", "Shipping Weight (lbs)", "Site Description",
  //       "Key Features (+)", "Key Features 1 (+)", "Key Features 2 (+)",
  //       "Key Features 3 (+)", "Key Features 4 (+)", "Key Features 5 (+)",
  //       "Main Image URL", "Count Per Pack", "Total Count",
  //       "Multipack Quantity", "Is Prop 65 Warning Required",
  //       "Age Group (+)", "Clothing Size", "Clothing Size Group (+)",
  //       "Clothing Style (+)", "Color", "Color Category (+)",
  //       "Condition", "Fabric Care Instructions (+)",
  //       "Fabric Material Name", "Fabric Material Percentage", "Gender",
  //       "Has Written Warranty", "Measure", "Unit",
  //       "Sleeve Length Style", "Small Parts Warning Code (+)",
  //       "Clothing Fit", "Clothing Neck Style", "Clothing Top Style (+)",
  //       "Clothing Weight", "Collar Style", "Dress Style (+)",
  //       "Jacket Length", "Jacket Style (+)", "Skirt Length Style",
  //       "Sweatshirt & Hoodie Type", "Zippered"].join(','), // Header row, added 'Size' column
  //     data.flatMap(product => {
  //       // Repeat each product for every size
  //       return sizes.map(size => [`${product.styleNumber}-${product.Color}-${size},,,,${product.styleName},Qurvii,${product.MRP},,,,,,,,,,1,,1,,Adult,${size},,,${product.Color},,,${product.washCare},${product.fabricType},,Female,,,,${product.sleeveLength},,${product.fittingType},${product.neckStyle},,,${product.collarType},,,,,,${product.Closure}`  ].join(','));}).join("\n")].join('\n');


  //   // Trigger CSV download
  //   const blob = new Blob([csvContent], { type: 'text/csv' });
  //   const link = document.createElement('a');
  //   link.href = URL.createObjectURL(blob);
  //   link.download = 'products_listing_report.csv';
  //   link.click();
  // };




  const handleDownload = () => {
    const sizes = ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
    // data.length = 100; // Truncate data to first 100 products if needed

    // Generate the CSV content with repeated products for each size
    const csvContent = [
      ["SKU", "Spec Product Type", "Product ID Type", "Product ID", "Product Name", "Brand Name",
        "Selling Price", "Shipping Weight (lbs)", "Site Description",
        "Key Features (+)", "Key Features 1 (+)", "Key Features 2 (+)",
        "Key Features 3 (+)", "Key Features 4 (+)", "Key Features 5 (+)",
        "Main Image URL", "Count Per Pack", "Total Count",
        "Multipack Quantity", "Is Prop 65 Warning Required",
        "Age Group (+)", "Clothing Size", "Clothing Size Group (+)",
        "Clothing Style (+)", "Color", "Color Category (+)",
        "Condition", "Fabric Care Instructions (+)",
        "Fabric Material Name", "Fabric Material Percentage", "Gender",
        "Has Written Warranty", "Measure", "Unit",
        "Sleeve Length Style", "Small Parts Warning Code (+)",
        "Clothing Fit", "Clothing Neck Style", "Clothing Top Style (+)",
        "Clothing Weight", "Collar Style", "Dress Style (+)",
        "Jacket Length", "Jacket Style (+)", "Skirt Length Style",
        "Sweatshirt & Hoodie Type", "Zippered"].join(','), // Header row

      data.flatMap(product => {
        return sizes.map(size => {
          // Construct productId with ternary logic
          let productId = `${product.styleNumber}Qurvii${size}`;
          productId = productId.length == 13 ? `0${productId}` :
            productId.length == 12 ? `00${productId}` : productId;

          // shippingWeight_lbs logic with ternary 

          let shippingWeight_lbs = product.styleType;
          shippingWeight_lbs = shippingWeight_lbs == "Dress" ? "0.8" : shippingWeight_lbs == "Top" || shippingWeight_lbs == "Shirt" || shippingWeight_lbs == "Kaftan" ? "0.6" : "1";

          // currency logic 
          const amount = product.MRP;
          const exchangeRate = 0.012;
         const  amountInUSD = amount * exchangeRate;

          // Format the number as USD
          const formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(amountInUSD);


          // zippered mapping value 

          let zippered = product.Closure;
          zippered= zippered=="Concealed Zip" || zippered=="Zip"?"Yes":"No";


                // Return the row for the CSV
          return [
            `${product.styleNumber}-${product.Color}-${size},${product.styleType},EAN,${productId},${product.styleName},Qurvii,${formattedAmount},${shippingWeight_lbs},${product.styleDescription},${product.Prints},${product.Hemline},${product.Occasion},${product.Season},Fashion,Western wear,,1,1,1,No,Adult,${size},Women,Casual,${product.Color},,New,${product.washCare},${product.fabricType},,Female,No,1,Count,${product.sleeveLength},0 - No warning applicable,${product.fittingType},${product.neckStyle},,,${product.collarType},,,,,,${zippered}`
          ].join(',');
        }).join("\n");
      }).join("\n")
    ].join('\n');

    // Trigger CSV download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'walmart_listing_report.csv';
    link.click();
  };

















  return (
    <>
      <nav className="p-2 flex justify-between items-center w-[90vw] m-auto mb-8 sticky top-0 bg-white shadow-md">
        <h2 className='font-[400] text-xl font-["Poppins"]'>Generate Listing File</h2>
        <form className='flex justify-around gap-15' onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={handleDownload}
            className='p-3 shadow-xs font-[200] border-1 border-gray-200 bg-green-600 text-white cursor-pointer'
          >
            Download csv
          </button>
          <div className='font-["Poppins"]'>
            <input
              className='shadow-xs p-3 w-80 border-1 border-gray-300 rounded-xs outline-green-200'
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search here...'
            />
            <button
              type="submit"  // This triggers the form submit
              className='shadow-xs p-3 bg-green-600 text-white w-[100px] ml-[-14px] cursor-pointer'
            >
              Search
            </button>
          </div>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
