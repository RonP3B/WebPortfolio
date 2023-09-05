import { Box, Paper, Typography } from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import Timeline from "./Timeline";
import RoundedButton from "./RoundedButton";

const Profile: React.FC = () => {
  return (
    <Paper>
      <Box sx={{ padding: "20px", lineHeight: "16px" }}>
        <Typography variant="h6">Roniell Pérez</Typography>
        <Typography variant="caption" color="text.secondary">
          Desarrollador de software
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
          src="https://html.tavonline.co/mat/default/images/profile.jpg"
          sx={{ width: "100%" }}
        />
      </Box>
      <Box sx={{ mt: "-45px" }}>
        <Timeline
          title={null}
          content={[
            <Typography variant="body2">
              <strong>Nombre:</strong> Roniell Pérez
            </Typography>,
            <Typography variant="body2">
              <strong>Edad:</strong> 21 años
            </Typography>,
            <Typography variant="body2">
              <strong>País:</strong> República Dominicana
            </Typography>,
            <Typography variant="body2">
              <strong>Ciudad:</strong> Santo Domingo
            </Typography>,
            <Typography variant="body2">
              <strong>Correo:</strong> roniell2016@hotmail.com
            </Typography>,
          ]}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <RoundedButton
          text="Descargar CV"
          icon={<DownloadForOfflineRoundedIcon />}
        />
      </Box>
    </Paper>
  );
};

export default Profile;
