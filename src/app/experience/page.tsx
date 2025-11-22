import Link from "next/link";
import React from "react";
import { Calendar, MapPin, ExternalLink, CheckCircle, ArrowRight } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary-200 rounded-full opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-center text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Experience<span className="text-primary-600">.</span>
          </h1>
        <p className="text-center lg:text-center text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            My professional journey in software development, working with
            cutting-edge technologies and delivering exceptional user
            experiences.
        </p>
        </div>

        {/* Experience Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/*1st Company Info Section */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  {/* Company Logo/Name */}
                  <div className="space-y-4">
                    <Link
                      href="https://securehops-website.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300"
                    >
                      Securehops Limited
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {/* Position Badge */}
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Technical Project Manager / IT Project Manager
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">September 2023 - Present</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>on-site / Pakistan</span>
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "React Native",
                        "Tailwind CSS",
                        "Firebase",
                        "TypeScript",
                      ].map((tech, index) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                          style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    Technical Project Manager{" "}
                    <span className="text-primary-600">@ Securehops</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Proficient in modern JavaScript frameworks, including
                        React.js, Next.js, React Native, and Tailwind CSS, with
                        extensive experience building scalable web and mobile
                        applications.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Delivered complex, production-grade solutions by
                        implementing advanced functionality and optimizing
                        performance for diverse client needs.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Successfully developed and deployed sophisticated
                        applications, ensuring seamless integration of
                        third-party APIs and delivering exceptional user
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/*2nd Company Info Section */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  {/* Company Logo/Name */}
                  <div className="space-y-4">
                    <Link
                      href="https://www.devsinntechnologies.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300"
                    >
                      Dev's Inn Technologies
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {/* Position Badge */}
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Technical Project Manager / IT Project Manager
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">September 2022 - Present</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>on-site / Pakistan</span>
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "React Native",
                        "Tailwind CSS",
                        "Firebase",
                        "TypeScript",
                      ].map((tech, index) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                          style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Experience Details */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    Technical Project Manager{" "}
                    <span className="text-primary-600">@ Dev's Inn Technologies</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Proficient in modern JavaScript frameworks, including
                        React.js, Next.js, React Native, and Tailwind CSS, with
                        extensive experience building scalable web and mobile
                        applications.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Delivered complex, production-grade solutions by
                        implementing advanced functionality and optimizing
                        performance for diverse client needs.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Successfully developed and deployed sophisticated
                        applications, ensuring seamless integration of
                        third-party APIs and delivering exceptional user
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 3 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* 3rd Company Info Section */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  {/* Company Logo/Name */}
                  <div className="space-y-4">
                    <Link
                      href="https://www.linkedin.com/company/o-r-c-a-l-o/?originalSubdomain=uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300"
                    >
                      Orcalo Holdings
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {/* Position Badge */}
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Project Coordinator / Project Manager
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">August 2022 - September 2023</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>on-site / Pakistan</span>
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "React Native",
                        "Tailwind CSS",
                        "Firebase",
                        "TypeScript",
                      ].map((tech, index) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                          style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    Project Coordinator{" "}
                    <span className="text-primary-600">@ Orcalo Holdings</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Proficient in modern JavaScript frameworks, including
                        React.js, Next.js, React Native, and Tailwind CSS, with
                        extensive experience building scalable web and mobile
                        applications.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Delivered complex, production-grade solutions by
                        implementing advanced functionality and optimizing
                        performance for diverse client needs.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Successfully developed and deployed sophisticated
                        applications, ensuring seamless integration of
                        third-party APIs and delivering exceptional user
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 4 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/*4th Company Info Section */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  {/* Company Logo/Name */}
                  <div className="space-y-4">
                    <Link
                      href="https://www.devsinntechnologies.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300"
                    >
                      Dev's Inn Technologies
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {/* Position Badge */}
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Flutter Developer / Mobile App Developer
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">February 2021 - September 2022</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>on-site / Pakistan</span>
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "React Native",
                        "Tailwind CSS",
                        "Firebase",
                        "TypeScript",
                      ].map((tech, index) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                          style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    Flutter Developer{" "}
                    <span className="text-primary-600">@ Dev's Inn Technologies</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Proficient in modern JavaScript frameworks, including
                        React.js, Next.js, React Native, and Tailwind CSS, with
                        extensive experience building scalable web and mobile
                        applications.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Delivered complex, production-grade solutions by
                        implementing advanced functionality and optimizing
                        performance for diverse client needs.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Successfully developed and deployed sophisticated
                        applications, ensuring seamless integration of
                        third-party APIs and delivering exceptional user
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 5 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300 mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/*5th Company Info Section */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  {/* Company Logo/Name */}
                  <div className="space-y-4">
                    <Link
                      href="https://www.linkedin.com/school/ewiglife/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300"
                    >
                      EwigLife Technologies
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {/* Position Badge */}
                    <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold border border-primary-200">
                      Flutter Mobile Application Developer
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">December 2020 - March 2021</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span>on-site / Pakistan</span>
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "React Native",
                        "Tailwind CSS",
                        "Firebase",
                        "TypeScript",
                      ].map((tech, index) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                          style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    Flutter Developer{" "}
                    <span className="text-primary-600">@ Ewiglife Technologies</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Proficient in modern JavaScript frameworks, including
                        React.js, Next.js, React Native, and Tailwind CSS, with
                        extensive experience building scalable web and mobile
                        applications.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Delivered complex, production-grade solutions by
                        implementing advanced functionality and optimizing
                        performance for diverse client needs.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Successfully developed and deployed sophisticated
                        applications, ensuring seamless integration of
                        third-party APIs and delivering exceptional user
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Card 6 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300 mb-8 mx-auto max-w-2xl">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center"></div>
                  {/* Key Achievements */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-gray-50 rounded-xl border border-primary-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">
                          10+ Projects Completed
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">
                          100% Client Satisfaction
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">
                          Mobile & Web Development
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">
                          Performance Optimization
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
  </section>
  );
};

export default Experience;