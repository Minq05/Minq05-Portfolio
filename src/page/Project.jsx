import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import useAuth from "../context/AuthContext";
import { useNavigate } from "react-router";

function Projects() {
  const nav = useNavigate();
  const [projects, setProjects] = useState([]);
  const { user } = useAuth();
  const getProjects = async () => {
    try {
      const { data } = await axios.get(
        "https://minq05-portfolio.onrender.com/projects"
      );
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!user || user.username !== "minq05") {
      alert("Bạn không có quyền xóa dự án! Hãy đăng nhập !");
      nav("/login");
      return;
    } else {
      if (confirm("Bạn có chắc chắn muốn xóa dự án này không?")) {
        try {
          await axios.delete(
            `https://minq05-portfolio.onrender.com/projects/${id}`
          );
          alert("🎉 Xóa dự án thành công!");
          getProjects();
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const hanldeAdd = async () => {
    if (!user || user.username !== "minq05") {
      alert("Bạn không có quyền Thêm dự án! Hãy đăng nhập !");
      nav("/login");
      return;
    } else {
      nav("/add");
    }
  };

  const handleEdit = (id) => {
    if (!user || user.username !== "minq05") {
      alert("Bạn không có quyền chỉnh sửa dự án! Hãy đăng nhập!");
      nav("/login");
      return;
    } else {
      nav(`/edit/${id}`);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flex-col md:flex-row justify-center items-center h-screen p-6 text-center">
      <motion.div
        className="min-h-screen bg-gray-900 p-6 flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-white mb-8 font-serif"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Projects
        </motion.h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-5xl"
        >
          {projects?.length > 0 &&
            projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-gray-800 p-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </motion.div>
                  <motion.div>
                    <h2 className="text-xl font-extrabold text-white mt-4">
                      {project.title}
                    </h2>
                  </motion.div>
                  <motion.div>
                    <p className="text-gray-400 mt-2 text-justify">
                      {project.description}
                    </p>
                  </motion.div>
                  <motion.div className="mt-4 flex justify-center gap-4">
                    <motion.a
                      href={project.github}
                      className="text-gray-400 hover:underline cursor-pointer rounded-lg shadow-lg transition duration-300 border border-black p-1 pl-6 pr-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      GitHub
                    </motion.a>

                    <motion.a
                      onClick={() => handleDelete(project.id)}
                      className="text-gray-400 hover:underline cursor-pointer rounded-lg shadow-lg transition duration-300 border border-black p-1 pl-6 pr-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      DELETE
                    </motion.a>

                    <motion.a
                      onClick={() => handleEdit(project.id)}
                      className="text-gray-400 hover:underline cursor-pointer rounded-lg shadow-lg transition duration-300 border border-black p-1 pl-6 pr-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      EDIT
                    </motion.a>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
        </Swiper>
        <motion.p
          className="mt-6 px-6 py-3 border-2 border-white rounded-lg text-white font-semibold transition-all transform hover:scale-110 float-left cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a onClick={() => hanldeAdd()}>
            <h1>Thêm dự án</h1>
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Projects;
