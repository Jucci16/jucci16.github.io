import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default class ViewGL {
  constructor(canvasRef) {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      antialias: true,
      alpha: true,
    });

    const scene = this.scene;

    console.log(canvasRef);
    this.camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.clientWidth / canvasRef.clientHeight,
      0.1,
      1000,
    );
    this.camera.position.set(2, 12, 12);

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.autoRotate = true;
    controls.update();
    const loader = new GLTFLoader();

    loader.load("/Me.glb", function (gltf) {
      gltf.scene.position.set(2, 0, 0);
      gltf.scene.castShadow = true;
      gltf.scene.receiveShadow = true;
      scene.add(gltf.scene);
    });

    const light = new THREE.AmbientLight(0x404040, 1); // soft white light
    scene.add(light);

    let directional = new THREE.DirectionalLight(0xffffff, 3.0);
    directional.position.set(-20, 100, 10);
    directional.target.position.set(2, 0, 0);
    directional.castShadow = true;
    scene.add(directional);

    this.controls = controls;
    this.update();
  }

  // ******************* PUBLIC EVENTS ******************* //
  updateValue(value) {
    // Whatever you need to do with React props
  }

  onMouseMove() {
    // Mouse moves
  }

  onWindowResize(vpW, vpH) {
    this.renderer.setSize(vpW, vpH);
  }

  // ******************* RENDER LOOP ******************* //
  update(t) {
    this.renderer.render(this.scene, this.camera);
    this.controls.update();

    requestAnimationFrame(this.update.bind(this));
  }
}
