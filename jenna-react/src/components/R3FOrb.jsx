import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function Network() {
  const group = useRef();
  useFrame((_, dt) => (group.current.rotation.y += dt * 0.2));

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1, 3), []);
  const wire = useMemo(() => new THREE.WireframeGeometry(geo), [geo]);
  const matLine = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: 0x33b7ff,
        transparent: true,
        opacity: 0.5,
      }),
    []
  );
  const matPoints = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: 0x66ccff,
        size: 0.02,
      }),
    []
  );

  return (
    <group ref={group}>
      <lineSegments geometry={wire} material={matLine} />
      <points geometry={geo} material={matPoints} />
      <mesh>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshBasicMaterial color={0x0a2740} transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default function R3FOrb() {
  return (
    <div
      style={{
        width: "min(560px, 40vw)",
        aspectRatio: "1 / 1",
        margin: "auto",
      }}
    >
      <Canvas camera={{ position: [0, 0, 2.6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={0.8} />
        <Network />
        <OrbitControls enableZoom={false} enableDamping dampingFactor={0.06} />
      </Canvas>
    </div>
  );
}
