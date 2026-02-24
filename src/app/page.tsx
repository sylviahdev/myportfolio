import Image from "next/image";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b pb-8">

          <Image
            src="/profile.jpg"
            alt="Sylviah Rutto"
            width={150}
            height={150}
            className="rounded-full shadow-md"
            priority
          />

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">
              Sylviah Rutto
            </h1>

            <p className="text-blue-600 font-medium mt-2">
              Frontend & Fullstack Developer
            </p>

            <div className="mt-4 text-gray-600 text-sm space-y-1">
              <p>Email: your@email.com</p>
              <p>Phone: +254 XXX XXX XXX</p>
              <p>Location: Nairobi, Kenya</p>
              <p>GitHub: github.com/yourusername</p>
              <p>LinkedIn: linkedin.com/in/yourprofile</p>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Frontend and Fullstack Developer specializing in building scalable,
            high-performance web applications using React, Next.js, and TypeScript.
            Experienced in API integration and responsive UI development.
            Passionate about developing intelligent, automation-driven systems and
            expanding into AI-powered backend solutions using Python.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Technical Skills
          </h2>

          <div className="space-y-3 text-gray-700">
            <div>
              <span className="font-semibold">Frontend:</span> React.js, Next.js,
              TypeScript, JavaScript (ES6+), Tailwind CSS
            </div>

            <div>
              <span className="font-semibold">Backend:</span> Node.js, REST APIs
            </div>

            <div>
              <span className="font-semibold">Tools:</span> Git, GitHub, VS Code,
              Responsive Design
            </div>

            <div>
              <span className="font-semibold">Currently Expanding Into:</span>{" "}
              Python, FastAPI, AI-powered APIs
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Projects
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-gray-900">
                Professional Portfolio – Next.js & TypeScript
              </h3>
              <p className="text-gray-700 text-sm">
                Designed and developed a responsive portfolio application using
                Next.js, TypeScript, and Tailwind CSS. Implemented optimized
                component structure, clean UI design, and modern development
                practices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Weather Application – React & API Integration
              </h3>
              <p className="text-gray-700 text-sm">
                Integrated third-party weather APIs to display real-time weather
                data with dynamic UI updates. Focused on state management,
                conditional rendering, and responsive layout techniques.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Task Management App – CRUD Functionality
              </h3>
              <p className="text-gray-700 text-sm">
                Built a task tracking system supporting create, read, update,
                and delete operations. Applied reusable components and clean
                state management patterns.
              </p>
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Education
          </h2>

          <div>
            <h3 className="font-semibold text-gray-900">
              Bachelor’s Degree / Relevant Training
            </h3>
            <p className="text-gray-700 text-sm">
              Your Institution Name – Year
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sylviah Rutto
        </div>

      </div>
    </main>
  );
}