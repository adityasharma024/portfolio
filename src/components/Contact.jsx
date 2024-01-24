

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate constraints
    if (!formData.user_name.trim()) {
      alert('Please enter your name.');
      return;
    }

    if (!formData.user_email.trim() || !/^\S+@\S+\.\S+$/.test(formData.user_email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      alert('Please enter a message.');
      return;
    }

    // All constraints passed, proceed to send email
    emailjs.sendForm('service_w3xnhsi', 'template_xtbm0gq', form.current, '2fQ6ZE7NMMunj_abE')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent to Mr. Aditya.');
      })
      .catch((error) => {
        console.log(error.text);
      });

    // Clear the form after sending
    setFormData({
      user_name: '',
      user_email: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="ml-4 sm:ml-64 mr-4 sm:mr-64 mt-8 p-6 bg-gray-100 rounded-md divide-red-400 shadow-md place-content-center">
      <h1 className="mb-16 text-5xl font-bold underline text-center">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="bg-orange-500  text-white px-4 py-2 rounded-md cursor-pointer"

          
        />
      </form>
    </div>
  );
};

export default Contact;
