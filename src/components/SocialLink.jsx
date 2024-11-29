import * as data from "../data"
export default function SocialLink({ href, icon, handle, color = "#aaaa", key }) {
  const clases = `inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[${{color}}]`
  const newClases = clases.toString()
  return (
    <a
      href={href}
      target="_blank"
      className={newClases}
    >
      <div>{icon}</div>
      <span>{handle}</span>
      <span>{`[${color}]`}</span>
      <span>{newClases}</span>
    </a>
  );
}

