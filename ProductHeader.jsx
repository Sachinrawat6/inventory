import React from 'react'

const ProductHeader = () => {
  return (
    <>
        <div
        className={`containers grid grid-cols-7 gap-4 mt-4 sticky top-15 bg-green-600 text-white font-[400] text-[1.2rem] font-[Poppins] w-[90vw] m-auto p-2 py-6 items-center `} >

        {/* <div className="header"><input type="checkbox" className='w-5 h-5'/></div> */}
        <div className="header">Style Number </div>
        <div className="header">Style Name </div>
        <div className="header">Pattern No </div>
        <div className="header">MRP </div>
        <div className="header">Color </div>
        <div className="header">Fabric </div>
        <div className="header">Closure</div>
    </div>
    
    </>
  )
}

export default ProductHeader