import { useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen p-6 text-center">
      <motion.div
        className="w-150 h-160 rounded-full overflow-hidden border-4 border-gray-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/474735078_1128456305479619_3483514243009613125_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeFTy7B5Hox-Pp4d0dVF8vhZrRQU-tt9nwStFBT6232fBAFuknKofAJXbfSUPuBjYy6SXZZGIELGEqEfV47rx6eh&_nc_ohc=8z_DANN6gM4Q7kNvwHswM6g&_nc_oc=AdkjxLB4ohI6k1Gt6D-0YfWBXFgjIsuTZUi50WDNucPYBW1GXilmsRAUzSsGdA5byCY&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=fqucfQ4XKxdkZ0TqwtjUAw&oh=00_AYFduikeMm8aEAM3AlbFtHvA1-51D5mseNj7EnR4J-1QCQ&oe=67F58955"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="mt-6 md:mt-0 md:ml-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-sm uppercase text-gray-400 text-left">
          Xin chào, tôi là Quân
        </p>
        <h1 className="text-4xl font-bold text-white mt-2 text-left">
          Tôi là một lập trình viên website
        </h1>
        <p className="text-gray-400 mt-4 text-left">
          Tôi là một lập trình viên mới tốt nhiệp và tôi đang tìm kiếm cơ hội để
          phát triển bản thân và học hỏi thêm nhiều điều mới. Tôi đã có kinh
          nghiệm làm việc với HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB,
          MySQL, TailwindCSS, Framer Motion và nhiều công nghệ khác.
        </p>
        <a href="/projects">
          <button
            className="mt-6 px-6 py-3 border-2 border-white rounded-lg text-white font-semibold transition-all transform hover:scale-110 float-left cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
          >
            Xem dự án của tôi
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default Home;
