import { useState } from "react";

export default function WorkExperienceDesktop({
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
        display: "grid",
        gridTemplateColumns: "200px 1fr",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ gridColumnStart: "1", gridColumnEnd: "2" }}>
        <h6
          style={{
            color: "rgb(var(--light-gray))",
            textTransform: "uppercase",
            marginTop: "0.5rem",
          }}
        >
          {workExperienceProps.date}
        </h6>
      </div>
      <div style={{ gridColumnStart: "2", gridColumnEnd: "3" }}>
        <h4>{workExperienceProps.jobTitle}</h4>
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
    </div>
  );
}
