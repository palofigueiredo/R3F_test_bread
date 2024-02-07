import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Models } from "./assets/Models";
import { Overlay } from "./assets/Overlay";


export const ModelsControlsEnvironment = () => {
    return(
        <>
            < ambientLight intensity={2.5} />
            {/* < OrbitControls enableZoom={false} maxAzimuthAngle={Math.PI/8} minAzimuthAngle={-Math.PI/8}             minPolarAngle={Math.PI/2}             maxPolarAngle={Math.PI/2}/>   */}
            < ScrollControls pages={4} damping={0.25} >
            < Models />
            < Overlay />
            </ ScrollControls >
            
            
        </>

    );
}