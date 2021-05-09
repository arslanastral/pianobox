import React from "react";
import DisplayScreen from "./DisplayScreen";
import { DrumMachineContext } from "./DrumMachine";
import styled from "styled-components";
import Select from "react-select";

const ScreenContainer = styled.div`
  grid-area: screen;
  /* background-color: yellow; */
`;

const SelecterContainer = styled.div`
  font-family: sans-serif;
  margin-left: 25px;
  width: 249px;
  height: 50px;
`;

const Screen = () => {
  const {
    setcurrentInstrument,
    currentInstrument,
    instrument,
    // setpiano,
    // piano,
  } = React.useContext(DrumMachineContext);

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const options = Object.keys(instrument).map((e) => ({
    value: e,
    label: e.replace(/-/g, " ").replace(/^./, function (x) {
      return x.toUpperCase();
    }),
  }));

  const handleInstrumentChange = (v) => {
    setcurrentInstrument(v.value);
    console.log(currentInstrument);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "#131516",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "blue" : "#131516",
      color: "#fff",
      "&:hover": {
        background: state.isSelected ? "blue" : "#212425",
      },
    }),
    menu: (provided) => ({ ...provided, zIndex: 9999, background: "#131516" }),
  };

  return (
    <ScreenContainer>
      <DisplayScreen />
      <SelecterContainer>
        <Select
          styles={customStyles}
          options={options}
          onChange={handleInstrumentChange}
          defaultValue={{ value: "piano", label: "🎹 Piano" }}
        />
      </SelecterContainer>
    </ScreenContainer>
  );
};

export default Screen;
