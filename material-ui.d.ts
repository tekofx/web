// eslint-disable-next-line no-unused-vars
import { TypographyVariants } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariants {
    body3: React.CSSProperties;
    card_name: React.CSSProperties;
    card_headline: React.CSSProperties;
    card_value: React.CSSProperties;
    chip: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  // eslint-disable-next-line no-unused-vars
  interface TypographyPropsVariantOverrides {
    body3: true;
    card_name: true;
    card_headline: true;
    card_value: true;
    chip: true;
  }
}
