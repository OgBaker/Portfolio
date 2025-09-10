import Globe from 'react-globe.gl'
import { Suspense, useState } from 'react'
import Button from '../components/Button';
import { Canvas } from '@react-three/fiber';
import Ring from '../components/Ring';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
const About = () => {

    const [hasCopied, setHasCopied]= useState(false);
const handleCopy = () => {

    navigator.clipboard.writeText("info@olegbekker.de")

    setHasCopied(true)

    setTimeout(() => {
        setHasCopied(false)
    }, 2000);
}

  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3
        xl:grid-auto-rows md:grid-cols-2 grid-cols-1 gap-5 h-full '>

            <div className='col-span-1 xl:row-span-3'>
                <div className="grid-container">
                    <img src="/AVATAR.png" alt="grid-1" className="w-full 
                    sm:h-[276px] h-fit object-contain"/>
                    <div>
                         <p className='grid-headtext'>Hi, my name is Oleg Bekker</p>
                         <p className='grid-subtext'>With my Bachelor of Arts in Communication Design I have honed my skills
                            in 3D Design, with a focus on high end animations and Virtual Reality development. 
                         </p>
                    </div> 
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="Poster.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                         <div>
                         <p className='grid-headtext'>Skills</p>
                         <p className='grid-subtext'>Blender, Unreal Engine 5, etc.
                         </p>
                         </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
                <div className="rounded-3xl w-full sm:h-[326px] 
                h-fit flex justify-center items-center">
                    <Globe
                    height={326}
                    width={326}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[
                        {
                        lat: 51.23, lng: 6.78,
                        text: "I'm here",
                        color: "white",
                        size: 50,

                    }]}

                    />
                </div>
                <div>
                    <p className='grid-headtext'>I work remotely across all timezones.</p>
                    <p className='grid-subtext'>I am based in Düsseldorf, Germany.</p>
                    <Button name="Contact me" isBeam containerClass= "w-full mt-5"/> 
                </div>
            </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3 '>

                <div className='grid-container'>

                    <Canvas>
                    <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} zoom={5}/>
                    <OrbitControls enableZoom ={false} />
                    <Environment preset="studio" intensity={1}/>
                    <Ring/>
                    </Suspense>
                    </Canvas>
                 <div>
                    <p className='grid-headtext'> Precise modelling</p>
                    <p className='grid-subtext'> Custom products</p>
                 </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>

                <div className='grid-container'>
                    <img src="/SOS_LOGO.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] 
                    h-fit object-contain sm:object-top'/>
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact me </p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? "/check.svg" : "/copy.svg"} alt="copy" className='w-6 h-6' />

                            <p className='lg:text-lg md:text-lg font-medium
                            text.gray_gradient text-white'>info@olegbekker.de</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default About