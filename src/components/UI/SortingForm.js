import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

const sortOptions = [
  { label: "Sorting", year: "none" },
  { label: "Overall", year: "ovr" },
  { label: "Pace", year: "pac" },
  { label: "Shotting", year: "sho" },
  { label: "Passing", year: "pas" },
  { label: "Dribbling", year: "dri" },
  { label: "Defending", year: "def" },
  { label: "Physicality", year: "phy" },
];

const SortingForm = ({ sortingHandler }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="sorting-form">Age</InputLabel>
      <Select
        labelId="sorting-form"
        id="sorting-players"
        value={sortOptions.label}
        label="Age"
        onChange={sortingHandler}
      >
        <MenuItem value={"pac"}>Ten</MenuItem>
        <MenuItem value={"sho"}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortingForm;

{
  /* <Autocomplete
value={value.year}
onChange={(event, newValue) => {
  setValue(newValue.year);
}}
disablePortal
id="sort-players"
options={sortOptions}
getOptionLabel={(value) => value.label}
sx={{ width: 200 }}
renderInput={(params) => <TextField {...params} label="Sorting" />}
/> */
}
