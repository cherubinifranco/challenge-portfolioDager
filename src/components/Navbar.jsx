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
      <a href="/" className="inline-flex items-center">{logoIcon} Dot Dager</a>
      <div>
        {links.map((el, index) => (
          <a href={el.link} key={index + el.name} className="px-2 group">
            <span className="poppins-thin hover:text-white">{index + 1}. </span>
            <span className="group-hover:text-pepino2">{el.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// Add burger functionality
