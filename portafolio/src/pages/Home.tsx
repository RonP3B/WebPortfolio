import { nanoid } from "nanoid";
import UnderlinedTitle from "../components/UI/UnderlinedTitle";
import { aboutMe } from "../data/aboutMe";
import { Box, Grid, Paper, Theme, Typography } from "@mui/material";
import { technicalProficiencies } from "../data/technicalProficiencies";
import useColorMode from "../hooks/useColorMode";

const Home: React.FC = () => {
  const { mode } = useColorMode();
  const grayShadow: string = "0px 0px 48px 0px rgba(4, 6, 4, 0.08)";
  const whiteShadow: string = "0px 0px 48px 0px rgba(255, 255, 255, 0.08)";

  return (
    <Paper sx={{ padding: "38px 30px 45px" }}>
      <Box>
        <UnderlinedTitle title="About Me" />
        <Box my={2}>
          {aboutMe.map((paragraph, index) => {
            const isLastIndex: boolean = index === aboutMe.length - 1;
            return (
              <Typography
                key={nanoid()}
                variant="body1"
                mb={isLastIndex ? 0 : 1.5}
              >
                {paragraph}
              </Typography>
            );
          })}
        </Box>
      </Box>
      <Box>
        <UnderlinedTitle title="Technical Proficiencies" />
        <Grid container spacing={2} my={2}>
          {technicalProficiencies.map((proficience) => (
            <Grid item xs={12} sm={6} md={12} lg={3} key={nanoid()}>
              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: (theme: Theme) =>
                    theme.palette.mode === "dark" ? whiteShadow : grayShadow,
                  backgroundColor: (theme: Theme) =>
                    theme.palette.mode === "dark" ? "#1a1a1a" : "#fff",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 45,
                    width: 45,
                    display: "inline-block",
                    margin: "0 auto",
                  }}
                  alt={proficience.title}
                  src={
                    mode === "dark" ? proficience.lightIcon : proficience.icon
                  }
                />
                <Typography variant="subtitle2">{proficience.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {proficience.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Home;
