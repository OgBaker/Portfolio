import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
const Logo = (props) => {
  const { nodes, materials } = useGLTF('assets/models/GoldmundSphere.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={materials['Goldmund Sphere']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007_1.geometry}
        material={materials.Emission}
      />
    </group>
  )
}

useGLTF.preload('assets/models/GoldmundSphere.glb')

export default Logo
