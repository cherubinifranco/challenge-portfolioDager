import banner from "../files/bannerExperimental.jpg";
import downloadFile from "../files/download.png";
import * as icons from "../files/icons";
import { WORKLINKS, MEDIALINKS, SOCIALLINKS, MUSICLINKS } from "../data";
import SocialLink from "./SocialLink";
import { useState } from "react";

const phIcon = (
  <svg viewBox="0 0 177.36 49.7" width="80" height="80">
    <path
      d="M173.66 0h-72.12c-2.24.25-3.48 1.62-3.7 4.13v41.44c.22 2.5 1.45 3.87 3.68 4.13h72.16c2.23-.26 3.46-1.63 3.68-4.13V4.13c-.22-2.5-1.46-3.88-3.7-4.13"
      fill="#f7971d"
    />
    <path d="M170.05 19.3c-1.22-1.35-2.87-2.22-4.66-2.62-.52-.13-1.1-.23-1.76-.26-2.37-.2-5.4.73-6.82 1.92l.34-9.7h-5.76v30.04h5.35v-1.66c1.23 1 3.2 2.15 6.23 2.15H163.54c2.53 0 4.68-1 6.45-3 1.77-2.02 2.65-4.88 2.65-8.6 0-3.6-.86-6.35-2.6-8.27M165.4 33c-.88 1.08-1.97 1.62-3.24 1.62-1.65 0-2.98-.76-3.97-2.3-.72-1.07-1.08-2.74-1.08-5 0-2.18.46-3.8 1.37-4.88.9-1.07 2.06-1.6 3.44-1.6 1.4 0 2.56.54 3.46 1.64s1.35 2.9 1.35 5.38c0 2.34-.45 4.05-1.34 5.13m-23.28-6.9c0 3.1-.14 5.07-.43 5.87-.3.8-.83 1.47-1.6 2-.8.55-1.67.8-2.65.8-.86 0-1.57-.2-2.13-.6s-.95-.94-1.16-1.63c-.2-.7-.32-2.56-.32-5.63v-10h-5.76v13.8c0 2.04.26 3.64.78 4.8s1.36 2.07 2.52 2.7c1.16.65 2.47.97 3.94.97.22 0 .43 0 .65-.02 3.68-.1 5.6-1.77 6.56-2.87v2.4h5.35V16.9h-5.76zm-18.8-7.05c-.53-.77-1.33-1.4-2.4-1.9-.96-.43-2.03-.67-3.2-.72h-.06c-2.43-.13-5.53.58-6.98 1.97V8.64h-5.76v30.04h5.76v-10.9c0-1.83.17-3.22.52-4.15.35-.94.9-1.64 1.65-2.1.75-.47 1.6-.7 2.56-.7.84 0 1.54.18 2.1.54.54.36.93.85 1.15 1.47.22.6.33 2.06.33 4.34v11.5h5.75V25.9c0-1.94-.1-3.38-.3-4.3-.2-.94-.56-1.8-1.1-2.55m-32.47 1.31c-.22-.94-.62-1.8-1.18-2.54-.57-.75-1.4-1.36-2.52-1.84s-2.32-.72-3.66-.72c-2.42-.14-6.36.78-7.54 2.67v-2.16h-5.63v22.9h6.06V28.3c0-2.56.14-4.3.45-5.26.3-.95.88-1.7 1.7-2.3.85-.56 1.8-.85 2.84-.85.8 0 1.5.2 2.1.6.57.4 1 .96 1.25 1.7.26.7.4 2.3.4 4.78v11.68h6.05V24.44c0-1.77-.12-3.13-.34-4.08M62 15.34c-1.8.23-3.5 1.68-4.25 2.6v-2.17h-5.63v22.9h6.06V31.6c0-3.9.17-6.46.5-7.68.34-1.22.8-2.06 1.4-2.53.58-.48 1.3-.7 2.15-.7.88 0 1.82.32 2.84.98l1.88-5.28c-1.28-.76-2.6-1.14-4-1.14-.32 0-.64.03-.95.08m-24.7-.08c-2.25 0-4.28.5-6.1 1.48-1.8 1-3.22 2.43-4.2 4.3-1 1.9-1.5 3.84-1.5 5.86 0 2.63.5 4.86 1.5 6.7.98 1.82 2.43 3.2 4.34 4.16 1.9.95 3.9 1.42 6 1.42 3.4 0 6.2-1.14 8.44-3.4s3.35-5.16 3.35-8.63c0-3.43-1.1-6.27-3.32-8.52-2.2-2.25-5.04-3.37-8.5-3.37m4 17.18c-1.08 1.2-2.4 1.8-3.98 1.8s-2.9-.6-4-1.8c-1.07-1.2-1.6-2.95-1.6-5.22s.53-4 1.6-5.22c1.1-1.2 2.42-1.8 4-1.8s2.9.6 3.98 1.8c1.07 1.2 1.6 2.93 1.6 5.18 0 2.3-.53 4.05-1.6 5.26M17.83 7.54c-1.18-.32-3.7-.48-7.6-.48H0v31.6h6.38V26.74h4.16c2.9 0 5.1-.15 6.62-.45 1.12-.25 2.22-.75 3.3-1.5s2-1.8 2.7-3.12 1.05-2.95 1.05-4.9c0-2.5-.6-4.56-1.82-6.15-1.23-1.6-2.74-2.62-4.55-3.1m-.92 11.8c-.47.7-1.13 1.22-1.98 1.55s-2.53.5-5.05.5h-3.5V12.4h3.1c2.3 0 3.82.08 4.58.23 1.04.18 1.9.65 2.57 1.4.67.74 1 1.7 1 2.84 0 .94-.23 1.76-.7 2.46" />
  </svg>
);

const ofIcon = (
  <svg
    viewBox="-20.62 0.53 820.42 555.49"
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
  >
    <path
      d="M266.82.53c35 0 69.65 6.91 101.98 20.34s61.71 33.11 86.45 57.93c24.75 24.81 44.37 54.27 57.77 86.7a267.919 267.919 0 0 1 20.29 102.27c0 108.09-64.93 205.53-164.51 246.89s-214.2 18.5-290.41-57.93C2.18 380.3-20.62 265.36 20.62 165.5 61.87 65.64 159.04.53 266.82.53zm0 347.4c10.5.01 20.9-2.05 30.61-6.07s18.52-9.93 25.95-17.38 13.31-16.29 17.33-26.02a80.365 80.365 0 0 0 6.06-30.7c0-32.43-19.48-61.66-49.35-74.07s-64.26-5.55-87.12 17.38-29.7 57.41-17.33 87.37 41.53 49.49 73.86 49.49z"
      fill="#00aeef"
    />
    <path
      d="M566.35 200.96c67.71 19.54 147.63 0 147.63 0-23.19 101.55-96.75 165.15-202.81 172.89a266.766 266.766 0 0 1-40.48 65.86 266.208 266.208 0 0 1-57.62 51.43c-21.6 14.24-45.15 25.25-69.92 32.68s-50.48 11.19-76.33 11.18l79.95-254.81C428.95 18.28 471.08.54 665.98.54H799.8c-22.38 98.88-99.54 174.41-233.44 200.42z"
      fill="#008ccf"
    />
  </svg>
);

const CONTENT = {
  title: "Hola, soy Mariano. Mejor conocido como Dot Dager",
  paragraphs: [
    "Buenas y bienvenidos a mi TED TALK. Cuento con más de 9 años de experiencia siendo developer. Y cuento con 20+ años desde mi primera paja.",
    "Desde que descubri que el porno podia verse en formato digital se me ocurrio la idea perfecta. Si estudio programacion, nadie va a dudar de que pase tanto tiempo frente a la pantalla.",
  ],
};
export default function Banner() {
  const [counter, updateCounter] = useState(0);
  const [showEgg, updateEgg] = useState(false);
  function trigger() {
    if (counter >= 10) {
      updateEgg(true);
    } else {
      updateCounter(counter + 1);
      console.log(counter)
    }
  }
  return (
    <section id="banner" className="w-full">
      <div
        className={
          "flex flex-row justify-around items-center flex-wrap w-full h-[700px] bg-fit bg-center"
        }
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-[700px] opacity-80 position absolute bg-gradient-to-r from-transparent from-40% to-black to-50%"></div>

        <div></div>
        <div className="text-white z-10">
          <h1 className="text-3xl max-w-[23ch] pb-8 mx-4 poppins-normal">
            {CONTENT.title}
          </h1>
          {CONTENT.paragraphs.map((par, index) => (
            <p
              key={index + "paragraph"}
              className="text-sm max-w-[55ch] mx-4 pb-2 font-normal"
            >
              {par}
            </p>
          ))}
          <div className="flex flex-row justify-between pt-4 ml-2">
            <a
              href="https://www.youtube.com/@DotDager"
              target="_blank"
              className="flex items-center gap-4 group hover:bg-alwhite"
            >
              <div className=" p-2 ">
                <div className="pl-4 group-hover:text-[#c4302b] ">{phIcon}</div>
                <span
                  className={
                    "inline-flex + group-hover:text-[" +
                    MEDIALINKS[0].color +
                    "]"
                  }
                >
                  {MEDIALINKS[0].handle}
                </span>
              </div>
              <div className="flex flex-col p-2 group-hover:text-black">
                <p>
                  <strong>52+</strong> Videos Grabados
                </p>
                <p>
                  <strong>750hs+</strong> Contenido
                </p>
                <p>
                  <strong>11.3+</strong> Millon Views
                </p>
              </div>
            </a>
            <a
              href="https://www.twitch.tv/dagerxiv"
              target="_blank"
              className="flex items-center gap-4 group hover:bg-alwhite"
            >
              <div className=" p-2 ">
                <div className="pl-4 group-hover:text-[#6441a5] ">{ofIcon}</div>
                <span
                  className={
                    "inline-flex + group-hover:text-[" +
                    MEDIALINKS[1].color +
                    "]"
                  }
                >
                  {MEDIALINKS[1].handle}
                </span>
              </div>
              <div className="flex flex-col p-2 group-hover:text-black">
                <p>
                  <strong>2800+</strong> Perfiles Seguidos
                </p>
                <p>
                  <strong>400+</strong> Dedicadas
                </p>
                <p>
                  <strong>35k+</strong> Dolares Invertidos
                </p>
              </div>
            </a>
          </div>
          <a
            href={downloadFile}
            download="Resume"
            className="inline-flex gap-2 p-4 bg-pepino mt-8 hover:bg-pepino2 ml-2"
            onClick={() => trigger()}
          >
            Download Resume {icons.downloadIcon}
          </a>
          <a
            href="/"
            className="inline-flex gap-2 p-4 bg-pepino mt-8 hover:bg-pepino2 ml-2"
          >
            Take me BACK
          </a>
          {showEgg && (
            <a
              href="https://tbot.xyz/lumber/"
              target="_blank"
              className="inline-flex gap-2 p-4 bg-pepino mt-8 hover:bg-pepino2 ml-2"
            >
              Viejas Calientes por mi zona
            </a>
          )}
        </div>
      </div>

      <div className="w-full bg-secondbg flex flex-row justify-around text-alwhite flex-wrap">
        <article className="flex items-center gap-6 ">
          {WORKLINKS.map((el, index) => (
            <SocialLink
              href={el.url}
              icon={el.icon}
              handle={el.handle}
              color={el.color}
              key={index + "workLink"}
            />
          ))}
        </article>
        <article className="flex items-center gap-6 ">
          {SOCIALLINKS.map((el, index) => (
            <SocialLink
              href={el.url}
              icon={el.icon}
              handle={el.handle}
              color={el.color}
              key={index + "socialLink"}
            />
          ))}
        </article>
        <article className="flex items-center gap-6 ">
          {MUSICLINKS.map((el, index) => (
            <SocialLink
              href={el.url}
              icon={el.icon}
              handle={el.handle}
              color={el.color}
              key={index + "musicLink"}
            />
          ))}
        </article>
      </div>
    </section>
  );
}
