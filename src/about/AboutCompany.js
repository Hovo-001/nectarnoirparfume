import { useTranslation } from "react-i18next";
import Brands from "../home/Brands";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function AboutCompany() {
    const { t } = useTranslation();
    const pictures = [
        'images/about1.jpg',
        'images/about2.jpg',
        'images/about3.jpg',
        'images/about4.jpg',
        'images/about5.jpg'
    ];
    const videos = [
        'videos/video1.mp4',
        'videos/video2.mp4',
        'videos/video3.mp4',
        'videos/video4.mp4',
    ];
    return (
        <div className='content_container'>
            <h2 className="title">{t('navbar', { returnObjects: true })[0].toUpperCase()}</h2>
            <div className="about_pictures">
                {pictures.map(pic => {
                    return <div key={pic} className="about_item" style={{ background: `url(${pic}) no-repeat center / cover` }}></div>
                })}
            </div>
            {t('about', { returnObjects: true }).map(about => {
                return <>
                    <h2>{about.title}</h2>
                    <p>{about.content}</p>
                </>
            })}
             <Swiper
              breakpoints={{
                480: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
                1150: { slidesPerView: 4, spaceBetween: 20 },
              }}>
                {videos.map(video => {
                    return <SwiperSlide>
                        <video src={video} loop autoPlay muted></video>
                    </SwiperSlide>
                })}
            </Swiper>
            <ul>
                {t('aboutCompanyes', { returnObjects: true }).map(item => {
                    return <li>{item}</li>
                })}
            </ul>
            <Brands />
            {t('aboutLastContent', { returnObjects: true }).map(item => {
                return <div className="about_last_block">
                    <h2>{item.title}</h2>
                    <ul>
                        {item.list.map(it => {
                            return <li key={it}>{it}</li>
                        })}
                    </ul>
                    <p>{item.content}</p>
                </div>
            })}
        </div>
    )
}