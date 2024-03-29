import Card from "../../components/Fursona/FursonaCard";
import { TextField, Grid, Button, Box, Paper, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DownloadIcon from "@mui/icons-material/Download";
import * as htmlToImage from "html-to-image";
import { ChangeEvent, useState } from "react";

export default function CardCreator() {
  const def = {
    name: "Teko",
    species: "Arctic Fox",
    speciesLatin: "Vulpes Lagopus",
    pronouns: "They/Them",
    web: "google.com",
    birthday: "1/1/2000",
  };

  function downloadImage(): void {
    const node: HTMLElement | null = document.getElementById("fursonaCard");
    if (node) {
      htmlToImage.toPng(node).then((dataUrl: string) => {
        const link: HTMLAnchorElement = document.createElement("a");
        console.log(link);
        link.download = "my-image.png";
        link.href = dataUrl;
        link.click();
      });
    }
  }

  const [name, setName] = useState(def.name);
  const [species, setSpecies] = useState(def.species);
  const [speciesLatin, setSpeciesLatin] = useState(def.speciesLatin);
  const [pronouns, setPronouns] = useState(def.pronouns);
  const [web, setWeb] = useState(def.web);
  const [birthday, setBirthday] = useState(def.birthday);
  const [file, setFile] = useState(process.env.PUBLIC_URL + "img/avatar.jpg");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function resetValues() {
    setName(def.name);
    setSpecies(def.species);
    setSpeciesLatin(def.speciesLatin);
    setPronouns(def.pronouns);
    setWeb(def.web);
    setBirthday(def.birthday);
    setFile(process.env.PUBLIC_URL + "img/avatar.jpg");
  }

  return (
    <Paper sx={{ p: 2, marginTop: 2 }}>
      <Typography variant="h1">Fursona Card Creator</Typography>
      <Typography variant="body1">
        Create your fursona custom card and download it
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={5}>
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
            <Grid item xs={12} sm={12} md={6} lg={7}>
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
                <Grid container spacing="2">
                  <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                      style={{ width: "80%" }}
                      defaultValue={name}
                      required
                      label="Name"
                      variant="standard"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                      style={{ width: "80%" }}
                      defaultValue={species}
                      required
                      label="Species"
                      variant="standard"
                      onChange={(e) => setSpecies(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                      style={{ width: "80%" }}
                      defaultValue={speciesLatin}
                      label="Latin Species"
                      variant="standard"
                      onChange={(e) => setSpeciesLatin(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                      style={{ width: "80%" }}
                      defaultValue={pronouns}
                      required
                      label="Pronouns"
                      variant="standard"
                      onChange={(e) => setPronouns(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                      style={{ width: "80%" }}
                      defaultValue={web}
                      label="Web"
                      variant="standard"
                      onChange={(e) => setWeb(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                      style={{ width: "80%" }}
                      defaultValue={birthday}
                      required
                      label="Birthday"
                      variant="standard"
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </Grid>

                  <Grid item lg={12}>
                    <Button
                      component="label"
                      onClick={() => resetValues()}
                      startIcon={<RestartAltIcon />}
                    >
                      Reset
                    </Button>
                    <Button
                      component="label"
                      onClick={downloadImage}
                      startIcon={<DownloadIcon />}
                    >
                      Download Card
                    </Button>
                    <Button component="label" startIcon={<PhotoCamera />}>
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
        </Grid>

        {/* <Grid item xs={12} sm={12} md={8} lg={5}>
                    <Paper sx={{ p: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={8} lg={5}>
                                <BackCard
                                    name={name}
                                    species={species}
                                    speciesLatin={speciesLatin}
                                    pronouns={pronouns}
                                    web={web}
                                    birthday={birthday}
                                    img={file}
                                />
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid> */}
      </Grid>
    </Paper>
  );
}
