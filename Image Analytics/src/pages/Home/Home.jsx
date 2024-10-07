import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import images from "@/lib/Images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
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
            className="w-[200px] bg-gray-600/90 hover:bg-gray-800"
            onClick={() => {
              navigate("/predict");
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="mt-20 w-full flex justify-center">
          <div className="relative w-full flex justify-center">
            <Carousel className="w-[600px] h-[350px]">
              <CarouselContent className="h-[400px] w-[600px]">
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative p-6 h-full group">
                      <Card className="h-full">
                        <CardContent className="flex p-0 h-full items-center justify-center">
                          <div className="relative w-full h-full">
                            <img
                              src={image}
                              alt={`Image ${index + 1}`}
                              className="object-cover h-full w-full transition-opacity duration-300 group-hover:opacity-70 rounded-lg  "
                            />
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30 bg-black" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                <CarouselPrevious className="opacity-100 p-2 bg-white bg-opacity-70 rounded-full transition duration-300  text-black hover:bg-opacity-100 cursor-pointer ">
                  <FaArrowLeft size={40} />
                </CarouselPrevious>
              </div>

              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                <CarouselNext className="opacity-100 p-2 bg-white bg-opacity-70 rounded-full transition duration-300  text-black  hover:bg-opacity-100 cursor-pointer">
                  <FaArrowRight size={32} />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
