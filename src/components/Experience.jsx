import { OrbitControls } from "@react-three/drei";
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
      <group position-y={-1}>
        <Avatar scale={[1.2, 1.2, 1.2]} animation={animation} />
      </group>

      <ambientLight intensity={1} />
    </>
  );
};
