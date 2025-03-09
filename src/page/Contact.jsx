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
      setErrorMsg("Lỗi mạng, vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <motion.div
        className="min-h-screen bg-gray-900 p-6 flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold font-serif text-white mb-8">
          Contact
        </h1>

        {isSubmitted ? (
          <p className="text-green-400 text-lg font-semibold">
            🎉 Cảm ơn bạn đã liên hệ. Mình sẽ phản hồi sớm nhất!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 w-400 rounded-lg shadow-md max-w-md"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500"
              ></textarea>
            </div>
            {errorMsg && <p className="text-red-400 mb-3">{errorMsg}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                {isLoading ? "Đang gửi..." : "Send"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;
