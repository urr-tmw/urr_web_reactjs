import React from 'react';
import Footer from '../components/Footer';
import ProductBanner from '../sections/ProductBanner'
import ProductCat from '../sections/ProductCategories'

export const ProductPage = () => {

    return (
        <div>


            <ProductBanner/>
            <ProductCat/>

            
            <div className="relative w-full">
                <Footer />
            </div>
        </div>
  );
};
export default ProductPage;