import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Edit() {
  const nav = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [oldImage, setOldImage] = useState("");

  // Lấy dữ liệu dự án cũ
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `https://minq05-portfolio.onrender.com/projects/${id}`
        );
        reset(res.data);
        setOldImage(res.data.image);
        setPreview(res.data.image);
      } catch (err) {
        console.error("Lỗi lấy dữ liệu:", err);
      }
    };
    fetchProject();
  }, [id, reset]);

  // Upload ảnh lên Cloudinary nếu có ảnh mới
  const uploadImage = async () => {
    if (!imageFile) return oldImage;

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "portfolio");
    formData.append("cloud_name", "de1vixyul");

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/de1vixyul/image/upload`,
        formData
      );
      return res.data.secure_url;
    } catch (error) {
      console.error("Lỗi upload ảnh:", error);
      return null;
    }
  };

  // Cập nhật dự án
  const onSubmit = async (data) => {
    try {
      const imageUrl = await uploadImage(); // Dùng ảnh mới nếu có, không thì giữ ảnh cũ

      if (!imageUrl) {
        alert("❌ Upload ảnh thất bại!");
        return;
      }

      const updatedData = { ...data, image: imageUrl };

      await axios.put(
        `https://minq05-portfolio.onrender.com/projects/${id}`,
        updatedData
      );
      alert("🎉  Cập nhật dự án thành công!");
      nav("/projects");
    } catch (error) {
      console.error(error);
      alert("❌ Có lỗi xảy ra khi cập nhật dự án!");
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
            Chỉnh sửa dự án
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-96">
            <div>
              <label className="block text-white font-medium mb-2">
                Project Title
              </label>
              <input
                type="text"
                className="w-full p-3 border text-white rounded-lg"
                {...register("title", { required: true })}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Ảnh hiện tại
              </label>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto rounded-lg mb-2"
              />
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border text-white rounded-lg"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImageFile(file);
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Description
              </label>
              <textarea
                className="w-full p-3 border text-white rounded-lg"
                rows={4}
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
                {...register("github", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Cập nhật dự án
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Edit;
