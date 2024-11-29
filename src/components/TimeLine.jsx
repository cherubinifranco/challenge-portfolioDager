const JOBS = [
  {
    startDate: "Dec. 2020",
    finishDate: "Present",
    title: "Full Stack Developer",
    place: "University of Nebraska-Lincoln",
    description:
      "Full-stack (.NET Core, Java, MySQL, AWS) software development, dev team leading & systems design consulting.",
  },
  {
    startDate: "Dec. 2018",
    finishDate: "Present",
    title: "Software Developer",
    place: "Alpha Group 2000",
    description:
      "Software development, mostly on .NET, including, ASP.NET/Core, RESTful APIs, Xamarin, Winforms, tons of microservices and fun stuff.",
  },
  {
    startDate: "March 2016",
    finishDate: "Present",
    title: "Freelance Software Developer",
    place: "Independant Profesional",
    description:
      "Full-stack software development and general IT consulting, especially around optimization and automation of processes.",
  },
  {
    startDate: "Aug. 2017",
    finishDate: "Dec. 2018",
    title: "Help Desk Technician",
    place: "Atento",
    description:
      "Remote help desk support for one of the largest telecom companies in Argentina. Issues were broad, ranging from VoIP and Internet/Wi-Fi, to general networking and router config, CATV, DTV, UHF TV.",
  },
];

import RevealOnScroll from "./RevealOnScroll";

export default function TimeLine() {
  return (
    <section id="timeline" className="pt-8">
      <h1 className="poppins-bold w-full text-center text-alwhite text-3xl py-12">
        Work Experience
      </h1>
      {JOBS.map((el, index) => (
        <RevealOnScroll>
          <article
            className={
              "w-full flex justify-center " +
              (index % 2 == 0 ? "flex-row" : "flex-row-reverse")
            }
            key={index + el.startDate}
          >
            <div
              className={
                "w-80 flex-col flex " +
                (index % 2 == 0 ? "items-end text-right" : "items-start")
              }
            >
              <span className="text-thirdbg text-xs pb-2">
                {el.startDate + " - " + el.finishDate}
              </span>
              <h2 className="text-alwhite text-xl poppins-bold letter tracking-wide py-2">
                {el.title}
              </h2>
              <p className="text-thirdbg text-sm">{el.place}</p>
              <p className="text-alwhite py-3">{el.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-5 w-4 bg-alwhite rounded-full"></div>
              <div className="my-2 mx-6 w-1 bg-thirdbg rounded-lg h-full"></div>
            </div>
            <div className="w-80"></div>
          </article>
        </RevealOnScroll>
      ))}
    </section>
  );
}
