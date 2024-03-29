"use client";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "@/../public/Logo.json";

export default function Logo() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 32, height: 32, alignItems: "center" }}
    />
  );
}
