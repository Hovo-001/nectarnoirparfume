import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

export default function Brands() {
    const logoes = [
        'images/logoes/6.png',
        'images/logoes/7.webp',
        'images/logoes/8.jpg',
        'images/logoes/9.png',
        'images/logoes/10.webp',
        'images/logoes/11.png',
        'images/logoes/12.png',
        'images/logoes/13.png',
        'images/logoes/1.png',
        'images/logoes/2.png',
        'images/logoes/3.png',
        'images/logoes/4.png',
        'images/logoes/5.png',
    ];
    return (
        <div className="brands_container">
            <Swiper
                spaceBetween={20} // Default spacing
                loop
                grabCursor
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    580: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    },
                }}
            >
                {logoes.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="brands">
                            <img src={logo} alt="Brand logo" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}