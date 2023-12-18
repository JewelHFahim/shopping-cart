import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/slider 1.jpg";
import img2 from "../../assets/slider 2.jpg";
import img3 from "../../assets/slider 3.jpeg";

export default function MainSlide() {
  const datas = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];

  return (
    <>
      <Swiper
        pagination={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
          {datas.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-[200px] lg:h-[45vh]">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
