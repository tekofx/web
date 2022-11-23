import Card from "./Fursona/FursonaCard";
import { TextField, Grid, Button, Box } from "@mui/material";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import { useState } from "react";

export default function CardCreator() {
  const def = {
    name: "Teko",
    species: "Arctic Fox",
    speciesLatin: "Vulpes Lagopus",
    pronouns: "They/Them",
    web: "google.com",
    birthday: "1/1/2000",
  };

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.getElementById("fursonaCard"));
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  };

  const [name, setName] = useState(def.name);
  const [species, setSpecies] = useState(def.species);
  const [speciesLatin, setSpeciesLatin] = useState(def.speciesLatin);
  const [pronouns, setPronouns] = useState(def.pronouns);
  const [web, setWeb] = useState(def.web);
  const [birthday, setBirthday] = useState(def.birthday);

  function resetValues() {
    setName(def.name);
    setSpecies(def.species);
    setSpeciesLatin(def.speciesLatin);
    setPronouns(def.pronouns);
    setWeb(def.web);
    setBirthday(def.birthday);
  }

  return (
    <div>
      <Grid container>
        <Grid item lg={6}>
          <Card
            name={name}
            species={species}
            speciesLatin={speciesLatin}
            pronouns={pronouns}
            web={web}
            birthday={birthday}
          />
        </Grid>
        <Grid item lg={6}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              label="Name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              label="Species"
              variant="standard"
              onChange={(e) => setSpecies(e.target.value)}
            />
            <TextField
              label="Latin Species"
              variant="standard"
              onChange={(e) => setSpeciesLatin(e.target.value)}
            />
            <TextField
              required
              label="Pronouns"
              variant="standard"
              onChange={(e) => setPronouns(e.target.value)}
            />
            <TextField
              label="Web"
              variant="standard"
              onChange={(e) => setWeb(e.target.value)}
            />
            <TextField
              required
              label="Birthday"
              variant="standard"
              onChange={(e) => setBirthday(e.target.value)}
            />
            <Button onClick={(e) => resetValues()}>Reset</Button>
            <Button onClick={(e) => handleCaptureClick()}>Save</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
