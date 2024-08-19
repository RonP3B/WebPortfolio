import { Paper, Grid, Typography, Box, IconButton } from "@mui/material";
import UnderlinedTitle from "../components/UI/UnderlinedTitle";
import Timeline from "../components/UI/Timeline";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { resume } from "../data/resume";
import { nanoid } from "nanoid";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { downloadFile } from "../utils/downloadFile";

const Resume: React.FC = () => {
  return (
    <Paper sx={{ padding: "38px 30px 45px" }}>
      <Box>
        <UnderlinedTitle title="Resume" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Timeline
              Icon={SchoolRoundedIcon}
              title={"Education History"}
              content={resume.education.map((data) => (
                <>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {data.title}
                  </Typography>
                  <Typography variant="subtitle1">{data.school}</Typography>
                  <Box display="flex" alignItems="center">
                    <Typography variant="subtitle2">{data.date}</Typography>
                    {data.source && (
                      <IconButton
                        color="primary"
                        onClick={() => downloadFile(data.source)}
                      >
                        <DownloadRoundedIcon />
                      </IconButton>
                    )}
                  </Box>
                  {data.gpa && (
                    <Typography variant="subtitle2">{data.gpa}</Typography>
                  )}
                </>
              ))}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Timeline
              Icon={WorkRoundedIcon}
              title={"Work experience"}
              content={resume.workExperience.map((data) => (
                <>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {data.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {data.organization}
                  </Typography>
                  <Typography variant="subtitle2">{data.date}</Typography>
                  <Typography variant="subtitle2">
                    {data.description}
                  </Typography>
                </>
              ))}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Timeline
              Icon={WorkspacePremiumRoundedIcon}
              title={"Certifications"}
              content={resume.certifications.map((data) => (
                <>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {data.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {data.organization}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Typography variant="subtitle2">{data.date}</Typography>
                    <IconButton
                      color="primary"
                      onClick={() => downloadFile(data.source)}
                    >
                      <DownloadRoundedIcon />
                    </IconButton>
                  </Box>
                </>
              ))}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <UnderlinedTitle title="Techinical Skills" />
        <Grid container spacing={2} sx={{ my: 2 }}>
          {resume.skills.map((skill) => (
            <Grid
              item
              key={nanoid()}
              component="a"
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              xs={4}
              sm={2}
              sx={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                "&:hover": {
                  "& .skillName": {
                    color: "primary.main",
                  },
                },
              }}
            >
              <Box
                component="img"
                alt={skill.name}
                src={skill.icon}
                sx={{
                  height: 45,
                  width: 45,
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                variant="subtitle2"
                textAlign="center"
                className="skillName"
                sx={{ transition: "color 0.3s" }}
              >
                {skill.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <UnderlinedTitle title="Languages Skills" />
        <Grid container spacing={2} my={2}>
          {resume.languages.map(({ language, level, icon }) => (
            <Grid key={nanoid()} item xs={6} textAlign="center">
              <Box
                component="img"
                alt={language}
                src={icon}
                sx={{
                  height: 60,
                  width: 60,
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography variant="subtitle1" fontWeight="bold">
                {language}
              </Typography>
              <Typography variant="subtitle2" fontWeight="normal">
                {level}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <UnderlinedTitle title="Objective" />
        <Typography variant="body1" my={2}>
          Enthusiastic and diligent software development student with an
          academic background and a passion for problem-solving and coding.
          Eager to leverage my skills and knowledge to contribute effectively to
          a dynamic team and gain practical experience in the software
          development industry.
        </Typography>
      </Box>
    </Paper>
  );
};

export default Resume;
