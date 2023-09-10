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
    height: "18.75rem",
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
      <h3 style={{ marginBottom: "3rem" }}>Clients</h3>
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
              Since our inception, OnShift has been uniquely dedicated to the
              needs of the long-term post-acute healthcare and senior living
              workforce. We recognize that employees are your greatest asset,
              and today it's more critical than ever to attract and retain staff
              members.
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
              The HON Company provides workplace furniture for small and
              medium-sized businesses, universities, large corporations and
              government offices. Its core product offering includes
              workstations, desks, chairs, tables and storage.
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <img src="/Dematic.webp" style={imageStyle} />
          <div style={cardBodyStyle}>
            <h4>Dematic</h4>
            <p>
              Dematic is your trusted partner in designing, building, and
              supporting intelligent automated solutions. We help companies like
              yours power the future of commerce in manufacturing, warehousing,
              and distribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
