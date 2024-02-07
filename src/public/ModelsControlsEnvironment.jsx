import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Models } from "./assets/Models";
import { Overlay } from "./assets/Overlay";


export const ModelsControlsEnvironment = () => {
    return(
        <>
            < ambientLight intensity={2.5} />
            < OrbitControls enableZoom={false} />  
            < ScrollControls pages={4} damping={0.025} >
            < Models />
            < Overlay />
            </ ScrollControls >
            
            
        </>

    );
}