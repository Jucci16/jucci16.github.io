export default function Clients() {
  const cardStyle = {
    maxWidth: "27rem",
    backgroundColor: "rgb(var(--dark))",
    borderRadius: ".5rem",
  };

  const cardBodyStyle = {
    padding: "1rem",
    overflow: "hidden",
  };

  const imageStyle = {
    borderRadius: ".5rem .5rem 0 0",
    maxHeight: "18.75rem",
    width: "100%",
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
  };

  const buttonStyle = {
    borderRadius: "0.5rem",
    backgroundColor: "var(--accent)",
    color: "rgb(var(--primary-font))",
    textDecoration: "none",
    padding: "0.5rem 0.75rem",
    marginTop: "auto",
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <h3>Clients</h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <img src="/OnShift.webp" style={imageStyle} />
          <div style={cardBodyStyle}>
            <h4>OnShift</h4>
            <p>
              Transform the relationship between your organization and your
              employees with our next-generation software purpose-built for
              senior care. Dramatically reduce turnover rates, decrease costs
              and improve the quality and continuity of care.
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src="/JmSmucker.webp" style={imageStyle} />
          <div style={cardBodyStyle}>
            <h4>The J.M. Smucker Co</h4>
            <p>
              Our brands are an essential part of everyday life for families
              everywhere. From consumers' first cup of coffee and favorite
              snacks to their cat’s nutritious food and dog's preferred treats,
              we are proud to make great tasting, convenient and responsibly
              produced food that people and pets love.
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src="/Hon.webp" style={imageStyle} />
          <div style={cardBodyStyle}>
            <h4>HON</h4>
            <p>
              It's more than just an attitude. It's a commitment to our
              customers. At HON, we know a thoughtfully designed workspace sets
              the stage for better work. That's why we're here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
