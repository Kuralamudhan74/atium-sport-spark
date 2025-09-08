import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function CoverflowSlider() {
  const slides = [
    { img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d", title: "New York", subtitle: "5 NIGHT / 6 DAYS" },
    { img: "https://images.unsplash.com/photo-1508780709619-79562169bc64", title: "Grenada", subtitle: "3 NIGHT / 4 DAYS" },
    { img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d", title: "Wellington", subtitle: "3 NIGHT / 4 DAYS" },
    { img: "https://images.unsplash.com/photo-1517649763962-0c623066013b", title: "Las Vegas", subtitle: "3 NIGHT / 4 DAYS" },
    { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", title: "Singapore", subtitle: "4 NIGHT / 5 DAYS" },
    { img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", title: "Dubai", subtitle: "6 NIGHT / 7 DAYS" },
    { img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", title: "Paris", subtitle: "5 NIGHT / 6 DAYS" },
    { img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d", title: "Tokyo", subtitle: "4 NIGHT / 5 DAYS" },
    { img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba", title: "Sydney", subtitle: "3 NIGHT / 4 DAYS" },
    { img: "https://images.unsplash.com/photo-1534447677768-be436bb09401", title: "London", subtitle: "5 NIGHT / 6 DAYS" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black px-4">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}   // 👈 show 3 cards at once (try 5 for wider look)
        loop={true}         // 👈 circular
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="w-full max-w-7xl"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="w-[280px] sm:w-[320px] md:w-[360px] h-[440px] rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h2 className="text-lg font-bold">{slide.title}</h2>
                <p className="text-sm">{slide.subtitle}</p>
                <button className="mt-3 px-4 py-2 bg-white text-black text-sm rounded-md hover:bg-yellow-400 transition">
                  VIEW MORE
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
