import { projectIcons, brackets, externalLink } from "../files/icons";
const PROJECTS = [
  {
    icon: projectIcons.gitsharp,
    title: "Git-in-CSharp",
    paragraphs: [
      "The objective of this project is to build a barebones version of Git with teachinf porpouse.",
      "In the stream we talk about books related to git, howgit works, and how to build your own file tracker system.",
    ],
    url: "http://www.youtube.com/embed/playlist?list=PL6ZpaevWeaf9gDDIr4WlhPhdtQ0LdUthe/",
    repository: "https://github.com/MarianoVilla/Git-In-CSharp",
  },
  {
    icon: projectIcons.dnssharp,
    title: "DNS-Server",
    paragraphs: [
      "This project aims to teach every part of a DNS server and how to build one.",
      "How to build a DNS is a playlist of 5 videos that discuss things like: DNS protocol, DNS structure, Hierarchy, Headers, Questions, Responses and more.",
    ],
    url: "http://www.youtube.com/embed/playlist?list=PL6ZpaevWeaf8LIjIxmhW0de947xkcZvgg/",
    repository: "https://github.com/MarianoVilla/DNS-Server",
  },
  {
    icon: projectIcons.cubevsia,
    title: "WorldHardesGame-vs-AI",
    paragraphs: [
      "What happens when you put AI to compete with the World Hardest Game? You learn how AI works.",
      "In this video we talk about Genetic Algorithm in AI, Single Point Crossover, Mutation and Elitism.",
    ],
    url: "http://www.youtube.com/embed/JMzoBcPpwhk/embed/M7lc1UVf-VE/",
    repository: "https://github.com/MarianoVilla/WorldHardestGame-vs-AI",
  },
];

export default function Projects() {
  return (
    <section id="#projects" className="text-alwhite">
      <h1 className="poppins-bold w-full text-center text-alwhite text-3xl py-12">
        Featured Projects
      </h1>
      {PROJECTS.map((project, index) => (
        <article className="p-6" key={index + "project"}>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="inline-flex gap-4">
              <span className="poppins-normal tracking-wide text-2xl">
                {"I".repeat(index + 1) + "."}
              </span>

              <div className="bg-secondbg flex flex-col justify-between p-4">
                <div className="flex flex-row justify-between">
                  <div className="">{brackets.tl}</div>
                  <div className="0">{brackets.tr}</div>
                </div>
                <div className="p-2 mx-6 flex flex-col items-center justify-center gap-2">
                  {project.icon}
                  <h1 className="text-2xl poppins-normal font-semibold tracking-wide ">
                    {project.title}
                  </h1>
                  {project.paragraphs.map((par, index) => (
                    <p
                      key={index + "project-paragraph"}
                      className="max-w-[40ch] py-1"
                    >
                      {par}
                    </p>
                  ))}
                  <a
                    href={project.repository}
                    target="_blank"
                    className="mt-3 inline-flex gap-2 text-sm hover:underline"
                  >
                    Open repo {externalLink}
                  </a>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="">{brackets.bl}</div>
                  <div className="0">{brackets.br}</div>
                </div>
              </div>
            </div>

            <div className="bg-secondbg flex flex-col justify-between p-4 ml-6">
              <div className="flex flex-row justify-between">
                <div className="">{brackets.tl}</div>
                <div className="0">{brackets.tr}</div>
              </div>
              <iframe
                className="mx-6 w-96 h-60"
                id="ytplayer"
                type="text/html"
                src={project.url}
                frameborder="0"
              />
              <div className="flex flex-row justify-between">
                <div className="">{brackets.bl}</div>
                <div className="0">{brackets.br}</div>
              </div>
            </div>
          </div>
        </article>
      ))}

    </section>
  );
}
