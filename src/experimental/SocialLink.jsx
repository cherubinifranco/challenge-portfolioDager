export default function SocialLink({ href, icon, handle, color, key }) {
  return (
    <a
      key={key}
      href={href}
      target="_blank"
      className="inline-flex items-center gap-2 group cursor-pointer py-4"
    >
      <i className={"group-hover:text-[" + color + "]"}>{icon}</i>
      <span>{handle}</span>
    </a>
  );
}
