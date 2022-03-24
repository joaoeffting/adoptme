import React, { useEffect, useState } from "react";
import { Container, Grid, ImageList, ImageListItem } from "@mui/material";
import { PetType } from "./Pet.types";

const PetList = () => {
  const [petList, setPetList] = useState<Array<PetType> | undefined>(undefined);
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("/api/pet");
      const data = await response.json();
      setPetList(data);
    }
    fetchMyAPI();
  }, []);
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {petList &&
          petList.map((pet) => {
            return (
              <Grid key={pet.id} item xs={12} sm={6} md={4}>
                <img src={pet.src} alt={pet.name} />
                <div>{pet.name}</div>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default PetList;
