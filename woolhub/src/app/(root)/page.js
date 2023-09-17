import Image from 'next/image'
import { Box, Grid, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box className="flex h-screen w-full bg-home" sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Welcome to</Typography>
            <Typography variant="h2">WoolHub</Typography>
          </Box>
        </Grid>
        <Grid xs={6}>
          <Paper elevation={5} sx={{}}>
            <Image
              src="/assets/original-306df50bffa4fa7ed89f25de1ece169b.png"
              width={100}
              height={100}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
