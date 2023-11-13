import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "../components/Loader";
import Island from "../components/models/Island";
import Sky from "../components/models/Sky";
import Bird from "../components/models/Bird";
import { Plane } from "../components/models/Plane";
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center ">
        testing
      </div> */
}
const Home = () => {
  const adjustIslandForScreen = () => {
    let screenScale = null;
    let screenPositions = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPositions, rotation];
  };
  const [islandScale, IslandPosition, islandRotation] = adjustIslandForScreen();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 10, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1.5}
          />
          <Bird />
          <Sky />
          <Island
            position={IslandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
