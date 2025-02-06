import ProductHeader from './ProductHeader';

const Products = ({ productData }) => {
     
    productData = productData.sort((a, b) => b.styleNumber -a.styleNumber);

    return (
        <>
        <ProductHeader/>
            {productData.length > 0 ? (
                productData.map((product, index) => {
                    return (
                        <div key={index} className={`containers grid grid-cols-7 gap-4 mt-4 font-[400] items-center text-[1rem] font-[Poppins] w-[90vw] m-auto p-2 ${index % 2 !== 0 ? "bg-green-200" : ""}`}>
                            {/* <div className="header"><input type="checkbox" className='w-5 h-5' /></div> */}
                            <div className="header">{product.styleNumber}</div>
                            <div className="header">{product.styleName}</div>
                            <div className="header">{product.patternNumber}</div>
                            <div className="header">{product.MRP}</div>
                            <div className="header">{product.Color}</div>
                            <div className="header">{product.fabricType}</div>
                            <div className="header">{product.Closure}</div>
                        </div>
                    );
                })
            ) : (
                <p className='text-center text-xl'>Loading...</p>
            )}
        </>
    );
};

export default Products;
