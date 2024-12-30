"use client";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import('@/app/home'), { ssr: false });

export default HomePage;
