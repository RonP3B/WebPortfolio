import UnderlinedTitle from "../components/UI/UnderlinedTitle";
import Timeline from "../components/UI/Timeline";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { resume } from "../data/resume";
import { nanoid } from "nanoid";
import { resumeStyles } from "@/styles/css/pages/resume-styles";
import TimelineItemDetails from "@/components/UI/TimelineItemDetails";
import { Paper, Grid, Typography, Box } from "@mui/material";

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
                <TimelineItemDetails
                  title={data.title}
                  place={data.school}
                  date={data.date}
                  source={data.diploma}
                  tooltipTitle="See diploma"
                  performance={data.gpa}
                />
              ))}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Timeline
              Icon={WorkRoundedIcon}
              title={"Work experience"}
              content={resume.workExperience.map((data) => (
                <TimelineItemDetails
                  title={data.title}
                  place={data.organization}
                  date={data.date}
                  description={data.description}
                  source={data.workCertificate}
                  tooltipTitle="See work certificate"
                />
              ))}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Timeline
              Icon={WorkspacePremiumRoundedIcon}
              title={"Certifications"}
              content={resume.certifications.map((data) => (
                <TimelineItemDetails
                  title={data.title}
                  place={data.organization}
                  date={data.date}
                  tooltipTitle="See certification"
                  source={data.source}
                />
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
              sx={resumeStyles.skillGrid}
            >
              <Box
                component="img"
                alt={skill.name}
                src={skill.icon}
                sx={resumeStyles.skillBox}
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
        <UnderlinedTitle title="Currently learning" />
        <Grid container spacing={2} sx={{ my: 2 }}>
          {resume.learningSkills.map((skill) => (
            <Grid
              item
              key={nanoid()}
              component="a"
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              xs={4}
              sm={2}
              sx={resumeStyles.skillGrid}
            >
              <Box
                component="img"
                alt={skill.name}
                src={skill.icon}
                sx={resumeStyles.skillBox}
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
                sx={resumeStyles.languageBox}
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
    </Paper>
  );
};

export default Resume;
