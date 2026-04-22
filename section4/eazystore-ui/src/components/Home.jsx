import React from "react";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/Products";

const h1Styling = {
  textAlign: "center",
  color: "#333"
};

export default function Home() {
  return (
    <>
      <h1 style={h1Styling}>Demo of global CSS from Home</h1>
    
      {/*<h1 className="my-heading">Demo of global CSS from Home</h1>*/}

      <div className="home-container">
        <PageHeading title="Explore Eazy Stickers!">
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </>
  );
}
