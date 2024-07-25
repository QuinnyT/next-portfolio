"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      // id={`simple-tabpanel-${index}`}
      // aria-labelledby={`simple-tab-${index}`}
      className="text-white"
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const HeroSection = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <section className="lg:py-16 min-h-[75vh] ">
      <div className="sm:grid-cols-12 col-span-8 place-self-center text-center sm:text-left justify-self-start">
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        > */}
          <h1 className="text-white text-center mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Profile
          </h1>
          <h5 className="text-center">一个热爱游戏的普通人</h5>
          <h5 className="italic text-center">Email: wx119990101@163.com</h5>
          <div className="flex justify-center mt-20">
            <Tabs value={selectedTab} onChange={(event, value) => {setSelectedTab(value)}} aria-label="basic tabs example">
              <Tab label="Skills"  />
              <Tab label="Education"  />
              <Tab label="Info"  />
            </Tabs>
          </div>
          <div className="flex justify-center">
            <TabPanel value={selectedTab} index={0}>
            <ul>
              <li>DCC:Blender、Maya、Rhino</li>
              <li>Engine :Unity3D、UE5</li>
              <li>Graphics:PS、A1、ID</li>
              <li>PGC:Grasshopper、SD</li>
              <li>Code :C#、Python、HLSL</li>
            </ul>
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">东南大学 建筑学硕士-建筑技术<span className="italic">2022.09~2025.07</span></div>
              <li  className="font-thin">校级三好学生、优秀共产党员、一等奖学金(2022、2023)</li>
              <div className="flex justify-between">湖南大学 建筑学本科-建筑设计<span className="italic">2017.09~2022.07</span></div>
              <li className="font-thin">学生会网宣部长、团支书、优秀毕业设计、水石奖学金</li>
            </div>
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
            <li>2017年开始学习美术基础，包括素描、速写、水彩和马克笔，主要以建筑表现为主;</li>
            <li>2018-2022年掌握Rhono+Grasshopper参数化建、3DMax建模;</li>
            <li>Lumion静态渲染、Ai(Adobe)处理线稿、PS后处理、ID排版;</li>
            <li>2012年开始学习Python语言、数据结构与算法;</li>
            <li>2023年7月，数字人产品实习，开始接触游戏引擎和实时染，并自学Unity和C#;</li>
            <li>2024年3月，技术美术实习，自学UE和Shader，进一步熟悉游戏制作流程，并搭建自己的知识体系，</li>
            <li>新增技能Blender建模、SD程序化纹理;</li>
            </TabPanel>
          </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
