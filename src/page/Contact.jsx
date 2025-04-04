import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hoangquan22022005@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMsg("Gửi thất bại, vui lòng thử lại sau.");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Lỗi mạng, vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 flex flex-col items-center">
      <motion.div
        className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-lg w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold font-serif text-white text-center mb-8">
          Liên hệ với tôi
        </h1>

        {isSubmitted ? (
          <p className="text-green-400 text-lg font-semibold text-center">
            🎉 Cảm ơn bạn đã liên hệ. Mình sẽ phản hồi sớm nhất!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-700 p-6 rounded-lg shadow-lg space-y-6"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Lời nhắn
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-white bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
              ></textarea>
            </div>

            {errorMsg && (
              <p className="text-red-400 text-center font-semibold">{errorMsg}</p>
            )}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                {isLoading ? "Đang gửi..." : "Gửi"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;
