import './SoiderThreeJs.scss'

import  {  useEffect, useRef }  from 'react'

import { useFrame} from '@react-three/fiber'
import { Canvas } from 'react-three-fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Spider = () => {
  const gltf = useGLTF('/itis-team-6/model/scene.gltf');
  const modelRef = useRef();
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useFrame(() => {
    const maxRotation = Math.PI / 12;
    const baseRotation = 0.2;
    const radians2 = baseRotation + ((mouseY.current / window.innerHeight) * maxRotation * 2 - maxRotation);
    const radians = ((mouseX.current / window.innerWidth) -0.5 );

    if (modelRef.current) {
      modelRef.current.rotation.y = radians;
      modelRef.current.rotation.x = radians2;
    }
  });

  const handleMouseMove = (event) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.setY(-1)
      modelRef.current.rotation.x = 0.2
    }
  }, []);

  return  <>
    <primitive object={gltf.scene} ref={modelRef} />

    <ambientLight intensity={0.3} />

    <directionalLight position={[5, 5, 5]} intensity={0.8} />
    <directionalLight position={[-5, 5, -5]} intensity={0.8} />

    <pointLight position={[0, 5, 0]} intensity={0.8} />
  </>;
};

function SpiderModel() {

  return (
    <div className="model">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 0]} intensity={0.8} />
        {/* <spotLight position={[0, 5, 0]} intensity={0.8} /> */}
        <Spider />
        <OrbitControls enableRotate={false}/>
      </Canvas>

    </div>
  )
}

export default SpiderModel
