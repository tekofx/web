import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import ImageDialog from "../ImageDialog"

export default function CustomizedTimeline() {
  return (
    <Paper sx={{ paddingLeft: 2, paddingRight: 2 }}>
      <Typography variant="h2">Evolution</Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} align="right">
            <Typography variant="h6">v1.0</Typography>
            <Typography variant="body2">La primera versión de Teko me llevó muchos dibujos anteriores para practicar a dibujar, porque nunca se me ha dado bien dibujar. Después de más o menos un mes practicando me decidí sobre como quería que fuera mi fursona.  Me gustaban los zorros pero me parecía una fursona demasiado común, así que opté por un zorro ártico, algo mas especial y que además iba relacionado con mi gusto por la nieve y el invierno. Decidí hacerlo de color azul claro para que se viera que es un zorro ártico, así como unas orejas negras y ojos verdes. El cuerpo por algún motivo pensé que sería buena idea que fuera de color azul oscuro, pero pronto lo cambiaría.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <ImageDialog img={process.env.PUBLIC_URL + "img/v1.0.jpg"} width={"75%"} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h6">v1.1</Typography>
            <Typography variant="body2">Tras un dibujo que me hicieron decidí dejarle la parte alrededor de los ojos de color blanco y cambiarle los ojos a amarillo, pero seguía sin convencerme el diseño</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <ImageDialog img={process.env.PUBLIC_URL + "img/v1.1.jpg"} width={"75%"} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h6">v1.5</Typography>
            <Typography variant="body2">Tras un dibujo que me hicieron decidí dejarle la parte alrededor de los ojos de color blanco y cambiarle los ojos a amarillo, pero seguía sin convencerme el diseño</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <ImageDialog img={process.env.PUBLIC_URL + "img/v1.5.jpg"} width={"75%"} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h6">v2.0</Typography>
            <Typography variant="body2">Hice un cambio radical. No quedaba demasiado claro que era un zorro ártico pese al azul, por lo tanto cambié el color del pelaje blanco. También estaba indeciso acerca del color de los ojos, así que opté por un degradado de amarillo y verde. Por otro lado le añadí un azul más claro en la punta del pelo, y usé el mismo color en las uñas. Por último puse la cola de color negro y azul oscuro. Este sería uno de los diseños con los que mas a gusto estaría, y que no cambiaría tanto sobre todo en la cara.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <ImageDialog img={process.env.PUBLIC_URL + "img/v2.0.png"} width={"100%"} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }}>
            <Typography variant="h6">v2.5</Typography>
            <Typography variant="body2">Este es el diseño actual y con el que mas a gusto estoy, aunque no descarto hacer más cambios. Añadí a las patas negro y gris para que el pelaje no fuera tan monótono siendo todo el rato blanco. También definí la personalidad, gustos, disgustos y características.</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <ImageDialog img={process.env.PUBLIC_URL + "img/ref-small.jpg"} width={"100%"} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Paper>
  );
}
