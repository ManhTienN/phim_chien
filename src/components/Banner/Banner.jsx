import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css"; // tuỳ chỉnh css riêng nếu muốn

const HeroSlider = ({ banners = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000, // 10 giây
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {banners.map((item, idx) => (
        <div
          key={idx}
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${item.background})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-10">
            <div className="max-w-2xl text-white">
              <span className="bg-red-500 px-2 py-1 text-sm rounded">TV Show</span>
              <h1 className="text-3xl font-bold my-4">{item.title}</h1>
              <p className="mb-4">{item.description}</p>
              <div className="flex gap-2">
                <button className="bg-black px-4 py-2">Chi tiết</button>
                <button className="bg-red-600 px-4 py-2">Xem phim</button>
              </div>
            </div>
            <img
              src={item.poster}
              alt={item.title}
              className="h-[350px] hidden md:block ml-auto mr-10 rounded-lg shadow-xl"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
