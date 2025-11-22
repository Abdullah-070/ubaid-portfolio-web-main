import React from "react";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Rocket,
  Heart,
  Star,
} from "lucide-react";

const MyStory = () => {
  const storyTimeline = [
    {
      year: "2017",
      title: "Punjab College, Lahore",
      description:
        "Started my educational journey with FSc Pre-Engineering, scoring 70%. Built a strong foundation in mathematics and science while developing an interest in technology.",
      icon: BookOpen,
      color: "from-primary-light to-primary-600",
    },
    {
      year: "2020",
      title: "University of The Punjab, Lahore",
      description:
        "Enrolled in BS-IT (2-years) with 3.0 CGPA. Entered the university world with a passion for technology and a desire to learn. Began exploring programming languages and foundational concepts.",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "2021",
      title: "Flutter Mobile App Developer",
      description:
        "Joined Ewigile Technologies as a Flutter Mobile Application Developer (Dec 2020 - Mar 2021). Built multiple mobile projects to solidify expertise, turning ideas into functional applications and learning production-level development.",
      icon: Rocket,
      color: "from-pink-500 to-pink-600",
    },
    {
      year: "2022",
      title: "Full Stack Development Growth",
      description:
        "Worked at Dev's Inn Technologies as a Flutter Developer (Feb - Sep 2022). Completed my 2-year BS-IT degree with 3.0 CGPA. Learned advanced tools like Next.js and Ionic while contributing to complex production projects.",
      icon: Briefcase,
      color: "from-green-500 to-green-600",
    },
    {
      year: "2023",
      title: "Project Management & Technical Leadership",
      description:
        "Transitioned to Technical Project Manager roles at Orcalo Holdings (Aug - Sep 2023) and Dev's Inn Technologies (Sep 2022 - Present). Led development efforts, managed project coordination, and mentored junior developers while handling complex production projects.",
      icon: Briefcase,
      color: "from-orange-500 to-orange-600",
    },
    {
      year: "2024",
      title: "Securehops Limited - Senior Technical Role",
      description:
        "Currently serving as Technical Project Manager / IT Project Manager at Securehops Limited (Sep 2023 - Present). Pursuing freelancing alongside my full-time role to help clients bring creative ideas to life, focusing on innovative and efficient web solutions.",
      icon: Star,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            My Story<span className="text-primary-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            A journey of passion, learning, and growth in the world of software
            development, from humble beginnings to creating impactful digital
            solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 to-primary-dark transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {storyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={item.year}
                  className="relative flex items-center gap-0 lg:gap-0"
                  style={{ animationDelay: `${300 + index * 200}ms` }}
                >
                  {/* Left Content (visible on even index on desktop) */}
                  {isEven ? (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:pr-8">
                      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: `${300 + index * 200}ms` }}>
                        <div
                          className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}
                        >
                          {item.year}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden lg:flex lg:flex-1"></div>
                  )}

                  {/* Center Timeline Icon */}
                  <div className="relative z-10 flex-shrink-0 flex justify-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Right Content (visible on odd index on desktop) */}
                  {!isEven ? (
                    <div className="hidden lg:flex lg:flex-1 lg:pl-8">
                      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: `${300 + index * 200}ms` }}>
                        <div
                          className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}
                        >
                          {item.year}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden lg:flex lg:flex-1"></div>
                  )}

                  {/* Mobile View - always on the right */}
                  <div className="flex lg:hidden flex-1 pl-8">
                    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
                      style={{ animationDelay: `${300 + index * 200}ms` }}>
                      <div
                        className={`inline-block bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-lg lg:text-2xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up delay-1000">
          <div className="bg-gradient-to-r from-primary-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-primary-100">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary-600 animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Passion for Innovation
              </h3>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Every project is an opportunity to learn, grow, and create
              something amazing.
              {` I'm`} excited to continue this journey and help bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-primary-600 font-semibold">
                <Star className="w-5 h-5" />
                <span>Ready to create something amazing together?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;