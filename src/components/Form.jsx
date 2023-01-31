import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebaseConfig";

const Form = () => {
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("dziala");
    console.log(data.get("two"));
    await setDoc(doc(database, "form", "text"), {
      one: data.get("one"),
      two: data.get("two"),
      three: data.get("three"),
    });
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      mt={4}
      p={4}
      bgcolor="white"
      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
    >
      <TextField
        label="Outlined secondary"
        name="one"
        color="secondary"
        focused
      />
      <TextField
        label="Filled success"
        name="two"
        variant="filled"
        color="success"
        focused
      />
      <TextField
        label="Standard warning"
        name="three"
        variant="standard"
        color="warning"
        focused
      />
      <Button type="submit" variant="contained">
        Wyślij
      </Button>
    </Box>
  );
};

export default Form;
