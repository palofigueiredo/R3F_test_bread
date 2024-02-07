import { MeshDiscardMaterial, MeshPortalMaterial, MeshRefractionMaterial, MeshWobbleMaterial, OrbitControls, ScrollControls } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { Models } from "./assets/Models";
import { Overlay } from "./assets/Overlay";

export const ModelsControlsEnvironment = () => {
    return(
        <>
            < ambientLight intensity={2.5} />
            < OrbitControls enableZoom={false} />  
            < ScrollControls pages={4} damping={0.1} >
            < Models />
            < Overlay />
            </ ScrollControls >
            
            
        </>

    );
}