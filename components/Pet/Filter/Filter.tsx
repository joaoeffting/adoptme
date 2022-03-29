import React, { useEffect } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { PET_TYPES } from "../../../constants";
import { PetType } from "../Pet.types";
import styles from "./Filter.module.css";

type FilterProps = {
  petList: Array<PetType> | undefined;
  filterArray: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  setPetFilterList: React.Dispatch<React.SetStateAction<PetType[] | undefined>>;
};

const Filter = ({
  petList,
  filterArray,
  setFilter,
  setPetFilterList,
}: FilterProps) => {
  useEffect(() => {
    if (petList) {
      const filteredPets = petList.filter((pet) =>
        filterArray.includes(pet.type)
      );

      if (filteredPets.length > 0) {
        setPetFilterList(filteredPets);
        return;
      }

      setPetFilterList(petList);
    }
  }, [filterArray]);

  return (
    <div className={styles.container}>
      {Object.keys(PET_TYPES).map((type) => {
        const petTotalCount =
          (petList && petList.filter((pet) => pet.type === type).length) || 0;
        return (
          <div key={type}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {
                      if (filterArray.includes(type)) {
                        const newFilterArray = filterArray.filter(
                          (item) => item !== type
                        );
                        setFilter(newFilterArray);
                        return;
                      }
                      setFilter([...filterArray, type]);
                    }}
                  />
                }
                label={`${type}(${petTotalCount})`}
              />
            </FormGroup>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
