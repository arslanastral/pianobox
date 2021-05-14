import React from "react";
import DisplayScreen from "./DisplayScreen";
import { DrumMachineContext } from "./DrumMachine";
import styled from "styled-components";

const ScreenContainer = styled.div`
  width: 295px;
`;

const SelecterContainer = styled.div`
  font-family: sans-serif;
  margin-left: 25px;
  width: 249px;
  height: 50px;
`;

const Selecter = styled.select``;

const OctavesContainer = styled.div`
  font-family: sans-serif;
  margin-left: 25px;
  width: 237px;
  height: 26px;
  color: white;
  background-color: #131516;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid hsl(0, 0%, 80%);
  padding: 5px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  margin-right: 5px;
`;

const OctaveTitle = styled.span`
  margin-left: 5px;
`;

const OctaveButton = styled.button`
  width: 20px;
  height: 20px;
  color: black;
  background-color: white;
  border-radius: 50px;
  margin-left: 8px;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

const Screen = () => {
  const {
    setcurrentInstrument,
    currentInstrument,
    setOctave,
    octave,
    instrument,
  } = React.useContext(DrumMachineContext);

  const options = Object.keys(instrument);

  const handleInstrumentChange = (v) => {
    setcurrentInstrument(v.target.value);
  };

  const updateNegativeOctaveHandler = (octave, setOctave) => {
    if (octave.toString() === [1, 2, 3].toString()) {
      return;
    }
    let newOctave = octave.map((oct) => {
      if (oct) {
        return --oct;
      }
    });

    setOctave(newOctave);
  };

  const updatePositiveOctaveHandler = (octave, setOctave) => {
    if (octave.toString() === [7, 8, 9].toString()) {
      return;
    }
    let newOctave = octave.map((oct) => {
      if (oct) {
        return ++oct;
      }
    });

    setOctave(newOctave);
  };

  return (
    <ScreenContainer>
      <DisplayScreen />
      <SelecterContainer>
        <Selecter
          defaultValue={currentInstrument}
          onChange={handleInstrumentChange}
        >
          {options.map((e, i) => (
            <option key={i} value={e}>
              {`🎹 ${e.replace(/-/g, " ").replace(/^./, function (x) {
                return x.toUpperCase();
              })}`}
            </option>
          ))}
        </Selecter>
      </SelecterContainer>
      <OctavesContainer>
        <OctaveTitle>Octave</OctaveTitle>
        <ButtonContainer>
          <OctaveButton
            onClick={() => updateNegativeOctaveHandler(octave, setOctave)}
          >
            -
          </OctaveButton>
          <OctaveButton
            onClick={() => updatePositiveOctaveHandler(octave, setOctave)}
          >
            +
          </OctaveButton>
        </ButtonContainer>
      </OctavesContainer>
    </ScreenContainer>
  );
};

export default Screen;
