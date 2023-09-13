import { FormEvent, useState } from "react";
import W12MHeader from "./W12MHeader";
import W12MSpecies from "./W12MSpecies";
import W12MPlanet from "./W12MPlanet";
import W12MPopulation from "./W12MPopulation";
import W12MMaths from "./W12MMaths";
import W12MSJustification from "./W12MJustification";
import { validateJustification } from "./validations/ValidateJustification";
import { validateMaths } from "./validations/ValidateMaths";
import { validatePlanetName } from "./validations/ValidatePlanet";
import { validatePopulation } from "./validations/ValidatePopulation";
import { validateSpeciesName } from "./validations/validateSpeciesName";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("Humans");
  const [planetName, setPlanetName] = useState("Earth");
  const [planetPop, setPlanetPop] = useState(0);
  const [mathAnswer, setMathAnswer] = useState("Not 4");
  const [reasonToSave, setReasonToSave] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(
      `Species: ${speciesName} \nPlanet: ${planetName}\nPopulation: ${planetPop}\nMaths question: ${mathAnswer}\nReason to save: ${reasonToSave}`
    );
  };
  return (
    <form className="w12MForm" onSubmit={handleSubmit}>
      <W12MHeader />
      <W12MSpecies
        species={speciesName}
        onChangeSpecies={(value) => setSpeciesName(value)}
        validate={validateSpeciesName}
      />
      <W12MPlanet
        planet={planetName}
        onChangePlanet={(value) => setPlanetName(value)}
        validate={validatePlanetName}
      />
      <W12MPopulation
        population={planetPop}
        onChangePop={(value) => setPlanetPop(value)}
        validate={validatePopulation}
      />
      <W12MMaths
        answer={mathAnswer}
        onChangeCalc={(value) => setMathAnswer(value)}
        validate={validateMaths}
      />
      <W12MSJustification
        reason={reasonToSave}
        onChangeReason={(value) => setReasonToSave(value)}
        validate={validateJustification}
      />
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default W12MForm;
