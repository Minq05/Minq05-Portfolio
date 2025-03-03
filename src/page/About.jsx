import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="text-white text-2xl text-left p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl font-extrabold my-3 mx-3">
            Thông tin cá nhân:{" "}
          </h1>
          <ul className="pl-6">
            <li className="my-2 mx-3 hover:text-gray-400 cursor-pointer">
              <i className="fas fa-user mx-2"></i> Họ và tên: Hoàng Minh Quân
            </li>
            <li className="my-2 mx-3 hover:text-gray-400 cursor-pointer">
              <i className="fas fa-birthday-cake mx-2"></i> Ngày sinh:
              22/02/2005
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fas fa-map-marker-alt mx-2"></i> Quê quán: Lạng
              Giang - Bắc Giang
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fas fa-home mx-2"></i> Địa chỉ hiện tại: Nam Từ Liêm
              - Hà Nội
            </li>
          </ul>
        </div>
        <div
          className="text-white text-2xl text-left p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl font-extrabold my-3 mx-3">Liên hệ: </h1>
          <ul className="pl-6">
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fas fa-phone-alt mx-2"></i> Số điện thoại:
              0364017978
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fas fa-envelope mx-2"></i> Email:
              hoangquan222005@gmail.com
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fab fa-facebook-f mx-2"></i> Facebook:{" "}
              <a href="https://www.facebook.com/minh.quan.141435 ">
                Click để tới Facebook
              </a>
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fab fa-github mx-2"></i> Github :{" "}
              <a href="https://github.com/Minq05/">Click để tới Github </a>
            </li>
          </ul>
        </div>
        <div
          className="text-white text-2xl text-left p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl font-extrabold my-3 mx-3">
            Trình độ học vấn:
          </h1>
          <ul className="pl-6">
            <li className="my-2 mx-3 hover:text-gray-400 cursor-pointer">
              Cao đẳng FPT Polytechnic Hà Nội 8/2023-8/2025 (Dự kiến)
            </li>
            <li className="my-2 mx-3 hover:text-gray-400 cursor-pointer">
              Ngành: Công nghệ thông tin
            </li>
            <li className="my-2 mx-3 hover:text-gray-400 cursor-pointer">
              Chuyên ngành: Lập trình Web Front-end
            </li>
          </ul>
        </div>

        <div
          className="text-white text-2xl text-left p-6 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl font-extrabold my-3 mx-3">
            Chứng chỉ & thành tích :{" "}
          </h1>
          <ul className="pl-6">
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fas fa-award mx-2"></i> GPA 3.75 / 4 (Hiện tại)
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fas fa-star mx-2"></i> xếp loại : Giỏi
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              <i className="fas fa-language mx-2"></i>
              Tiếng anh : English 2.2 (Equivalent to CEFR B1)
            </li>
          </ul>
        </div>

        <div
          className="text-white text-2xl text-left p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-5xl font-extrabold my-3 mx-3">
            Kỹ năng chuyên môn :{" "}
          </h1>
          <div className="pl-6">
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Kinh nghiệm với GitHub.
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Kinh nghiệm với GitHub.
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              PHP, Cơ sở dữ liệu (SQL) UI/UX Design
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Quản trị Website HTML, CSS, JavaScript, TypeScript, ECMAScript
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              ReactJS, Angular, NodeJS&RESTful Web Services{" "}
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Tìm kiếm và ứng dụng AI trong lập trình & phát triển web
            </li>
          </div>
        </div>

        <div
          className="text-white text-2xl text-left p-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1 className="text-5xl font-extrabold my-3 mx-3">
            Kỹ năng mềm và sở thích :{" "}
          </h1>
          <div className="pl-6">
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Kiên trì & chịu áp lực
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Chơi cờ vua, cờ tướng
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Giao tiếp & thuyết trình
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Tư duy logic, phân tích tốt
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Leadership & làm việc nhóm
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Giải quyết vấn đề & tư duy logic
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Quản lý thời gian & tổ chức công việc
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Xem các video về công nghệ, lập trình
            </li>
            <li className="my-2 mx-3  hover:text-gray-400 cursor-pointer">
              Ham học hỏi, thích tìm hiểu công nghệ mới
            </li>
          </div>
        </div>

        <div className="text-white text-2xl text-left p-6">
          <h1 className="text-5xl font-extrabold my-3 mx-3"></h1>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
