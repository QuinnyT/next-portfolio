"use client";
import React, { useState, useRef, useEffect } from "react";

import CryptoJS from "crypto-js";

// import { executeScript } from '@/js/ykuapi'

async function getToken() {
  const res = await fetch(url)
  const json = await res.json();
  console.log("json", json)
}

const VideoSection = () => {
  
  const password = '123456';
  const clientId = 'e4c803eeb5d4a471';
  const hash = CryptoJS.MD5(password + clientId).toString();

  const baseUrl = 'https://player.youku.com/embed/XNjQxNjYzODMyMA==';
  const params = {
    client_id: "e4c803eeb5d4a471",
    password: hash
  };
  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}?${queryString}`;

  useEffect(() => {
    // getToken()
    // executeScript();


    // var player = new YKU.Player('youkuplayer',{
    //   styleid: '0',
    //   client_id: 'e4c803eeb5d4a471',
    //   vid: 'XNjQxNjYzODMyMA==',
    //   password: hash,
    //   newPlayer: true
    //   });
  }, [])

  return (
    <section id="video" className="text-center h-[80vh]">
      
      <h2 className=" text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Portfolio
      </h2>
      <h6 className="italic">2024</h6>
      <div className="flex justify-center mt-4 ">
        {/* <video width="800" controls> */}
          <iframe height="500" width="800"  src={url} frameborder="0" allowfullscreen />
          {/* Your browser does not support the video tag. */}
        {/* </video> */}
        {/* <div id="youkuplayer" className="w-[580px] h-[326px]"></div> */}
        
      </div>
    </section>
  );
};

export default VideoSection;