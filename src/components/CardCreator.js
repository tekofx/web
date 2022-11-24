import Card from "./Fursona/FursonaCard";
import { TextField, Grid, Button, Box, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DownloadIcon from "@mui/icons-material/Download";
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

  const saveFursonaCard = async () => {
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
  const [file, setFile] = useState("avatar.jpg");
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

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
        <Grid item xs={12} sm={12} md={8} lg={5}>
          <Card
            name={name}
            species={species}
            speciesLatin={speciesLatin}
            pronouns={pronouns}
            web={web}
            birthday={birthday}
            img={file}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={7}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "25ch",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing="4">
              <Grid item xs={6} sm={6} lg={6}>
                <TextField
                  required
                  label="Name"
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={6} lg={6}>
                <TextField
                  required
                  label="Species"
                  variant="standard"
                  onChange={(e) => setSpecies(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={6} lg={6}>
                <TextField
                  label="Latin Species"
                  variant="standard"
                  onChange={(e) => setSpeciesLatin(e.target.value)}
                />
              </Grid>
              <TextField
                required
                label="Pronouns"
                variant="standard"
                onChange={(e) => setPronouns(e.target.value)}
              />
              <Grid item xs={6} sm={6} lg={6}>
                <TextField
                  label="Web"
                  variant="standard"
                  onChange={(e) => setWeb(e.target.value)}
                />
              </Grid>

              <Grid item xs={6} sm={6} lg={6}>
                <TextField
                  required
                  label="Birthday"
                  variant="standard"
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Grid>

              <Grid item lg={12}>
                <Button
                  type="file"
                  component="label"
                  onClick={() => resetValues()}
                  startIcon={<RestartAltIcon />}
                >
                  Reset
                </Button>
                <Button
                  type="file"
                  component="label"
                  onClick={() => saveFursonaCard()}
                  startIcon={<DownloadIcon />}
                >
                  Download Card
                </Button>
                <Button
                  type="file"
                  component="label"
                  startIcon={<PhotoCamera />}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    hidden
                  />
                  Upload image
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
