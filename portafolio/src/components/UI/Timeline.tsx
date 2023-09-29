import { Timeline as MuiTimeline } from "@mui/lab";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import { nanoid } from "nanoid";

const Timeline: React.FC<TimelineProps> = ({ title, content, Icon }) => {
  return (
    <MuiTimeline
      sx={{
        margin: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" sx={{ padding: "6px" }}>
            <Icon />
          </TimelineDot>
          <TimelineConnector sx={{ height: "35px" }} />
        </TimelineSeparator>
        <TimelineContent>
          {title && (
            <Typography variant="h6" sx={{ pt: "8px" }}>
              {title}
            </Typography>
          )}
        </TimelineContent>
      </TimelineItem>
      {content.map((element, index) => {
        const isLastIdx: boolean = index === content.length - 1;
        return (
          <TimelineItem key={nanoid()}>
            <TimelineSeparator sx={{ paddingLeft: "14px" }}>
              <TimelineDot variant="outlined" color="primary" />
              {!isLastIdx && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{element}</TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

interface TimelineProps {
  title: string | null;
  content: JSX.Element[];
  Icon: React.ElementType;
}

export default Timeline;
