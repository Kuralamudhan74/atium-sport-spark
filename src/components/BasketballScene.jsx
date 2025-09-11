import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Sphere } from "@react-three/drei";

function Basketball() {
  return (
    <Sphere args={[1, 64, 64]} scale={1.5}>
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(
          "https://threejsfundamentals.org/threejs/resources/images/basketball.jpg"
        )}
      />
    </Sphere>
  );
}

function FloatingText({ text, position }) {
  return (
    <Text
      position={position}
      fontSize={0.25}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}

export default function BasketballScene() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-900 to-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        {/* Basketball */}
        <mesh rotation={[0.5, 0.5, 0]}>
          <Basketball />
        </mesh>

        {/* Floating Sentences around the ball */}
        <FloatingText text="Teamwork" position={[3, 0, 0]} />
        <FloatingText text="Passion" position={[-3, 0, 0]} />
        <FloatingText text="Dedication" position={[0, 3, 0]} />
        <FloatingText text="Discipline" position={[0, -3, 0]} />
        <FloatingText text="Victory" position={[0, 0, 3]} />
        <FloatingText text="Respect" position={[0, 0, -3]} />

        {/* Controls for rotation */}
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
      </Canvas>
    </div>
  );
}
