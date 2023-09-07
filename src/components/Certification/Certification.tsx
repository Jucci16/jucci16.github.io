export default function Certification({ imageSrc, title, description }) {
  return (
    <div
      style={{
        marginTop: "2rem",
        borderRadius: "1rem",
        overflow: "hidden",
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "200px 1fr",
      }}
    >
      <div style={{ gridColumnStart: "1", gridColumnEnd: "2" }}>
        <img src={imageSrc} style={{ aspectRatio: "1", maxWidth: "126px" }} />
      </div>
      <div style={{ gridColumnStart: "2", gridColumnEnd: "3" }}>
        <h4>{title}</h4>
        <p style={{ color: "rgb(var(--light-gray))" }}>{description}</p>
      </div>
    </div>
  );
}
