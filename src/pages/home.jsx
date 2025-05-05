import React from "react";
import HeroSlider from "../components/Banner/Banner";

const banners = [
  {
    title: "Nghe nói em thích tôi",
    background: "../assets/temp-1.jpeg",
    poster: "../assets/temp-1.jpeg",
    description:
      "Một câu chuyện tình yêu nhẹ nhàng, sâu lắng và đầy cảm xúc giữa hai con người tưởng như xa lạ.",
  },
  {
    title: "Chiếc bật lửa và váy công chúa",
    background: "../assets/temp-1.jpeg",
    poster: "../assets/temp-1.jpeg",
    description:
      "Một bộ phim học đường hấp dẫn với những thước phim đầy rung động.",
  },
  {
    title: "Hạ cánh nơi anh",
    background: "../assets/temp-1.jpeg",
    poster: "../assets/temp-1.jpeg",
    description:
      "Mối tình vượt biên giới đầy trắc trở và cảm động giữa Hàn Quốc và Triều Tiên.",
  },
];

const Home = () => {
  return (
    <div>
      <HeroSlider banners={banners} />

      {/* Các thành phần khác như danh sách phim, thể loại... */}
      <div className="mt-10 px-4 text-center text-gray-600">
      </div>
    </div>
  );
};

export default Home;
