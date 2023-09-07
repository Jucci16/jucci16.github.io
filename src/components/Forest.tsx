import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

export default function Forest() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#bg", {
      y: -30,
      duration: 5,
      scrollTrigger: {
        scrub: true,
        start: "top 90px",
        end: "bottom 90px",
      },
    });

    gsap.to("#middle", {
      y: -100,
      duration: 5,
      scrollTrigger: {
        scrub: true,
        start: "top 90px",
        end: "bottom 90px",
      },
    });
    gsap.to("#cloud", {
      x: 200,
      duration: 5,
      scrollTrigger: {
        scrub: true,
        start: "top 90px",
        end: "bottom 90px",
      },
    });
    gsap.to("#front", {
      y: -200,
      duration: 5,
      scrollTrigger: {
        scrub: true,
        start: "top 90px",
        end: "bottom 100px",
      },
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "8/5",
      }}
    >
      <img
        id="bg"
        src="/Home-Trees-Back.png"
        style={{ position: "absolute" }}
      />
      <img
        id="middle"
        src="/Home-Trees-Middle.png"
        style={{ position: "absolute" }}
      />
      <img
        id="cloud"
        src="/Cloud.webp"
        style={{ position: "absolute", aspectRatio: "1", width: "40%" }}
      />
      <img
        id="front"
        src="/Home-Trees-Front.png"
        style={{ position: "absolute" }}
      />
    </div>
  );
}
