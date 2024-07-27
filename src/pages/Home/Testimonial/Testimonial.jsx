import Container from '../../../components/Container';
import TitleText from '../../../components/TitleText';
import useTestimonial from '../../../hooks/useTestimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import TestimonialCard from '../../../components/TestimonialCard';
const Testimonial = () => {
  const { testimonials } = useTestimonial();
  return (
    <Container>
      <div className="pt-12">
        <TitleText animation="fade-up" text="testimonial" styles="my-12" />

        <div className="my-12 p-5 rounded-md ">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {testimonials &&
              testimonials.map(testimonial => (
                <SwiperSlide key={testimonial.name}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
