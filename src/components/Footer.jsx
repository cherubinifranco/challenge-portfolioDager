import { WORKLINKS, MEDIALINKS, SOCIALLINKS, MUSICLINKS } from "../data";

const FOOTERLINKS = [
  WORKLINKS,
  MEDIALINKS,
  SOCIALLINKS,
  MUSICLINKS,
  [
    {
      name: "Experimental",
      handle: "Se pica",
      url: "/experimental",
      color: "#1ED760",
    },
  ],
];

export default function Footer() {
  return (
    <section
      id="#footer"
      className="flex flex-row justify-around p-10 font-semibold bg-secondbg w-full text-alwhite text-sm"
    >
      <article className="">
        <h1 className="text-xl max-w-[23ch] poppins-semibold">Contact Me</h1>
        {WORKLINKS.map((link, index) => (
          <a key={index + "wlanchor"} target="_blank"  href={link.url} className={"flex items-center gap-2 py-2 hover:text-blue-400"}>
            {link.icon}
            {link.handle}
          </a>
        ))}
      </article>
      <article className="">
        <h1 className="text-xl max-w-[23ch] poppins-semibold">Watch my Content</h1>
        {MEDIALINKS.map((link, index) => (
          <a key={index + "mlanchor"} target="_blank"  href={link.url} className={"flex items-center gap-2 py-2 hover:text-blue-400"}>
            {link.icon}
            {link.handle}
          </a>
        ))}
      </article>
      <article className="flex flex-col">
        <h1 className="text-xl max-w-[23ch] poppins-semibold">Find Me</h1>
        {SOCIALLINKS.map((link, index) => (
          <a key={index + "slanchor"} target="_blank"  href={link.url} className={"flex items-center gap-2 py-2 hover:text-blue-400"}>
            {link.icon}
            {link.handle}
          </a>
        ))}
      </article>
      <article className="">
        <h1 className="text-xl max-w-[23ch] poppins-semibold">Hear my Music</h1>
        {MUSICLINKS.map((link, index) => (
          <a key={index + "mlanchor"} target="_blank" href={link.url} className={"flex items-center gap-2 py-2 hover:text-blue-400"}>
            {link.icon}
            {link.handle}
          </a>
        ))}
      </article>
    </section>
  );
}
