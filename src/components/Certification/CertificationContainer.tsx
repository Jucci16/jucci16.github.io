import Certification from "./Certification.tsx";
import CertificationMobile from "./CertificationMobile.tsx";
import { useState, useEffect } from "react";

export default function CertificationContainer() {
  const query = `(max-width: 600px)`;
  const [isMobile, setIsMobile] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const handler = (e) => setIsMobile(e.matches);
    window.matchMedia(query).addEventListener("change", handler);

    return window.matchMedia(query).removeEventListener("change", handler);
  });

  const certifications = [
    {
      imageSrc: "/microsoft-certified-associate-badge.svg",
      title: "MicrosoftCertified: Azure Developer Associate",
      description:
        "As a candidate for this certification, you’re responsible for participating in all phases of development, including requirements gathering, design, development, deployment, security, maintenance, performance tuning, and monitoring.",
    },
    {
      imageSrc: "/microsoft-certified-fundamentals-badge.svg",
      title: "Microsoft Certified: Dynamics 365 Fundamentals (CRM)",
      description:
        "This certification is a validation of your broad knowledge of the customer engagement apps in Microsoft Dynamics 365, including marketing capabilities, and the automation of the sales, service and support lifecycles.",
    },
  ];

  return (
    <div style={{ marginTop: "5rem" }}>
      <h3>Certifications</h3>
      {certifications.map((cert, i) =>
        !isMobile ? (
          <Certification
            key={i}
            imageSrc={cert.imageSrc}
            title={cert.title}
            description={cert.description}
          />
        ) : (
          <CertificationMobile
            key={i}
            imageSrc={cert.imageSrc}
            title={cert.title}
            description={cert.description}
          />
        ),
      )}
    </div>
  );
}
