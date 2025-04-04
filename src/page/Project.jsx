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

  const hanldeAdd = () => {
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

  const handleDetail = (id) => {
    nav(`/projects/${id}`);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <motion.h1
        className="text-4xl font-extrabold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-4 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-3">{project.title}</h2>
            <p className="text-sm text-gray-300 mt-2 text-justify">
              {project.description.slice(0, 100)}...
            </p>

            <div className="flex justify-between mt-4 flex-wrap gap-2">
              <button
                onClick={() => handleDetail(project.id)}
                className="text-white border border-blue-500 px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
              >
                Detail
              </button>
              <a
                href={project.github}
                target="_blank"
                className="text-white border border-green-500 px-3 py-1 rounded hover:bg-green-600"
              >
                GitHub
              </a>
              <button
                onClick={() => handleEdit(project.id)}
                className="text-white border border-yellow-500 px-3 cursor-pointer py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="text-white border border-red-500 cursor-pointer px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <button
          onClick={hanldeAdd}
          className="px-6 py-2 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-black transition-all"
        >
          Thêm dự án
        </button>
      </motion.div>
    </div>
  );
}

export default Projects;
