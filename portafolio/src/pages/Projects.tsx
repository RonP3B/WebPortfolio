import { useState } from "react";
import UnderlinedTitle from "../components/UI/UnderlinedTitle";
import { Project, projects } from "../data/projects";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import ProjectDialog from "../components/dialogs/ProjectDialog";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const Projects: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClickOpen = (id: number): void => {
    const project = projects.find((project) => project.id === id);
    setSelectedProject(project!);
    setOpen(true);
  };

  const handleClose = (): void => {
    setSelectedProject(null);
    setOpen(false);
  };

  return (
    <Paper sx={{ padding: "38px 30px 45px" }}>
      <UnderlinedTitle title="Projects" />
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} lg={4}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 2,
                position: "relative",
                "&:hover .details-icon": {
                  opacity: 1,
                  transform: "translateY(-50%)",
                },
              }}
            >
              <CardActionArea onClick={() => handleClickOpen(project.id)}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={project.images[0]}
                  title={project.name}
                />
                <CardContent>
                  <Typography variant="subtitle2">{project.name}</Typography>
                  <Typography variant="caption" color="GrayText">
                    {project.type}
                  </Typography>
                  <InfoTwoToneIcon
                    className="details-icon"
                    color="primary"
                    sx={{
                      fontSize: 50,
                      position: "absolute",
                      top: "35%",
                      left: "42%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0,
                      transition: "opacity 0.3s, transform 0.3s",
                    }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedProject && (
        <ProjectDialog
          open={open}
          project={selectedProject}
          handleClose={handleClose}
        />
      )}
    </Paper>
  );
};

export default Projects;
