import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { motion } from 'framer-motion';

const Splash = () => {
  return (
    <div style={{ height: '100vh', background: '#0d0d0d', position: 'relative' }}>
      {/* Raining Purple Cubes */}
      <Canvas style={{ height: '100%' }}>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        {[...Array(50)].map((_, i) => (
          <Box
            key={i}
            position={[
              Math.random() * 20 - 10,
              Math.random() * 20,
              Math.random() * 20 - 10,
            ]}
            scale={[0.5, 0.5, 0.5]}
          >
            <meshStandardMaterial attach="material" color="#6a0dad" />
          </Box>
        ))}
      </Canvas>

      {/* Centered Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '3rem',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
        }}
      >
        Derek Wood
      </motion.div>
    </div>
  );
};

export default Splash;