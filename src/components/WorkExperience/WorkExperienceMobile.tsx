import { useState } from "react";

export default function WorkExperienceMobile({
  workExperienceProps,
}: WorkExperienceProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      style={{
        marginTop: "2rem",
        borderRadius: "1rem",
        overflow: "hidden",
        padding: "1rem",
        background: `${isHover ? "rgba(var(--light-gray), .05)" : ""}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h6
        style={{ color: "rgb(var(--light-gray))", textTransform: "uppercase" }}
      >
        {workExperienceProps.date}
      </h6>
      <h4 style={{ marginBottom: "0" }}>{workExperienceProps.company}</h4>
      <h6
        style={{ color: "rgb(var(--light-gray))", textTransform: "uppercase" }}
      >
        {workExperienceProps.jobTitle}
      </h6>

      <p style={{ color: "rgb(var(--light-gray))" }}>
        {workExperienceProps.description}
      </p>
      <div style={{ display: "flex", flexFlow: "row", flexWrap: "wrap" }}>
        {workExperienceProps.technologies.map((tech, i) => (
          <span
            key={i}
            style={{
              marginRight: ".5rem",
              marginBottom: ".5rem",
              background: "rgb(var(--accent-dark))",
              padding: ".5rem",
              paddingLeft: ".75rem",
              paddingRight: ".75rem",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <p
              style={{
                marginTop: "0",
                marginBottom: "0",
                lineHeight: "1.25rem",
              }}
            >
              {tech}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}
