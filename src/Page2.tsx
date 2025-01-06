import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const Page2: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row max-h-[400px] overflow-y-auto">
        <div className="flex-1">
          <SideBar></SideBar>
        </div>
        {/* main content */}
        <div className="flex-2 lg:overflow-y-auto md:w-[calc(100%-5rem)] lg:w-[calc(100%-16rem)] p-4 md:p-6 pt-8 bg-white/60 md:bg-transparent">
          <div className="flex flex-col gap-10">
            <header className="bg-blue-600 text-white py-8 text-center">
              <h1 className="text-4xl font-bold">Welcome to Big Hero</h1>
              <p className="mt-2 text-lg">
                Empowering your digital journey with style and functionality
              </p>
            </header>
            <section className=" bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Content 1</h2>
              <p className="text-gray-700 leading-relaxed">
                Discover a variety of tools and techniques to streamline your
                workflow and enhance productivity. From project management to
                creative design, explore endless possibilities.
              </p>
            </section>
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Content 2</h2>
              <p className="text-gray-700 leading-relaxed">
                Learn from experts and gain insights into the latest trends and
                technologies shaping the future. Stay ahead and innovate with
                confidence.
              </p>
            </section>
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Content 2</h2>
              <p className="text-gray-700 leading-relaxed">
                Learn from experts and gain insights into the latest trends and
                technologies shaping the future. Stay ahead and innovate with
                confidence.
              </p>
            </section>
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Content 2</h2>
              <p className="text-gray-700 leading-relaxed">
                Learn from experts and gain insights into the latest trends and
                technologies shaping the future. Stay ahead and innovate with
                confidence.
              </p>
            </section>
            <section className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Content 2</h2>
              <p className="text-gray-700 leading-relaxed">
                Learn from experts and gain insights into the latest trends and
                technologies shaping the future. Stay ahead and innovate with
                confidence.
              </p>
            </section>
            <Link
                    to="/"
                    className="flex items-center justify-center mt-20 hover:text-violet-500"
                  >
                    Back to LandingPage
                  </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
