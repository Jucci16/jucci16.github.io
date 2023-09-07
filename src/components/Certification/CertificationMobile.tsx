export default function CertificationMobile({ imageSrc, title, description }) {
  return (
    <div
      style={{
        marginTop: "3rem",
        borderRadius: "1rem",
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      <img src={imageSrc} style={{ aspectRatio: "1", maxWidth: "126px" }} />
      <h4>{title}</h4>
      <p style={{ color: "rgb(var(--light-gray))" }}>{description}</p>
    </div>
  );
}
