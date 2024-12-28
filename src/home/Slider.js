import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css/navigation';

export default function Slider() {
  const { t } = useTranslation();
  const sliderlist = [
    'images/slide1.webp',
    'images/slide2.webp',
    'images/slide3.jpg',
    'images/slide4.jpg',
    'images/slide5.jpg',
    'images/slide6.jpg',
    'images/slide7.jpg',
  ];
  return (
  <div className="home_slider_container">
   <Swiper
  grabCursor
  loop
  modules={[Autoplay, Navigation]}
  navigation
  autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
>
  {sliderlist.map(slide => (
    <SwiperSlide key={slide}>
      <div
        className="slider_item"
        style={{ background: `url(${slide}) no-repeat center / cover` }}
      ></div>
    </SwiperSlide>
  ))}
</Swiper>
    <h1>{t("title")}</h1>
    <p>{t('titleContent')}</p>
    </div>
  )
}