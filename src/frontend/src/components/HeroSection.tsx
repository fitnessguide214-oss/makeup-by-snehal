import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

function RotatingMesh1() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.003;
      ref.current.rotation.y += 0.003;
    }
  });
  return (
    <mesh ref={ref} position={[3, 1, -3]}>
      <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />
      <meshStandardMaterial
        color="#C9A84C"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.75}
      />
    </mesh>
  );
}

function RotatingMesh2() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.004;
      ref.current.rotation.z += 0.004;
    }
  });
  return (
    <mesh ref={ref} position={[-3, 2, -4]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#C9A84C"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.65}
      />
    </mesh>
  );
}

function RotatingMesh3() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.005;
    }
  });
  return (
    <mesh ref={ref} position={[2, -2, -2]}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color="#C9A84C"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function RotatingMesh4() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.002;
      ref.current.rotation.z += 0.002;
    }
  });
  return (
    <mesh ref={ref} position={[-2, 0, -3]}>
      <torusGeometry args={[1.2, 0.3, 16, 100]} />
      <meshStandardMaterial
        color="#C9A84C"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function RotatingMesh5() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.006;
      ref.current.rotation.y += 0.006;
    }
  });
  return (
    <mesh ref={ref} position={[0, 3, -5]}>
      <sphereGeometry args={[0.6, 16, 16]} />
      <meshStandardMaterial
        color="#C9A84C"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.65}
      />
    </mesh>
  );
}

function RotatingMesh6() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0035;
      ref.current.rotation.y += 0.005;
    }
  });
  return (
    <mesh ref={ref} position={[-4, -1, -5]}>
      <torusKnotGeometry args={[0.6, 0.18, 80, 12, 2, 3]} />
      <meshStandardMaterial
        color="#B8865C"
        metalness={0.9}
        roughness={0.15}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function RotatingMesh7() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
      ref.current.rotation.z += 0.003;
    }
  });
  return (
    <mesh ref={ref} position={[4, -3, -4]}>
      <icosahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial
        color="#E8C76A"
        metalness={0.85}
        roughness={0.1}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

function RotatingMesh8() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.002;
      ref.current.rotation.z += 0.005;
    }
  });
  return (
    <mesh ref={ref} position={[-1, 4, -6]}>
      <octahedronGeometry args={[1.1, 0]} />
      <meshStandardMaterial
        color="#C9A84C"
        metalness={0.75}
        roughness={0.25}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function RotatingMesh9() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0025;
      ref.current.rotation.y += 0.004;
    }
  });
  return (
    <mesh ref={ref} position={[5, 2, -6]}>
      <torusGeometry args={[0.9, 0.2, 12, 80]} />
      <meshStandardMaterial
        color="#D4A05A"
        metalness={0.88}
        roughness={0.12}
        transparent
        opacity={0.58}
      />
    </mesh>
  );
}

const PARTICLE_DATA: { pos: [number, number, number]; speed: number }[] = [
  { pos: [-4.5, -2.5, -4], speed: 0.004 },
  { pos: [1.5, -3, -3.5], speed: 0.003 },
  { pos: [-2, 1.5, -5], speed: 0.005 },
  { pos: [3.5, -0.5, -4.5], speed: 0.0035 },
  { pos: [-1, -4, -3], speed: 0.006 },
  { pos: [0.5, 2.5, -6], speed: 0.0025 },
  { pos: [-3.5, 3, -5], speed: 0.0045 },
  { pos: [2.5, 4, -7], speed: 0.003 },
  { pos: [4.5, 1, -5.5], speed: 0.005 },
  { pos: [-0.5, -1.5, -3], speed: 0.0055 },
  { pos: [1, -4.5, -4], speed: 0.004 },
  { pos: [-3, -3, -6], speed: 0.0038 },
  { pos: [3, 3.5, -5], speed: 0.0032 },
];

function FloatingParticle({
  initPos,
  speed,
}: {
  initPos: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const yOrigin = useRef(initPos[1]);
  const elapsed = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    if (ref.current) {
      elapsed.current += delta;
      ref.current.position.y =
        yOrigin.current + Math.sin(elapsed.current * speed * 60) * 0.4;
      ref.current.rotation.y += speed * 4;
    }
  });

  return (
    <mesh ref={ref} position={initPos}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial
        color="#C9A84C"
        metalness={1}
        roughness={0}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function FloatingParticles() {
  return (
    <>
      {PARTICLE_DATA.map((p, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static positional array
        <FloatingParticle key={i} initPos={p.pos} speed={p.speed} />
      ))}
    </>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      data-ocid="hero.section"
    >
      {/* 3D Canvas background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#C9A84C" />
          <pointLight position={[-5, -3, 2]} intensity={0.8} color="#8B4513" />
          <pointLight position={[-5, 3, 2]} intensity={0.4} color="#C9A96E" />
          <pointLight position={[5, -2, 3]} intensity={0.3} color="#D4813A" />
          <RotatingMesh1 />
          <RotatingMesh2 />
          <RotatingMesh3 />
          <RotatingMesh4 />
          <RotatingMesh5 />
          <RotatingMesh6 />
          <RotatingMesh7 />
          <RotatingMesh8 />
          <RotatingMesh9 />
          <FloatingParticles />
        </Canvas>
      </div>

      {/* Light warm overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,248,240,0.78), rgba(250,240,230,0.85))",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
        {/* Badge */}
        <div className="mb-6 px-4 py-2 border border-[#C9A96E]/60 rounded-full text-xs tracking-widest uppercase text-[#8B5E3C] bg-[#C9A96E]/10 backdrop-blur-sm">
          Celebrity Makeup Artist | Amravati
        </div>

        <h1
          className="font-display text-5xl md:text-7xl font-bold text-[#6B3A2A] leading-tight"
          data-ocid="hero.title"
        >
          Makeup by Snehal Pawar
        </h1>

        <p className="text-xl md:text-2xl text-[#8B5E3C] mt-4 font-body tracking-wide">
          Beauty &amp; Bridal Salon Academy
        </p>

        {/* Hero image */}
        <img
          src="/assets/screenshot_2026-05-18_003109-019e3754-b737-72e8-9396-af650e187d44.png"
          alt="Snehal Pawar - Celebrity Makeup Artist"
          className="w-48 h-56 md:w-64 md:h-72 object-cover rounded-2xl border-2 border-[#C9A96E] shadow-2xl my-8 mx-auto"
          style={{ boxShadow: "0 8px 40px rgba(107,58,42,0.22)" }}
          data-ocid="hero.photo"
        />

        <p className="text-[#8B5E3C] text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Transforming brides into queens since 2014 · Trusted by celebrities
          across Maharashtra
        </p>

        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative overflow-hidden px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-[#2C1810]"
          style={{
            background: "linear-gradient(90deg, #C9A84C, #E8C76A, #C9A84C)",
            boxShadow: "0 0 30px rgba(201,168,76,0.5)",
          }}
          data-ocid="hero.cta_button"
        >
          Book Your Bridal Look
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <span className="text-[#8B5E3C] text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C9A96E] to-transparent" />
        </div>
      </div>
    </section>
  );
}
