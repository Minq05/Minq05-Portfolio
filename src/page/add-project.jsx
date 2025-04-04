import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function Add() {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null); // Lưu ảnh tạm thời

  // Xử lý upload ảnh lên Cloudinary
  const uploadImage = async () => {
    if (!imageFile) return null;

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "portfolio"); // Thay bằng preset của bạn
    formData.append("cloud_name", "de1vixyul"); // Thay bằng Cloud Name của bạn

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/de1vixyul/image/upload`,
        formData
      );
      return res.data.secure_url; // Trả về URL ảnh
    } catch (error) {
      console.error("Lỗi upload ảnh:", error);
      return null;
    }
  };

  // Gửi dữ liệu lên JSON Server
  const onSubmit = async (data) => {
    try {
      const imageUrl = await uploadImage(); // Upload ảnh trước

      if (!imageUrl) {
        alert("❌ Upload ảnh thất bại!");
        return;
      }

      const newData = { ...data, image: imageUrl }; // Gán URL ảnh vào dữ liệu

      await axios.post("https://minq05-portfolio.onrender.com/projects", newData);
      alert("🎉 Thêm dự án thành công!");
      nav("/projects");
    } catch (error) {
      console.error(error);
      alert("❌ Có lỗi xảy ra khi thêm dự án!");
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gray-800 p-10 rounded-xl shadow-lg max-w-lg w-auto">
          <h1 className="text-4xl font-serif font-extrabold text-white text-center mb-8">
            Thêm dự án
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-96">
            <div>
              <label className="block text-white font-medium mb-2">
                Project Title
              </label>
              <input
                type="text"
                className="w-full p-3 border text-white rounded-lg"
                placeholder="Enter project title"
                {...register("title", { required: true })}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Project Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border text-white rounded-lg"
                onChange={(e) => setImageFile(e.target.files[0])} // Cập nhật ảnh khi chọn
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Description
              </label>
              <textarea
                className="w-full p-3 border text-white rounded-lg"
                rows={4}
                placeholder="Enter project description"
                {...register("description", { required: true })}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                GitHub Link
              </label>
              <input
                type="url"
                className="w-full p-3 border text-white rounded-lg"
                placeholder="https://github.com/your-project"
                {...register("github", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Add Project
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Add;
