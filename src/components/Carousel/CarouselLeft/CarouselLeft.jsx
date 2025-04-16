import React, { useEffect, useState } from "react";
import arrowLeft from "../../../assets/arrow-left.svg";
import { useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./CarouselLeft.module.css";

const CarouselLeft = () => {
  let swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <div onClick={() => swiper.slidePrev()}>
          <img src={arrowLeft} alt="arr-left" />
        </div>
      )}
    </div>
  );
};

export default CarouselLeft;