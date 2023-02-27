import React from "react";

import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Accesories from "./components/Accesories";
import NewSeason from "./components/NewSeason";
import CommunityBlog from "./components/CommunityBlog";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import TrendingProducts from "./components/TrendingProducts";
import "./App.css";
// IMAGES
import jordanSneaker from "./assets/jordan.jpg";
// CONTEXT
import AccessoriesData from "./context/accessoriesProducts";
import DataContextProvider from "./context/DataContextProvider";
import ProductData from "./context/ProductData";
// SHOPPA LOGO IMPORT
import shoppaLogo from "./assets/shoppa-logo.png";

// COMMUNITY IMAGES
import comImage1 from "./assets/community1.png";
import comImage2 from "./assets/community2.png";
import comImage3 from "./assets/community3.png";
import comImage4 from "./assets/community4.png";


function App() {
  return (
    <div basename="/shoppa-page">
      <AccessoriesData>
        <ProductData>
          <DataContextProvider>
            <div className="App">
              <Nav shoppaLogo={shoppaLogo} />
              <div className="wrapper">
                <Hero />
                <TrendingProducts jordanSneaker={jordanSneaker} />
                <NewSeason />
                <CommunityBlog
                  comImage1={comImage1}
                  comImage2={comImage2}
                  comImage3={comImage3}
                  comImage4={comImage4}
                />
                <Accesories />
                <Sponsors />
                <Footer />
              </div>
            </div>
          </DataContextProvider>
        </ProductData>
      </AccessoriesData>{" "}
    </div>
  );
}

export default App;
