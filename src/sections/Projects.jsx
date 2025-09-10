import React, { useState, Suspense } from 'react';
import { myProjects } from '../constants';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import Demo from '../components/Demo.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { OrthographicCamera } from '@react-three/drei';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // guard against empty data
  if (!projectCount) {
    return (
      <section className="c-space my-20">
        <p className="head-text">My Work</p>
        <p className="text-white-600 mt-6">No projects to show yet.</p>
      </section>
    );
  }

  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id='work'>
      <p className="head-text">My Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 sm:p-10 py-5 shadow-3xl shadow-black-200 relative">
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-20 h-20 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center justify-center gap-3">
              {currentProject.tags?.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow_up.svg" className="w-3 h-3" alt="arrow" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/arrow_left.svg" className="w-4 h-4" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/arrow_right.svg" className="w-4 h-4" alt="right arrow" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <Center>
            <OrthographicCamera makeDefault zoom={70} position={[0, 0, 5]}/>
            <ambientLight intensity={Math.PI} />
            <directionalLight intensity={1} position={[10, 10, 5]} />
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -1.9, 0]} rotation={[0, -0.1, 0]}>
                  <Demo texture={currentProject.texture} rotation={[0, -0.9, 0]} />s
                </group>
              </Suspense>
            </Center>
            <OrbitControls enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
