import { useState, useEffect } from "react";
import WorkExperienceMobile from "./WorkExperience/WorkExperienceMobile.tsx";
import WorkExperienceDesktop from "./WorkExperience/WorkExperienceDesktop.tsx";

export interface WorkExperienceProps {
  date: string;
  jobTitle: string;
  company: string;
  description: string;
  technologies: string[];
}

export default function WorkExperience({
  workExperienceProps,
}: WorkExperienceProps) {
  const query = `(max-width: 600px)`;
  const [isMobile, setIsMobile] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const handler = (e) => setIsMobile(e.matches);
    window.matchMedia(query).addEventListener("change", handler);

    return window.matchMedia(query).removeEventListener("change", handler);
  }, []);

  return (
    <div>
      {isMobile ? (
        <WorkExperienceMobile workExperienceProps={workExperienceProps} />
      ) : (
        <WorkExperienceDesktop workExperienceProps={workExperienceProps} />
      )}
    </div>
  );
}

function isSingleColumnLayout(): boolean {}

// https://brittanychiang.com/
