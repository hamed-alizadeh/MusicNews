import React from "react";
import BreakingNews from "./BreakingNews";
import PhotoSlider from "./photoSlider";
import NewsCard from "./NewsCard";
import Footer from "./Fotter";
import UpcomingEvents from "./UpcomingEvents";

  function Home () {
    
  return (
    <>
    <BreakingNews />
    <PhotoSlider />
    
    <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 1"
        description="Short description about News 1."
      />
      <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 2"
        description="Short description about News 2."
      />
      <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 1"
        description="Short description about News 1."
      />
      <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 2"
        description="Short description about News 2."
      />
       <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 1"
        description="Short description about News 1."
      />
      <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 2"
        description="Short description about News 2."
      />
      <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 1"
        description="Short description about News 1."
      />
      <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 2"
        description="Short description about News 2."
      />
       <NewsCard
        imageUrl="./src/light (1).png"
        title="News Title 2"
        description="Short description about News 2."
      />
      <UpcomingEvents />
      <Footer />
    
    </>
  );
}

export default Home;
