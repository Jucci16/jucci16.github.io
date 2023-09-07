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
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handler = (e) => setIsMobile(e.matches);
    window.matchMedia("(max-width: 750px)").addEventListener("change", handler);

    return window
      .matchMedia("(max-width: 600px)")
      .removeEventListener("change", handler);
  });

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

function isSingleColumnLayout(): boolean {
  const query = `(max-width: 600px)`;
}

// https://brittanychiang.com/
