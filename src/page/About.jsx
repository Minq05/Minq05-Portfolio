import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen p-6 flex flex-col bg-gray-900">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Thông tin cá nhân */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Thông tin cá nhân</h2>
            <ul>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-user mr-2"></i> Họ và tên: Hoàng Minh Quân
              </li>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-birthday-cake mr-2"></i> Ngày sinh: 22/02/2005
              </li>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-map-marker-alt mr-2"></i> Quê quán: Lạng Giang - Bắc Giang
              </li>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-home mr-2"></i> Địa chỉ hiện tại: Nam Từ Liêm - Hà Nội
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Liên hệ</h2>
            <ul>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-phone-alt mr-2"></i> Số điện thoại: 0364017978
              </li>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-envelope mr-2"></i> Email: hoangquan222005@gmail.com
              </li>
              <li className="mb-2 text-gray-300">
                <i className="fab fa-facebook-f mr-2"></i> Facebook:{" "}
                <a href="https://www.facebook.com/minh.quan.141435" className="text-blue-400 hover:underline">Click để tới Facebook</a>
              </li>
              <li className="mb-2 text-gray-300">
                <i className="fab fa-github mr-2"></i> Github:{" "}
                <a href="https://github.com/Minq05/" className="text-blue-400 hover:underline">Click để tới Github</a>
              </li>
            </ul>
          </div>

          {/* Trình độ học vấn */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Trình độ học vấn</h2>
            <ul>
              <li className="mb-2 text-gray-300">
                Cao đẳng FPT Polytechnic Hà Nội 8/2023-8/2025 (Dự kiến)
              </li>
              <li className="mb-2 text-gray-300">Ngành: Công nghệ thông tin</li>
              <li className="mb-2 text-gray-300">Chuyên ngành: Lập trình Web Front-end</li>
            </ul>
          </div>

          {/* Chứng chỉ & thành tích */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Chứng chỉ & thành tích</h2>
            <ul>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-award mr-2"></i> GPA 3.75 / 4 (Hiện tại)
              </li>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-star mr-2"></i> xếp loại: Giỏi
              </li>
              <li className="mb-2 text-gray-300">
                <i className="fas fa-language mr-2"></i> Tiếng Anh: English 2.2 (Equivalent to CEFR B1)
              </li>
            </ul>
          </div>

          {/* Kỹ năng chuyên môn */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Kỹ năng chuyên môn</h2>
            <ul>
              <li className="mb-2 text-gray-300">Kinh nghiệm với GitHub</li>
              <li className="mb-2 text-gray-300">PHP, Cơ sở dữ liệu (SQL), UI/UX Design Cơ bản</li>
              <li className="mb-2 text-gray-300">Quản trị Website HTML, CSS, JavaScript, TypeScript</li>
              <li className="mb-2 text-gray-300">ReactJS, Angular, NodeJS & RESTful Web Services</li>
              <li className="mb-2 text-gray-300">Tìm kiếm và ứng dụng AI trong lập trình & phát triển web</li>
            </ul>
          </div>

          {/* Kỹ năng mềm và sở thích */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-white mb-4">Kỹ năng mềm và sở thích</h2>
            <ul>
              <li className="mb-2 text-gray-300">Kiên trì & chịu áp lực</li>
              <li className="mb-2 text-gray-300">Chơi cờ vua, cờ tướng</li>
              <li className="mb-2 text-gray-300">Giao tiếp & thuyết trình</li>
              <li className="mb-2 text-gray-300">Tư duy logic, phân tích tốt</li>
              <li className="mb-2 text-gray-300">Leadership & làm việc nhóm</li>
              <li className="mb-2 text-gray-300">Giải quyết vấn đề & tư duy logic</li>
              <li className="mb-2 text-gray-300">Quản lý thời gian & tổ chức công việc</li>
              <li className="mb-2 text-gray-300">Xem các video về công nghệ, lập trình</li>
              <li className="mb-2 text-gray-300">Ham học hỏi, thích tìm hiểu công nghệ mới</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
