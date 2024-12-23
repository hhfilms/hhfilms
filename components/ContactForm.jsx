import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
        <input type="text" id="name" className="w-full mt-2 p-2 border rounded" required
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
        <input type="email" id="email" className="w-full mt-2 p-2 border rounded" required
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
        <textarea id="message" className="w-full mt-2 p-2 border rounded" rows="5" required
          value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
    </form>
  );
};

export default ContactForm;
