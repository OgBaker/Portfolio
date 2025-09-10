import React, { useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect } from 'react'

const Demo = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('assets/models/Door.glb')
  const videoTexture = useVideoTexture(props.texture || "assets/textures/project/project1.mp4")

  useEffect(() => {
    if (videoTexture) {
      videoTexture.flipY = false
    }
  }, [videoTexture])

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    })
  }, [videoTexture])

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Plane with video texture */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        position={[0, 0.975, 0]}
      >
        <meshStandardMaterial map={videoTexture} toneMapped={false} />
      </mesh>

      {/* Door parts */}
      <group rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Zarge003.geometry} material={nodes.Zarge003.material} />
        <mesh geometry={nodes.Zarge003_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Zarge003_2.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Zarge003_3.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Zarge003_4.geometry} material={materials['Stahl.004']} />
        <mesh geometry={nodes.Zarge003_5.geometry} material={materials.Holz} />
      </group>
    </group>
  )
}

useGLTF.preload('assets/models//Door.glb')

export default Demo
