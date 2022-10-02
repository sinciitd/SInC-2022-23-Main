import ul from './heading-underline-vector.svg'
// import sample from './events-sample.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { EventDataBase } from '../data/data';
import './events.css'

export default function Events() {
    const slides = EventDataBase;
    // const slides = Array.from({ length: 10 }).map(
    //     (el, index) => `Slide ${index + 1}`
    // );
    
    return (
        <div className="events">
            <div className="eventsHeading">
                EVENTS
                <img src={ul} className='aboutUsHeadingUl' alt=''/>
            </div>
            <div className="eventsCarousel">
                <Swiper
                    modules={[Virtual, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    // spaceBetween={10}
                    slidesPerView={1.25}
                    autoplay={{
                        delay: 4000,
                        // pauseOnMouseEnter: true,
                    }}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    // loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    virtual={{
                        slides: slides,
                        addSlidesAfter: slides.length,
                        addSlidesBefore: slides.length
                    }}
                    breakpoints={{
                        // 1281: {
                        //     slidesPerView: 6,
                        // },
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
                        }
                    }}

                >
                    {slides.map((slideContent, index) => (
                        <SwiperSlide key={slideContent} virtualIndex={index}>
                            {({ isActive }) => (
                                <div className={isActive ? 'card carouselCard carouselCardActive' : 'card carouselCard carouselCardInactive'}>
                                    <div className="card-img-top eventImg">
                                        <img src={slideContent.linkImg}/>
                                    </div>
                                    <div className="card-footer">
                                        {isActive ?
                                        <div className="card-title">{slideContent.title}</div> :
                                        <div className="card-title text-truncate">{slideContent.title}</div>
                                        }
                                        <div className="card-text">
                                            <a className='eventReadMore' data-bs-toggle="collapse" href={`#collapse${index}`} aria-expanded="false" aria-controls={`#collapse${index}`}>
                                                Read more &raquo;
                                            </a>
                                            <div className="collapse" id={`collapse${index}`}>
                                                {slideContent.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
