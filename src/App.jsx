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

  const descriptions = {
    coeur: "Le cœur nourrit le corps en pompant le sang, comme les courants marins régulent le climat et distribuent les nutriments. Leur dysfonctionnement perturbe l’équilibre vital.",
    reins: "Les reins filtrent les déchets et maintiennent l’équilibre hydrique, comme les mangroves purifient l’eau et protègent l’océan. Leur dysfonctionnement cause empoisonnement ou destruction d’habitats.",
    les_poumons: "Les poumons permettent les échanges gazeux, tout comme le phytoplancton produit l’oxygène et absorbe le CO2. Leur dysfonctionnement limite l’oxygène et aggrave les déséquilibres climatiques.",
    système_immunitaire: "Le système immunitaire protège et répare le corps, tout comme la résilience de l’océan absorbe les perturbations. Leur affaiblissement expose à des maladies ou à des dégradations irréversibles.",
    système_lymphatique: "Le système lymphatique draine les fluides et combat les infections, comme les zones de convergence concentrent les nutriments et régulent les échanges océaniques. Leur perturbation affaiblit l’équilibre biologique.",
    appareil_digestif: "Le système digestif transforme les aliments en énergie, comme les écosystèmes marins recyclent les nutriments et nourrissent les espèces. Leur dysfonctionnement perturbe l’équilibre vital.",
    morceau_de_peau: "La peau protège le corps et régule sa température, comme la surface de l’océan absorbe la chaleur et régule le climat. Leur perturbation compromet protection et équilibre thermique.",
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
              <div id="portfolio">
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
                      <p>{descriptions[selectedOrgan]}</p>
                    </div>
                    <div style={{ flex: 1 }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
