import React from "react";
import styles from "./styles.module.scss";
import { Roboto } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import LottieWrapper from "../lottie/LottieWrapper";
import animationData from "../../../public/arrow_down_animation.json";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} />
      <div className={styles.sun} />
      <div className={styles.main}>
        <h1 className={`${roboto.className} ${styles.name}`}>Saad Mosallam</h1>
        <span>
          <h5 className={`${robotoMono.className} ${styles.title}`}>
            Software Engineer & Front End.
          </h5>
        </span>
      </div>
      <LottieWrapper classes={styles.arrowDown} animationData={animationData} />
    </div>
  );
};

export default Hero;
