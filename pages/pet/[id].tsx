import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Grid,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { PetType } from "src/components/Pet/Pet.types";

const PetDetails = () => {
  const router = useRouter();

  const [pet, setPet] = useState<PetType | undefined>(undefined);

  useEffect(() => {
    async function getPetById() {
      try {
        const { id } = router.query;
        const response = await fetch(`/api/pet/${id}`);
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (!router.isReady) return;
    getPetById();
  }, [router.isReady]);

  if (!pet) {
    return <div>Loading pet</div>;
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
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
          <Typography variant="body2" color="text.secondary">
            {pet.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PetDetails;
