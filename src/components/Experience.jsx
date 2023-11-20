import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar scale={[1.2, 1.2, 1.2]} />
      </group>

      <ambientLight intensity={1} />
    </>
  );
};
