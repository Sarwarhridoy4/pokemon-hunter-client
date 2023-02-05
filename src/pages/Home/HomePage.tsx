import Card from "@/Components/Card/Card";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import React from "react";
import Article from "../Article/Article";
const HomePage = () => {
  return (
    <div>
      <div
        className='min-h-screen  bg-cover md:bg-cover lg:bg-cover'
        style={{
          backgroundImage: `url(https://i.ibb.co/86XnRmc/Background.png)`,
        }}
      >
        <div
          className='texture min-h-screen bg-cover'
          style={{
            backgroundImage: `url(https://i.ibb.co/Y2BSNnw/Texture.png)`,
          }}
        >
          <Navbar></Navbar>
          <Card></Card>
        </div>
      </div>
      <div className="min-h-screen w-screen bg-white" style={{
            backgroundImage: `url(https://i.ibb.co/cwtQnSp/Left.png)`,
      }}>
        <div>
          <div className="w-[90vw] bg-slate-50 mx-auto">
            <Article></Article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
