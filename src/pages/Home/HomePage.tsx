import Navbar from "@/Components/Shared/Navbar/Navbar";
import React from "react";
const HomePage = () => {
  return (
    <div
      className='min-h-screen  bg-cover md:bg-cover lg:bg-cover'
      style={{
        backgroundImage: `url(https://i.ibb.co/86XnRmc/Background.png)`,
      }}
    >
      <div
        className='texture min-h-screen bg-cover'
        style={{ backgroundImage: `url(https://i.ibb.co/Y2BSNnw/Texture.png)` }}
          >
              <Navbar></Navbar>
      </div>
    </div>
  );
};

export default HomePage;
