import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { DuckModel } from "./DuckModel"; // <-- import the new component
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MoonDuck</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
        <button className="nav-cta">Launch App</button>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to MoonDuck Coin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          The most fun and secure meme coin in space! Join the flock and quack to the moon 🚀
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Get Started
        </motion.button>
      </div>

      {/* 3D Duck */}
     <div className="duck-canvas">
  <Canvas camera={{ position: [0, 0.8, 6], fov: 40 }}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[5, 5, 5]} />
    <DuckModel />
    <OrbitControls enableZoom={false} />
  </Canvas>
</div>

    </section>
  );
};
