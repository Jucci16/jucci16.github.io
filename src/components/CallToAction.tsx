export default function CallToAction() {
  const buttonStyle = {
    display: "inline",
    width: "fit-content",
    borderRadius: "0.5rem",
    backgroundColor: "var(--accent)",
    color: "rgb(var(--primary-font))",
    textDecoration: "none",
    padding: "0.5rem 0.75rem",
    marginTop: "3rem",
    zIndex: "10",
  };

  return (
    <div
      style={{
        height: "40rem",
        display: "flex",
        flexFlow: "column",
        borderRadius: "0.5rem",
        padding: "1rem",
        marginTop: "3rem",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h3
        style={{
          color: "var(--accent)",
          marginBottom: 0,
          zIndex: "10",
          textAlign: "center",
        }}
      >
        Take off your shoes and stay a while!
      </h3>
      <p
        style={{
          color: "rgb(var(--dark))",
          marginBottom: 0,
          zIndex: "10",
          marginTop: 0,
          textAlign: "center",
        }}
      >
        Join me in my blog, maybe you will find something of use.
      </p>
      <a href="/blog" style={buttonStyle}>
        Click Here!
      </a>
      <img
        src="/Texture.jpg"
        style={{
          position: "absolute",
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(0px)",
          width: "100%",
          height: "100%",
          zIndex: "0",
        }}
      />
    </div>
  );
}
