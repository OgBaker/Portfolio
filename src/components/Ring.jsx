import { useGLTF } from '@react-three/drei'

const RingModel = (props) => {
  const { nodes, materials } = useGLTF('assets/models/Ring.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R004.geometry}
        material={materials['Material.004']}
      />
    </group>
  )
}

useGLTF.preload('assets/models/Ring.glb')

export default RingModel


