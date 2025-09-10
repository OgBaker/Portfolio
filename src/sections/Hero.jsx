import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera} from "@react-three/drei";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";

import Room from "/src/components/Room.jsx";
import CanvasLoader from "/src/components/CanvasLoader.jsx";
import Target from "/src/components/Target.jsx";
import Logo from "/src/components/Logo.jsx";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import Grid from "../components/Grid";
const Hero = () => {

    // const x = useControls
    // ("Room", {
    //     positionX: {
    //         value:0,
    //         min: -10,
    //         max: 10,
    //     },

    //      positionY: {
    //         value:0,
    //         min: -10,
    //         max: 10,
    //     },

    //      positionZ: {
    //         value:2.5,
    //         min: -10,
    //         max: 10,
    //     },

    //     scale: {
    //         value:2.5,
    //         min: -10,
    //         max: 100,
    //     },

    //      rotationX: {
    //         value:0,
    //         min: 0,
    //         max: 10,
    //     },
    //     rotationY: {
    //         value:0,
    //         min: 0,
    //         max: 10,
    //     },

    //     rotationZ: {
    //         value:0,
    //         min: 0,
    //         max: 10,
    //     },


    //  })

    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space " style={{marginTop: "50px"}}>
        <p className="sm:text-3xl text-2xl font-medium text-white font-generalsans">
          3D Artist & Designer
        </p>
        <p className=" text-gray_gradient">Creating stunning visuals</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[-10, 0, -50]} />
                <HeroCamera isMobile={isMobile}
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}>

                  <Room 
                  scale={sizes.deskScale*200} 
                  rotation={[0, 5, 0]} 
                  position={[0, 0, 0]}

                  // scale={x.scale} 
                  // rotation={[x.rotationX, x.rotationY, x.rotationZ]} 
                  // position={[x.positionX, x.positionY, x.positionZ]}
                  />

                 
         
                </HeroCamera>
              
                <group>
                    {/* <Target
                    position={[-30, sizes.targetPosition[1], sizes.targetPosition[2]]} 
                    scale={2}
                    />

                    <Logo
                       position={sizes.reactLogoPosition} 
                    scale={2}
                    /> */}
                    
                </group>
                <ambientLight intensity={1} />
                <directionalLight position={[1,1,10]} intensity={5} />

               
            
          </Suspense>
        </Canvas>

      </div>

      {/* <div className ="absolute bottom-7 left-0 right-0 w-full z-10c-space">
          <a href="#about" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
      </div> */}
    </section>
  );
};

export default Hero;
