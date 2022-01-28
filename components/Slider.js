import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //// requires a loader

function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slide-1.jpg" alt="" className="w-[1440px] h-[368px] object-cover"/>
        </div>

        <div>
          <img loading="lazy" src="/images/slide-2.jpg" alt="" className="w-[1440px] h-[368px] object-cover"/>
        </div>

        <div>
          <img loading="lazy" src="/images/slide-3.jpg" alt="" className="w-[1440px] h-[368px] object-cover"/>
        </div>

        <div>
          <img loading="lazy" src="/images/slide-4.jpg" alt="" className="w-[1440px] h-[368px] object-cover"/>
        </div>

      </Carousel>
    </section>
  );
}

export default Slider;
