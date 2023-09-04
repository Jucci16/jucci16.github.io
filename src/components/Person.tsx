import React from "react";
import ViewGL from "./ViewGL";

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.containerRef = React.createRef();
  }

  // ******************* COMPONENT LIFECYCLE ******************* //
  componentDidMount() {
    // Get canvas, pass to custom class
    const canvas = this.canvasRef.current;
    this.viewGL = new ViewGL(canvas);

    // Init any event listeners
    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentDidUpdate(prevProps, prevState) {
    // Pass updated props to
    const newValue = this.props.whateverProperty;
    this.viewGL.updateValue(newValue);
  }

  componentWillUnmount() {
    // Remove any event listeners
    window.removeEventListener("mousemove", this.mouseMove);
    window.removeEventListener("resize", this.handleResize);
  }

  // ******************* EVENT LISTENERS ******************* //
  mouseMove = (event) => {
    this.viewGL.onMouseMove();
  };

  handleResize = () => {
    this.viewGL.onWindowResize(
      this.canvasRef.current.offsetWidth,
      this.canvasRef.current.offsetHeight,
    );
    // this.viewGL.onWindowResize(window.innerWidth, window.innerHeight);
  };

  render() {
    return (
      <div>
        <canvas
          style={{ width: "100%", height: "500px" }}
          ref={this.canvasRef}
        />
      </div>
    );
  }
}
