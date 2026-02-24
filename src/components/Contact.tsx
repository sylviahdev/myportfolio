export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 px-6 py-16 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <p className="mb-8 text-gray-700 text-center max-w-2xl">
        I’m currently open to new opportunities. Feel free to reach out to discuss projects, collaborations, or just to say hi!
      </p>
      <form className="w-full max-w-lg flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"/>
        <input type="email" placeholder="Your Email" className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"/>
        <textarea placeholder="Your Message" className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" rows={5}></textarea>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
