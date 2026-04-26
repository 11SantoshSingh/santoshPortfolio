import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const { isPurpleTheme, toggleTheme } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        }
      );
  };

  return (
    <div id="Contact" className={`w-full md:px-20 py-16 min-h-screen flex items-center justify-center `}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`w-full flex flex-col gap-4 p-6 rounded-xl shadow-lg w-full max-w-md ${isPurpleTheme ? 'bg-[#0c0e15] text-white ' : 'bg-[#dce3dc] text-black'} `}
      >
        <h2 className="text-2xl font-bold text-center">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 border rounded "
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-3 border rounded "
        ></textarea>

        <button
          type="submit"
          className={`cursor-pointer text-white py-2 rounded hover:bg-indigo-700 ${isPurpleTheme ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : 
                "bg-gradient-to-r from-green-400 to-teal-500 text-white"}`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;