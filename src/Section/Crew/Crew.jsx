import React from "react";
import "../../Components/CrewComponents/Template_Crew.css";
import { TemplateHeader } from "../../Components";
import TemplateCrew from "../../Components/CrewComponents/Template_Crew";
import images from "../../Constants/images";
import data from "../../Constants/data.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Crew = () => {
  const { crew } = data;

  return (
    <div className="app__crew">
      <TemplateHeader />

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide>
          {crew && <TemplateCrew crews={crew[0]} image={images.hurley} />}
        </SwiperSlide>
        <SwiperSlide>
          {crew && <TemplateCrew crews={crew[1]} image={images.shuttleworth} />}
        </SwiperSlide>
        <SwiperSlide>
          {crew && <TemplateCrew crews={crew[2]} image={images.glover} />}
        </SwiperSlide>
        <SwiperSlide>
          {crew && <TemplateCrew crews={crew[3]} image={images.ansari} />}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Crew;
