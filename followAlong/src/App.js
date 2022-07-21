import React, { useState, createContext } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export const familyContext = createContext();

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <familyContext.Provider value={families[0]}>
        <section className="header">
          <h1>Family Trees</h1>
          {families.map(family => (
            <button
              className={`family-button ${family.familyName ===
                activeFamily.familyName && "active"}`}
              key={family.familyName}
              onClick={() => setActiveFamily(family)}
            >
              {family.familyName}
            </button>
          ))}
        </section>
        {activeFamily && <FamilyTree family={activeFamily} />}
      </familyContext.Provider>
    </div>
  );
}