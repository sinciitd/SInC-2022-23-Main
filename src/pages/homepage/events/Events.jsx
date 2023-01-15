import ul from "./heading-underline-vector.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import data from "../../../data/events.json"
import "./events.css";

export default function Events() {
  return (
    <div className="events">
      <div className="eventsHeading">
        EVENTS
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
              slidesPerView: 5,
            },
            769: {
              slidesPerView: 4,
            },
            601: {
              slidesPerView: 3,
            },
            401: {
              slidesPerView: 2,
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
                    <img src={require(`../../../data/${event.image}`)} alt="events" />
                  </div>
                  <div className="card-footer">
                    {isActive ? (
                      <div className="card-title mt-1">{event.title}</div>
                    ) : (
                      <div className="card-title text-truncate mt-1">{event.title}</div>
                    )}
                    <div className="card-text">
                      <div className="eventDate mb-2">
                        <svg className="eventDateIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"/></svg>
                        <span> {event.date}</span>
                      </div>
                      <div className="collapse mt-2" id={`eventCollapse${event.id}`}>
                        {event.description}
                      </div>
                      <a
                        className="eventReadMore text-decoration-none"
                        data-bs-toggle="collapse"
                        href={`#eventCollapse${event.id}`}
                        aria-expanded="false"
                        aria-controls={`#eventCollapse${event.id}`}
                      >
                        Read more &raquo;
                      </a>
                    </div>
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
