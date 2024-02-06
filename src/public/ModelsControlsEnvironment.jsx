import { MeshDiscardMaterial, MeshPortalMaterial, MeshRefractionMaterial, MeshWobbleMaterial, OrbitControls, ScrollControls } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { Models } from "../assets/Models";
import { Moka } from "../assets/Moka";

export const ModelsControlsEnvironment = () => {
    return(
        <>
            < ambientLight intensity={2.5} />
            < OrbitControls enableZoom={false} />  
            < ScrollControls pages={3} damping={0.5} >
            < Models />
            {/* < Moka /> */}
            </ ScrollControls >
            
            
        </>

    );
}