import WorkExperience from "../WorkExperience.tsx";
import SlideIn from "../SlideIn.tsx";

export default function WorkExperienceContainer() {
  const experience = [
    {
      date: "Dec 2021 - Present",
      jobTitle: "Software Developer Consultant",
      company: "Improving",
      description:
        "Created internal marketing tools for clients. Worked with team leads and project management to create and plan project goals. Lead release and deployment cycles. Modernized legacy applications. Provided guidance and leadership to members of the team. Brought a new client application to General Availability.",
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
        "Developed tools to increase the onboarding process for new clients into the CET platform. Constructed customer extensions in Configrua’s 3D graphics engine. Assisted and designed best practice guidelines for the department code standards. Researched and implemented new services to sell to customers, such as Unity.",
      technologies: ["CET", "CM", "Unity", "ThreeJs", "Azure"],
    },
    {
      date: "Jul 2016 - JUN 2019",
      jobTitle: "Software Developer",
      company: "Union Home Mortgage",
      description:
        "Created Workflows, processes, custom entities, plugins, web resources, and outward facing API’s that integrated directly with Dynamics 365 CRM. Worked side by side with encompass admins to create aesthetically pleasing and fully functional input forms.",
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
