import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Happy", "Pacing", "Pointing"],
    },
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <Avatar scale={[1.2, 1.2, 1.2]} animation={animation} />
      </group>
      <ambientLight intensity={1} />
      <mesh scale={[0.8, 0.5, 0.8]} position-y={-0.65}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh scale={5} rotation-x={-Math.PI * 0.2}>
        <planeGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};
