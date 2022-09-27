import React from 'react'
import Grid from "@mui/material/Grid";
import MangaCard from "../commons/MangaCard";

const MangasGrill = () => {

  const arr=[1,2,3,4,5,6,7,8,9];

  return (
    <main>
      <Grid
          container
          spacing={4}
          sx={{ p: 8, ml: "250px", maxWidth: "85vw",backgroundColor:"#1b004b"}}
        >
         {arr.map((card) => (
            <MangaCard/>
          ))}
         
        </Grid>
    </main>
  )
}

export default MangasGrill