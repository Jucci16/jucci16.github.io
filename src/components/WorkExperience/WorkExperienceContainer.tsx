import WorkExperience from "../WorkExperience.tsx";
import SlideIn from "../SlideIn.tsx";

export default function WorkExperienceContainer() {
  const experience = [
    {
      date: "Dec 2021 - Present",
      jobTitle: "Software Developer Consultant",
      company: "Improving",
      description:
        "The ability to identify project requirements. Deliver high-quality, enterprise-level code for a wide range of projects. Provide support and direction to clients where needed, while also growing each of the members on the client’s team. Deploying applications with modern and best practices (CI/CD)",
      technologies: [
        ".Net",
        "C#",
        "Python",
        "React",
        "Unity",
        "Azure",
        "TypeScript",
        "JavaScript",
      ],
    },
    {
      date: "Jun 2019 - Dec 2021",
      jobTitle: "Configuration Services Software Consultant",
      company: "Open Systems Technologies",
      description:
        "Construct customer extensions in Configura's 3D graphics engine. Mentored junior-level software developers. Design and implemented internal frameworks and tools used to increase development speed for new customers.",
      technologies: ["CET", "CM", "Unity", "ThreeJs", "Azure"],
    },
    {
      date: "Jul 2016 - JUN 2019",
      jobTitle: "Software Developer",
      company: "Union Home Mortgage",
      description:
        "Created workflows, process, custom entities, plugins, web resources, and outward facing API's that integrated directly with CRM. Worked side by side with Encompass admins to create aesthetically pleasing and fully functional custom input forms.",
      technologies: [
        "Dynamics 365",
        "Visual Basic",
        "C#",
        "Encompass",
        "Azure",
      ],
    },
  ];

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <SlideIn client:load>
          <h3>Work Experience:</h3>
        </SlideIn>
      </div>
      <div>
        {experience.map((ex, i) => (
          <SlideIn key={i}>
            <WorkExperience workExperienceProps={ex} />
          </SlideIn>
        ))}
      </div>
    </>
  );
}
