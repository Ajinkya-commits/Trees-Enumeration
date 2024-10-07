import { useNavigate } from "react-router-dom";
import { PiTreePalmFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between p-4 z-50 text-white bg-black bg-opacity-50">
      <div className="font-bold text-4xl">
        <PiTreePalmFill />
      </div>
      <div className="space-x-4 flex justify-evenly w-full ml-[800px]">
        <div>
          <Button
            className="border-none bg-transparent text-inherit p-2 m-0 text-2xl hover:cursor-pointer hover:bg-neutral-500/40"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </div>
        <div>
          <Button
            className="border-none bg-transparent text-inherit p-2 m-0 text-2xl hover:cursor-pointer hover:bg-neutral-500/40"
            onClick={() => navigate("/about")}
          >
            About
          </Button>
        </div>
        <div>
          <Button
            className="border-none bg-transparent text-inherit p-2 m-0 text-2xl hover:cursor-pointer z-30 hover:bg-neutral-500/40"
            onClick={() => navigate("/predict")}
          >
            Predict
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
