const JOBS = [
  {
    title: "Dot Dager hace un concurso de web development",
    finishDate: "23 Nov. 2024",
    startDate: "21 Nov. 2024",
    place: "University of Nebraska-Lincoln",
    description: "Full-stack (.NET Core, Java, MySQL, AWS) software development, dev team leading & systems design consulting.",
  },
  {
    startDate: "2 Mar. 2011",
    finishDate: "",
    title: "Muere Bin Laden",
    place: "[deleted]",
    description: "[deleted]",
  },
  {
    startDate: "1 Dic. 2001",
    finishDate: "",
    title: "Corralito Financiero",
    place: "Argentina",
    description: "Restricción de retiro de efectivo de los bancos a 250 USD semanales, medida impuesta por el gobierno de Fernando de la Rúa",
  },
  {
    startDate: "11 Sep 2001",
    finishDate: "",
    title: "Caen las torres gemelas",
    place: "Atento o atentado",
    description: "Ataque interno de estados unidos, no explico pq me nismean",
  },
];

export default function TimeLine() {
  return (
    <section id="timeline" className="pt-8">
        <h1 className="poppins-bold w-full text-center text-alwhite text-3xl py-12">Work Experience</h1>
      {JOBS.map((el, index) => (
        <article className={"w-full flex justify-center " + (index % 2 == 0 ? "flex-row" : "flex-row-reverse")} key={index + el.startDate}>
          <div className={"w-80 flex-col flex "  + (index % 2 == 0 ? "items-end text-right" : "items-start")}>
            <span className="text-thirdbg text-xs pb-2">
              {el.startDate + " - " + el.finishDate}
            </span>
            <h2 className="text-alwhite text-xl poppins-bold letter tracking-wide py-2">{el.title}</h2>
            <p className="text-thirdbg text-sm">{el.place}</p>
            <p className="text-alwhite py-3">{el.description}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-5 w-4 bg-alwhite rounded-full"></div>
            <div className="my-2 mx-6 w-1 bg-thirdbg rounded-lg h-full"></div>
          </div>
          <div className="w-80"></div>
        </article>
      ))}
    </section>
  );
}
