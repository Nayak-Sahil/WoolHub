import Image from "next/image";
import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#ededff",
      }}
    >
      <Grid container spacing={0}>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6">Welcome to</Typography>
            <Typography variant="h2">WoolHub</Typography>
          </Box>
        </Grid>
        <Grid
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={5}
            sx={{
              position:"absolute",
              width: 500,
              height: 400,
              borderRadius: "80px",
            }}
          >
            <Image fill={true}
              src="/assets/8467ddb4f769867b7185e3a6ceca1671.jpg"
              // width={500}
              // height={400}
              style={{
                // boxShadow: "17px 14px 31px 3px rgba(0, 0, 0, 0.73)",
                // borderRadius: "40px",
                objectFit: "contain",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
