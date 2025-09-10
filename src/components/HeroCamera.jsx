import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile}) => {
    const groupRef = useRef()

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [
            0, 0, 80],
             1.1, delta)
        
                 
        easing.dampE(groupRef.current.rotation, [state.pointer.y
            / 5, -state.pointer.x / 5, 0], 0.25, delta)
            
            })
    return (
        <group ref={groupRef} scale={1}>{children}</group>
    );
}

export default HeroCamera