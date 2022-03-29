import React, { useEffect, useState } from "react";
import { Container, Grid, ImageList, ImageListItem } from "@mui/material";
import { PetType } from "../Pet.types";
import Filter from "../Filter/Filter";
import styles from "./PetList.module.css";

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
                <img src={pet.src} alt={pet.name} className={styles.image} />
                <div>{pet.name}</div>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default PetList;
