import ImageGallery from "react-image-gallery";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import LanguageIcon from "@mui/icons-material/Language";
import { Project } from "../data/projects";
import CloseIcon from "@mui/icons-material/Close";
import { nanoid } from "nanoid";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Chip,
  Box,
  Tooltip,
} from "@mui/material";

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  open,
  handleClose,
  project,
}) => {
  const downloadConnect4 = (): void => {
    const anchor = document.createElement("a");

    anchor.href = "/connect4.exe";
    anchor.setAttribute("download", "connect4.exe");
    anchor.style.display = "none";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const imageItems = project.images.map((image) => {
    return { original: image, thumbnail: image };
  });

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }}>{project.name}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box className="custom-gallery-container">
          <ImageGallery items={imageItems} />
        </Box>
        <Typography gutterBottom>
          <strong>Description:</strong> {project.description}
        </Typography>
        <Typography gutterBottom>
          <strong>Languages and tools:</strong>{" "}
          {project.tools.map((tool) => (
            <Box key={nanoid()} padding={0.1} display="inline-block">
              <Chip color="primary" label={tool} sx={{ ml: 1 }} />
            </Box>
          ))}
        </Typography>
      </DialogContent>
      <Box display="flex" justifyContent="center" padding={2}>
        <Tooltip title="Source code" placement="top">
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ color: "#672785", fontSize: 35 }} />
          </a>
        </Tooltip>
        {project.projectUrl && (
          <Tooltip title="Project page" placement="top">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageIcon sx={{ color: "#4caf50", fontSize: 35 }} />
            </a>
          </Tooltip>
        )}
        {project.id === 5 && (
          <Tooltip title="Download" placement="top">
            <FileDownloadRoundedIcon
              sx={{ color: "blue", fontSize: 35 }}
              onClick={downloadConnect4}
            />
          </Tooltip>
        )}
      </Box>
    </Dialog>
  );
};

interface ProjectDialogProps {
  open: boolean;
  handleClose: () => void;
  project: Project;
}

export default ProjectDialog;
