const links = [
  {
    name: "Home",
    link: "#banner",
  },
  {
    name: "Work",
    link: "#timeline",
  },
  {
    name: "About",
    link: "#about",
  }
];
import { logoIcon } from "../files/icons";

export default function Navbar() {
  return (
    <div className="bg-mainbg z-50 w-full sticky top-0 text-alwhite poppins-normal flex flex-row justify-around py-4">
      <h1>Quiero pepinos,si muchos pepinos</h1>
    </div>
  );
}

// Add burger functionality
