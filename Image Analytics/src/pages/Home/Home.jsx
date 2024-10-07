import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpeg";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black poppins-medium">
      <img
        src="https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-jplenio-1423600.jpg&fm=jpg"
        alt="Bg-image"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative grid grid-cols-2 items-center justify-center min-h-screen text-white poppins-medium">
        <div className="flex flex-col ml-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide md:leading-tight">
            Image Analytics for Tree Enumeration
          </h1>
          <span className="text-2xl font-medium py-5">
            Welcome to Tree Counting Application{" "}
          </span>
          <Button
            className="w-[200px] hover:bg-gray-600/90 bg-gray-800"
            onClick={() => {
              navigate("/predict");
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="mt-20 w-full flex justify-center">
          <div className="relative w-full flex justify-center">
            <div
              id="default-carousel"
              className="relative w-full mr-10"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className={`duration-700 ease-in-out ${
                    activeSlide === 0 ? "" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={img1}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-90"
                    alt="Slide 1"
                  />
                </div>

                <div
                  className={`duration-700 ease-in-out ${
                    activeSlide === 1 ? "" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={img2}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-90"
                    alt="Slide 2"
                  />
                </div>
                <div
                  className={`duration-700 ease-in-out ${
                    activeSlide === 2 ? "" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={img3}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-90"
                    alt="Slide 3"
                  />
                </div>
                <div
                  className={`duration-700 ease-in-out ${
                    activeSlide === 3 ? "" : "hidden"
                  }`}
                  data-carousel-item
                >
                  <img
                    src={img4}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-90"
                    alt="Slide 4"
                  />
                </div>
              </div>

              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === 0 ? "bg-white" : "bg-gray-500"
                  }`}
                  aria-current="true"
                  aria-label="Slide 1"
                  onClick={() => setActiveSlide(0)}
                ></button>
                <button
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === 1 ? "bg-white" : "bg-gray-500"
                  }`}
                  aria-current="false"
                  aria-label="Slide 2"
                  onClick={() => setActiveSlide(1)}
                ></button>
                <button
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === 2 ? "bg-white" : "bg-gray-500"
                  }`}
                  aria-current="false"
                  aria-label="Slide 3"
                  onClick={() => setActiveSlide(2)}
                ></button>
                <button
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === 3 ? "bg-white" : "bg-gray-500"
                  }`}
                  aria-current="false"
                  aria-label="Slide 4"
                  onClick={() => setActiveSlide(3)}
                ></button>
              </div>

              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => setActiveSlide((prev) => (prev - 1 + 2) % 4)}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={() => setActiveSlide((prev) => (prev + 1) % 4)}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
