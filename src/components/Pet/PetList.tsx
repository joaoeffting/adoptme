import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { PetType } from "./Pet.types";
import Filter from "./Filter/Filter";

const PetList = () => {
  const [petList, setPetList] = useState<Array<PetType> | undefined>(undefined);
  const [petFilterList, setPetFilterList] = useState<
    Array<PetType> | undefined
  >(undefined);
  const [filterArray, setFilter] = useState([""]);
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("/api/pet");
      const data = await response.json();
      setPetList(data);
      setPetFilterList(data);
    }
    fetchMyAPI();
  }, []);

  return (
    <Container sx={{ flexGrow: 1 }}>
      Total: {(petFilterList && petFilterList.length) || 0}
      <Filter
        petList={petList}
        filterArray={filterArray}
        setFilter={setFilter}
        setPetFilterList={setPetFilterList}
      />
      <Grid container spacing={1}>
        {petFilterList &&
          petFilterList.map((pet) => {
            return (
              <Grid key={pet.id} item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea href={`pet/${pet.id}`}>
                    <CardMedia
                      component="img"
                      height="80%"
                      image={pet.src}
                      alt={pet.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {pet.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default PetList;
