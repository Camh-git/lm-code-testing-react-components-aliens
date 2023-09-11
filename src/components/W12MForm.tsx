import { useState } from "react";
import W12MHeader from "./W12MHeader";
import W12Mspecies from "./W12Mspecies";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <W12Mspecies
        species={speciesName}
        onChangeSpecies={(value) => setSpeciesName(value)}
      />
    </section>
  );
};

export default W12MForm;
