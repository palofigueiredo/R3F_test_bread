
import './App.css'
import { CubesModels } from './public/CubesModels';
import { ModelsControlsEnvironment } from './public/ModelsControlsEnvironment'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
      <Canvas>
        < ModelsControlsEnvironment />
        {/* < CubesModels /> */}
      </Canvas>
  );
}

export default App;