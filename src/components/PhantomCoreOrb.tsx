"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* Neural tendril connecting the core orb to a surrounding node */
function Tendril({
  start,
  end,
  color,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string;
}) {
  const ref = useRef<THREE.Line>(null);
  const points = useMemo(() => {
    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
      .add(new THREE.Vector3(0, 0.3, 0));
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(24);
  }, [start, end]);

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.3 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
    }
  });

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5 }))} ref={ref} />
  );
}

/* Small orbiting node representing an engine/agent */
function EngineNode({
  position,
  color,
  label,
}: {
  position: [number, number, number];
  color: string;
  label: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(clock.getElapsedTime() * 1.5 + position[0]) * 0.08;
    }
  });

  return (
    <group>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
      <pointLight position={position} color={color} intensity={0.3} distance={2} />
    </group>
  );
}

/* Floating particles around the orb */
function Particles({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2 + Math.random() * 1.8;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00f0ff"
        size={0.015}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* Main orb */
function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.3) * 0.1 + pointer.y * 0.2;
      ref.current.rotation.y =
        clock.getElapsedTime() * 0.15 + pointer.x * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={ref} scale={1}>
        <icosahedronGeometry args={[0.7, 8]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.25}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Inner glow sphere */}
      <mesh scale={0.55}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#c026d3"
          emissive="#c026d3"
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

/* Scene with orb, nodes, tendrils, and particles */
function Scene() {
  const origin = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  const nodes = useMemo(
    () => [
      { pos: [1.8, 0.8, 0] as [number, number, number], color: "#00f0ff", label: "Phoebe" },
      { pos: [-1.6, 0.6, 0.5] as [number, number, number], color: "#c026d3", label: "Loom" },
      { pos: [1.2, -0.9, 0.3] as [number, number, number], color: "#f472b6", label: "Claire" },
      { pos: [-1.4, -0.7, -0.3] as [number, number, number], color: "#ff2244", label: "Sullivan" },
      { pos: [0.3, 1.3, -0.5] as [number, number, number], color: "#fbbf24", label: "Nova" },
      { pos: [-0.5, -1.4, 0.4] as [number, number, number], color: "#4ade80", label: "Cipher" },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 0]} color="#00f0ff" intensity={2} distance={5} />

      <CoreOrb />
      <Particles />

      {nodes.map((node) => (
        <EngineNode
          key={node.label}
          position={node.pos}
          color={node.color}
          label={node.label}
        />
      ))}

      {nodes.map((node) => (
        <Tendril
          key={`t-${node.label}`}
          start={origin}
          end={new THREE.Vector3(...node.pos)}
          color={node.color}
        />
      ))}
    </>
  );
}

export function PhantomCoreOrb() {
  return (
    <div className="w-full h-[500px] sm:h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>

      {/* Radial glow behind the orb */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-cyan/5 blur-3xl" />
      </div>
    </div>
  );
}
