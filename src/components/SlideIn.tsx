import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

export default function SlideIn({ children }) {
  const div = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(div.current, {
      y: 200,
      opacity: 0,
      ease: "ease-out",
      scrollTrigger: {
        trigger: div.current,
        scrub: true,
        start: "top 80%",
        end: "top 60%",
      },
    });
  }, [div]);

  return <div ref={div}>{children}</div>;
}
