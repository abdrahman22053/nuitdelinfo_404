import { useState, Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Humain from '/public/Humain';

function App() {
  const [selectedOrgan, setSelectedOrgan] = useState(null);

  const organs = {
    coeur: "/public/images/coeur.png",
    reins: "/public/images/reins.png",
    les_poumons: "/public/images/Les_poumons.png",
    système_immunitaire: "/public/images/système_immunitaire.png",
    système_lymphatique: "/public/images/système_lymphatique.png",
    appareil_digestif: "/public/images/appareil_digestif.png",
    morceau_de_peau: "/public/images/morceau_de_peau.png"
  };

  return (
    <>
      <div id="bg">
        <span id="top">&nbsp;</span>
        <div id="shell">
          <div id="header">
            <div className="rel-content"></div>
            <span className="abs-span island">&nbsp;</span>
            <span className="abs-span ships">&nbsp;</span>
            <span className="abs-span dir">&nbsp;</span>
          </div>

          <div id="container">
            <div className="rel-content">
              <div id="howdy">
                <h2>OceanBody!</h2>
                <p>Bienvenue sur OceanBody ! Explorez les liens fascinants entre le corps humain et l'océan à travers des comparaisons éducatives...</p>
              </div>
              <div id="portfolio">
                <h2> </h2>
                <div className="projects">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Canvas style={{ flex: 1 }}>
                      <ambientLight intensity={0.5} />
                      <OrbitControls 
                        enableZoom={false} 
                      />
                      <Suspense fallback={null}>
                        <Humain setSelectedOrgan={setSelectedOrgan} scale={[2, 2, 2]}/>
                      </Suspense>
                      <Environment preset="sunset" />
                    </Canvas>
                  </div>
                </div>
              </div>
              <div id="contact">
                {selectedOrgan && (
                  <>
                    <h2>{selectedOrgan}</h2>
                    <div className="cl">&nbsp;</div>
                    <div className="left">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div className="right">
                      {organs[selectedOrgan] && (
                        <img
                          src={organs[selectedOrgan]}
                          alt={selectedOrgan}
                          style={{ width: "100%" }}
                        />
                      )}
                    </div>
                  </>
                )}
                <div className="cl">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
