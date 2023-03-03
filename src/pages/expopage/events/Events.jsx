import ul from "./heading-underline-vector.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import data from "../../../data_expo/events.json";
import "./events.css";

export default function Events() {
  return (
    <div className="events">
      <div className="eventsHeading">
        Brochure
        <img src={ul} className="aboutUsHeadingUl" alt="" />
      </div>
      <div className="eventsCarousel">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={1.25}
          autoplay={{
            delay: 4000,
          }}
          centeredSlides={true}
          slideToClickedSlide={true}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            1025: {
              slidesPerView: 3,
            },
            769: {
              slidesPerView: 3,
            },
            601: {
              slidesPerView: 2,
            },
            401: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((event) => (
            <SwiperSlide key={event.id}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "card carouselCard carouselCardActive"
                      : "card carouselCard carouselCardInactive"
                  }
                >
                  <div className="card-img-top eventImg">
                    <img
                      src={require(`../../../data_expo/${event.images[0]}`)}
                      alt="events"
                      style={{ objectFit:'fill' }}
                    />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
