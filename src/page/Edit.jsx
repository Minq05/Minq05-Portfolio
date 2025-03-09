import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";

function Edit() {
  const { id } = useParams();
  const nav = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `https://minq05-portfolio.onrender.com/projects/${id}`
        );
        reset(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      await axios.put(
        `https://minq05-portfolio.onrender.com/projects/${id}`,
        data
      );
      alert("🎉 Sửa dự án thành công!");
      nav("/projects");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className=" bg-gray-800 p-10 rounded-xl shadow-lg max-w-lg w-auto">
          <h1 className=" text-4xl font-serif font-extrabold text-white text-center mb-8">
            Chỉnh sửa dự án
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            method="POST"
            className="space-y-4 w-96"
          >
            <div>
              <label className="block text-white font-medium mb-2">
                Project Title
              </label>
              <input
                type="text"
                className="w-full p-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter project title"
                {...register("title", { required: true })}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Project Image
              </label>
              <input
                type="text"
                className="w-full p-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter project image"
                {...register("image", { required: true })}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Description
              </label>
              <textarea
                className="w-full p-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
                placeholder="Enter project description"
                {...register("description", { required: true })}
                defaultValue={""}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                GitHub Link
              </label>
              <input
                type="url"
                className="w-full p-3 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="https://github.com/your-project"
                {...register("github", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Update Project
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Edit;
