import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";


export default function MainSlide() {
  const datas = [
    {
      img: "https://images.newindianexpress.com/expressdeals/assets/images/content/2023/02/07/original/Best-Sunglasses-Brands-for-Men-and-Women.jpg",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/oct23/web/artisinal.jpg",
    },
    {
      img: "https://static1.lenskart.com/media/desktop/img/aug23/air/web.gif",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
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
              <div className="w-full h-[70vh]">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
