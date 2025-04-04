import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const nav = useNavigate();

  const getProject = async () => {
    try {
      const { data } = await axios.get(
        `https://minq05-portfolio.onrender.com/projects/${id}`
      );
      setProject(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  }, [id]);

  if (!project) {
    return <div className="text-white p-6">Đang tải...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-4">{project.title}</h1>

        {/* ✅ Mô tả đầy đủ, giữ định dạng */}
        <p className="mt-4 text-gray-300 whitespace-pre-line text-justify">
          {project.description}
        </p>

        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Xem GitHub →
          </a>
        </div>

        <button
          onClick={() => nav(-1)}
          className="mt-6 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
        >
          ← Quay lại
        </button>
      </motion.div>
    </div>
  );
}

export default ProjectDetail;
