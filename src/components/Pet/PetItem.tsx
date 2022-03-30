import { Grid } from "@mui/material";
import React from "react";
import { PetType } from "./Pet.types";

type PetItemProps = {
  pet: PetType;
};

const PetItem = ({ pet }: PetItemProps) => {
  return (
    <Grid key={pet.id} item xs={8}>
      <img src={pet.src} alt={pet.name} />
      <text>{pet.name}</text>
    </Grid>
  );
};

export default PetItem;
