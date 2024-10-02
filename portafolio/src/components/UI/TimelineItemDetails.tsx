import { Fragment } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import { Typography, Box, IconButton, Tooltip } from "@mui/material";

const TimelineItemDetails: React.FC<TimelineItemDetailsProps> = (props) => {
  return (
    <Fragment>
      <Typography variant="subtitle1" fontWeight="bold">
        {props.title}
      </Typography>
      <Typography variant="subtitle1">{props.place}</Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="subtitle2">{props.date}</Typography>
        {props.source && (
          <Tooltip title={props.tooltipTitle}>
            <IconButton
              color="primary"
              component="a"
              href={props.source}
              target="_blank"
              rel="noreferrer"
            >
              <PreviewIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      {props.performance && (
        <Typography variant="subtitle2">{props.performance}</Typography>
      )}
      {props.description && (
        <Typography variant="subtitle2">{props.description}</Typography>
      )}
    </Fragment>
  );
};

interface TimelineItemDetailsProps {
  title: string;
  place: string;
  date: string;
  tooltipTitle?: string;
  performance?: string;
  source?: string;
  description?: string;
}

export default TimelineItemDetails;
