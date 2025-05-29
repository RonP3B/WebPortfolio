import { Box, Paper, Typography } from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import Timeline from "../UI/Timeline";
import RoundedButton from "../buttons/RoundedButton";
import { profileData } from "../../data/profile";
import { downloadFile } from "../../utils/downloadFile";
import ContactsIcon from "@mui/icons-material/Contacts";

const Profile: React.FC = () => {
  return (
    <Paper>
      <Box sx={{ padding: "20px", lineHeight: "16px" }}>
        <Typography variant="h6">Roniell Pérez</Typography>
        <Typography variant="caption" color="text.secondary">
          Software Developer
        </Typography>
      </Box>
      <Box
        component="figure"
        sx={{
          margin: 0,
          mt: "-22px",
          clipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
        }}
      >
        <Box
          component="img"
          alt="Roniell Pérez"
          src="images/main/yolanda.png"
          sx={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ mt: "-45px" }}>
        <Timeline
          Icon={ContactsIcon}
          title={null}
          content={profileData.map(({ title, val }) => (
            <Typography variant="body2">
              <strong>{title}</strong> {val}
            </Typography>
          ))}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <RoundedButton
          text="Download CV"
          icon={<DownloadForOfflineRoundedIcon />}
          onClick={() => downloadFile("files/CV-Roniell Perez.pdf")}
        />
      </Box>
    </Paper>
  );
};

export default Profile;
