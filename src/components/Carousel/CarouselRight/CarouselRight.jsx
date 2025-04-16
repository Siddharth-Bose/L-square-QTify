import React, { useEffect, useState } from "react";
import arrowRight from "../../../assets/arrow-right.svg";
import { useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./CarouselRight.module.css";

const CarouselRight = () => {
  let swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <div onClick={() => swiper.slideNext()}>
          <img src={arrowRight} alt="arr-right" />
        </div>
      )}
    </div>
  );
};

export default CarouselRight;
