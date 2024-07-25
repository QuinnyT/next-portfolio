"use client";
import React, { useState, useRef } from "react";


const VideoSection = () => {

  return (
    <section id="video" className="text-center h-[80vh]">
      <h2 className=" text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Portfolio
      </h2>
      <h6 className="italic">2024</h6>
      <div className="flex justify-center mt-4">
        <video width="800" controls>
          <source src="/videos/test.mkv" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
