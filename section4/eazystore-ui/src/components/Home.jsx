import React from "react";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/Products";
import EazyButton from "./EazyButton";
import BootstrapButton from "./BootstrapButton";

export default function Home() {
  const isActive = Math.random() > 0.5;

  const h1Styling = {
    textAlign: "center",
    color: "#333",
  };

  return (
    <>
      {/* <h1 className={`my-heading ${isActive ? "primary-color" : "secundary-color"}`}>
        Demo of global CSS from Home
      </h1>

      <EazyButton>Home</EazyButton> */}
      {/*<h1 style={h1Styling}>Demo of global CSS from Home</h1>*/}
      {/*<h1 className="my-heading">Demo of global CSS from Home</h1>*/}

      <div className="home-container">
        <div className="container col-6">
          <BootstrapButton text={"Submit"} type={"primary"}/>
          <BootstrapButton text={"Save"} type={"secondary"}/>
          <BootstrapButton text={"Okay"} type={"success"}/>
          <BootstrapButton text={"Cancel"} type={"danger"}/>
          <BootstrapButton text={"Delete"} type={"warning"}/>
          <BootstrapButton text={"Link"} type={"link"}/>
        </div>
        
      
        <PageHeading title="Explore Eazy Stickers!">
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </>
  );
}
