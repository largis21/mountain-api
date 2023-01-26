import { Line, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import elevationData from "../../../../conrec/example2/output.json";

export default function Home() {
  const elevationMultiplier = 0.008;
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [-7, 5, -7] }}>
        <OrbitControls />
        <group position={[-10, 0, -10]}>
          {elevationData.map((elevation, index) => (
            <Line
              key={index}
              points={elevation.map((point) => [
                point.x,
                point.y * elevationMultiplier,
                point.z,
              ])}
              color="white"
              linewidth={1}
            />
          ))}
        </group>
      </Canvas>
    </div>
  );
}
