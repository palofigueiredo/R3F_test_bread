import { MeshDiscardMaterial, MeshPortalMaterial, MeshRefractionMaterial, MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export const CubesModels = () => {
    return(
        <>
            <ambientLight intensity={1}/>
            < OrbitControls />  
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>  
            <mesh position={[2, 0, 0]}>
                <boxGeometry />
                <meshMatcapMaterial />
            </mesh>  
            <mesh position={[0, 2, 0]}>
                <boxGeometry />
                <meshToonMaterial color={0x0055dd}/>
            </mesh>  
            <mesh position={[2, 2, 0]}>
                <boxGeometry />
                <meshNormalMaterial wireframe={true}/>
            </mesh>  
        </>

    );
}