import music1 from "../files/music1.png";
import music2 from "../files/music2.png";
import gato1 from "../files/gato1.png";
import gato2 from "../files/gato2.png";
import RevealOnScroll from "./RevealOnScroll";

const CONTENT = {
  title: "More than just a developer",
  subtitle: "My only joy isn’t always about coding or teaching.",
  paragraph:
    "Playing the guitar isn’t always about the sound. Sometimes is about making something unique and by my own. The guitar lets me explore a different kind of creativity that balances out my life in front of a screen. It’s my way of connecting with something deeper and finding inspiration beyond the lines of code.",
};
const CONTENT2 = {
  title: "Couldn't forget about my lovely pets",
  subtitle: "",
  paragraph:
    "If i'm not coding, and i'm not playing the guitar. Then i'm probably just hanging out with my cat. Who's basically the boss, and my reason to work. Sometimes he's sleepy and sometimes he is a machine of chaos. But i´m happy  with just staring at him.",
};

export default function About() {
  return (
    <section id="about" className="pt-8 text-alwhite ">
      <RevealOnScroll>
        <h1 className="poppins-bold w-full text-center text-3xl py-12">
          {CONTENT.title}
        </h1>
        <main className="flex flex-row flex-wrap justify-center">
          <article>
            <div className="flex flex-row justify-center gap-4 pb-12 flex-wrap">
              <div className="relative w-80 h-80">
                <img
                  src={music1}
                  alt="Dager playing the guitar"
                  className="absolute top-40 left-40 h-56 w-96  object-cover rounded-lg shadow-lg z-10"
                />
                <img
                  src={music2}
                  alt="Dager playing the guitar"
                  className="absolute top-0 left-0 w-80 h-80 object-cover rounded-lg shadow-lg z-0"
                />
              </div>

              <div className="w-96 z-20">
                <h2 className="poppins-bold max-w-[16ch] text-3xl pt-6 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                  {CONTENT.subtitle}
                </h2>
                <p className="mmd:pl-40 mx-auto p-4">{CONTENT.paragraph}</p>
              </div>
            </div>

            <iframe
              className="rounded-lg mx-auto w-3/4 max-w-[600px]"
              src="https://open.spotify.com/embed/track/7q0KH2lrMolZWgXlqYATGH?utm_source=generator"
              height="152"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </article>
          <article>
            <h1 className="poppins-bold w-full text-center text-3xl py-12">
              {CONTENT2.title}
            </h1>
            <div className="flex flex-row justify-center pb-24 pr-40">
              <div className="relative w-80 h-80">
                <img
                  src={gato1}
                  alt="Dager playing the guitar"
                  className="absolute top-40 left-40 h-56 w-80  object-cover rounded-lg shadow-lg z-10"
                />
                <img
                  src={gato2}
                  alt="Dager playing the guitar"
                  className="absolute top-0 left-0 w-80 h-80 object-cover rounded-lg shadow-lg z-0"
                />
              </div>
            </div>
            <p className="max-w-[60ch] mx-auto p-4 pb-10">
              {CONTENT2.paragraph}
            </p>
          </article>
        </main>
      </RevealOnScroll>
    </section>
  );
}
