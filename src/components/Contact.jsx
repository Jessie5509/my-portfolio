import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="text-3xl font-semibold text-center">Contact</h2>

        <form className="grid gap-6 bg-white p-8 rounded-xl border">
          <input
            type="text"
            placeholder="Name"
            className="border px-4 py-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-3 rounded-lg"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="border px-4 py-3 rounded-lg"
          ></textarea>
          <button className="bg-black text-white px-6 py-3 rounded-lg text-sm">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
