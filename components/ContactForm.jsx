"use client";
import {useState} from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({name: "", email: "", message: ""});
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      setError(true);
    } finally {
      console.log(process.env.SENDGRID_API_KEY);
      setLoading(false);
    }
  };

  return (
    <div className=" mx-auto  p-6 bg-gray-800/50 rounded-lg shadow-md">
      <h2 className="text-2xl text-gray-50 font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-50">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full text-gray-800 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-50">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-gray-800 mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-50">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-gray-800"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400">
          {loading ? "Submitting..." : "Send Message"}
        </button>
        {success && <p className="mt-4 text-green-500">Message sent successfully!</p>}
        {error && <p className="mt-4 text-red-500">Failed to send the message. Please try again.</p>}
      </form>
    </div>
  );
};

export default ContactForm;
