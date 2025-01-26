import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id:1, title: "Smart Watch",price: "45", description: "Apple Smart Watch Series 4...", image: "https://w0.peakpx.com/wallpaper/603/794/HD-wallpaper-2018-gold-apple-smart-watch-series-4.jpg"},
    
    { id:2, title: "One Plus",price: "500", description: "One plus mobile phone...", image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg"},
   
    { id:3, title: "Laptop",price: "800", description: "HP Laptop...", image: "https://m.media-amazon.com/images/I/71-laFJE4GL.jpg"},
    
    { id:3, title: "Headset",price: "90", description: "Boat Headset...", image: "https://www.boat-lifestyle.com/cdn/shop/products/rockerz-518-blue.png?v=1613731627"},
    
    { id:3, title: "Earphone",price: "70", description: "Boat Earphone...", image: "https://www.boat-lifestyle.com/cdn/shop/files/R255Pro_-FI_Black01_1024x.png?v=1713177293"},
    
    { id:3, title: "Tshirt",price: "8", description: "Tshirt...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPmdLD5MI3NDSRr4_sj7ZAjj-25Ei2OguAQ&s"},
    
    { id:3, title: "Handwork Kurti",price: "12", description: "Handwork Kurti...", image: "https://vivitrendycollection.in//public/photos/1/IMG-20241004-WA0071.jpg"},

    
    { id:3, title: "Dove Shampoo",price: "13", description: "Dove Shampoo...", image: "https://c8.alamy.com/comp/K1AR9T/poznan-poland-aug-11-2017-introduced-to-the-british-market-in-1955-K1AR9T.jpg"},
    
    { id:3, title: "Lux Skin SoapBar",price: "4", description: "Lux Rose & Vitamin E ... ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNut7fVY9Dr2nwcQVRSw549H1qPMkSEdPDvA&s"},
    
    { id:3, title: "Mamaearth HairOil",price: "8", description: "Onion Hair Oil ", image: "https://images.mamaearth.in/catalog/product/f/o/fop_white_bg_22.jpg?format=auto&height=600"},

];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;