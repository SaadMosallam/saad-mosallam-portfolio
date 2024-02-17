"use client";
import lottie, { AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";

export default function LottieWrapper({
  classes,
  animationData,
}: {
  classes?: string;
  animationData?: any;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: AnimationItem | undefined;
    if (container.current) {
      anim = lottie.loadAnimation({
        animationData: animationData,
        autoplay: true,
        container: container.current!,
        loop: true,
      });
    }
    return () => {
      // Clean up animation when the component unmounts
      if (anim) {
        anim.destroy();
      }
    };
  }, [animationData]);

  return <div className={classes} ref={container} />;
}
