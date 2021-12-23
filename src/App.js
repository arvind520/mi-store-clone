import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/NavBar.js";
import NavOptions from "./components/NavOptions.js";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProducts from "./components/StarProducts.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import data from "./data/data";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    // console.log(data.productReviews);
    return () => {
      console.log("demount");
    };
  }, []);
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProducts={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Route exact path="/music">
        <HotAccessories
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>

      <Route exact path="/smartDevice">
        <HotAccessories
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>

      <Route exact path="/home">
        <HotAccessories
          homeDevice={data.hotAccessories.home}
          homeDeviceCover={data.hotAccessoriesCover.home}
        />
      </Route>

      <Route exact path="/lifestyle">
        <HotAccessories
          lifestyleDevice={data.hotAccessories.lifeStyle}
          lifestyleDeviceCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>

      <Route exact path="/mobileAccessories">
        <HotAccessories
          mobileDevice={data.hotAccessories.mobileAccessories}
          mobileDeviceCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>

      {/*! Product Reviews */}
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviewsData={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
