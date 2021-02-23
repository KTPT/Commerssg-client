import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

const SwiperContainer = styled.div`
    height: 400px;
    width: 1100px;
    margin: 0 auto;
`

const MainSwiper: React.FC = () => {
    return(
        <SwiperContainer>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      </SwiperContainer>
    )
}

export default MainSwiper;