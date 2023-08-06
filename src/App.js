import { Canvas } from "@react-three/fiber";
/* import { BoxGeometry, MeshBasicMaterial } from 'three'; */

function App() {
  return (
    <div className="Container" style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <mesh>
          <boxGeometry attach="geometry" args={[1, 1, 1]} /> {/* Usa attach="geometry" */}
          <meshBasicMaterial attach="material" color={"#ff0000"} /> {/* Usa attach="material" */}
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
