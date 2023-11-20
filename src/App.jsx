// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Experience } from "./components/Experience";

const App = () => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      shadows
      camera={{ position: [0, 2, 5], fov: 30 }}
    >
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
};

export default App;
