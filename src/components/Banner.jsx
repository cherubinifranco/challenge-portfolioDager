import banner from "../files/banner.png";
import downloadFile from "../files/download.png";
import * as icons from "../files/icons";
import { WORKLINKS, MEDIALINKS, SOCIALLINKS, MUSICLINKS } from "../data";
import { useState } from "react";
import mySound from "../files/audio.mp3";
import useSound from "use-sound";

const CONTENT = {
  title: "Hi, i'm Mariano Villa also known as Dot Dager",
  paragraphs: [
    "With nearly 9 years of experience as a developer, i've had an incredible journey, starting out as a freelancer and growing into a Team Realer role. Along the way i discovered my passion for helping others navigate the world of coding and tech.",
    "That's why i decided to create content on Youtube and Twitch - to share insights, tips, and real-world advice with aspiring developers. Through these platforms, i've connected with thousands of people worldwide, empowering countless individuals to kickstart and grow their careers in tech.",
  ],
};
export default function Banner() {
  const [playSound] = useSound(mySound);
  const [counter, updateCounter] = useState(0);
  const [showEgg, updateEgg] = useState(false);
  function trigger() {
    if (counter >= 5) {
      playSound();
      updateEgg(true);
      localStorage.setItem("egg", true)
    } else {
      updateCounter(counter + 1)
    }
  }
  return (
    <section id="banner" className="w-full">
      <div
        className={
          "flex flex-row justify-around items-center flex-wrap w-full h-[700px] bg-cover bg-center"
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
                <div className="pl-4 group-hover:text-[#c4302b] ">
                  {MEDIALINKS[0].icon}
                </div>
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
                  <strong>87k+</strong> Subscribers
                </p>
                <p>
                  <strong>70+</strong> Videos
                </p>
                <p>
                  <strong>2.7+</strong> Millon Views
                </p>
              </div>
            </a>
            <a
              href="https://www.twitch.tv/dagerxiv"
              target="_blank"
              className="flex items-center gap-4 group hover:bg-alwhite"
            >
              <div className=" p-2 ">
                <div className="pl-4 group-hover:text-[#6441a5] ">
                  {MEDIALINKS[1].icon}
                </div>
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
                  <strong>2800+</strong> Followers
                </p>
                <p>
                  <strong>400+</strong> Hours Streamed
                </p>
                <p>
                  <strong>6hs~</strong>Media per Stream
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
          {showEgg && (
            <a
              href="/experimental"
              className="inline-flex gap-2 p-4 bg-pepino mt-8 hover:bg-pepino2 ml-2"
            >
              Experimental
            </a>
          )}
        </div>
      </div>

      <div className="w-full bg-secondbg flex flex-row justify-around text-alwhite flex-wrap">
        <article className="flex items-center gap-6 ">
              <a
                href="https://github.com/MarianoVilla"
                target="_blank"
                className={
                  "inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[#2dba4e]"
                }
              >
                <div>{icons.githubicon}</div>
                <span>MarianoVilla</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US"
                target="_blank"
                className={
                  "inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[#0e76a8]"
                }
              >
                <div>{icons.linkedinIcon}</div>
                <span>Mariano Luis Villa</span>
              </a>
        </article>
        <article className="flex items-center gap-6 ">
              <a
                href="https://www.instagram.com/dager.32/"
                target="_blank"
                className={
                  "inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[#e4405f]"
                }
              >
                <div>{icons.instagramIcon}</div>
                <span>Dager.32</span>
              </a>
              <a
                href="https://x.com/Dager_32"
                target="_blank"
                className={
                  "inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[#55acee]"
                }
              >
                <div>{icons.twitterIcon}</div>
                <span>Dager_32</span>
              </a>
        </article>
        <article className="flex items-center gap-6 ">
              <a
                href="https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?nd=1"
                target="_blank"
                className={
                  "inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[#1ed760]"
                }
              >
                <div>{icons.spotifyicon}</div>
                <span>Dager</span>
              </a>
              <a
                href="https://www.youtube.com/c/DagerMusic"
                target="_blank"
                className={
                  "inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[#c4302b]"
                }
              >
                <div>{icons.youtubeIcon}</div>
                <span>DagerMusic</span>
              </a>
        </article>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, handle, className }) {
  return (
    <a
      href={href}
      target="_blank"
      className={
        "inline-flex items-center gap-2 cursor-pointer py-4 hover:text-[" + +"]"
      }
    >
      <div>{icon}</div>
      <span>{handle}</span>
    </a>
  );
}
