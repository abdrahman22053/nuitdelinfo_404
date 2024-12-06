import { useState, Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Humain from '/public/Humain';

function App() {
  const [selectedOrgan, setSelectedOrgan] = useState(null);

  const organs = {
    
    
    coeur:"/public/images/coeur.png",
    reins:"/public/images/reins.png",
    les_poumons:"/public/images/Les_poumons.png",
    système_immunitaire:"/public/images/système_immunitaire.png",
    système_lymphatique:"/public/images/système_lymphatique.png",
    appareil_digestif:"/public/images/appareil_digestif.png",
    morceau_de_peau:"/public/images/morceau_de_peau.png"


    
    // Ajoutez d'autres organes ici
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Canvas style={{ flex: 1 }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Humain setSelectedOrgan={setSelectedOrgan} />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      {selectedOrgan && (
        <div style={{ width: "300px", padding: "10px", textAlign: "center" }}>
          <h2>{selectedOrgan}</h2>
          <img
            src={organs[selectedOrgan]}
            alt={selectedOrgan}
            style={{ width: "100%" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
