import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/profile.jpg"; // replace with your profile image
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6"
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-56 h-56 relative rounded-full overflow-hidden shadow-xl"
        >
          <Image
            src={profilePic}
            alt="Sylviah Rutto"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I’m Sylviah Rutto
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            I build digital experiences that drive growth. I solve business problems
            with clean, scalable, high-performance web solutions, specializing in
            frontend and fullstack development using modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="https://github.com/yourusername"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              GitHub
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center animate-bounce">
            <a href="#projects" className="text-gray-500 text-2xl">⬇️</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
