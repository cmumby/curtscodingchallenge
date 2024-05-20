import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import {
  MessagePanelHeader,
  MessagePanelCard,
  MessagePanelAvatar,
  MessagePanelStack,
  MessagePanelBox,
  MessagePanelName,
  MessagePanelHandle,
  MessagePanelContent,
  MessagePanelDate,
} from './MessagePanel.style';
import { MESSAGES } from '../../mockData/mockData';

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MessagePanel() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <MessagePanelCard sx={{ padding: 0 }}>
      <CardActions
        onClick={handleExpandClick}
        aria-expanded={expanded}
        disableSpacing
        sx={{ position: 'sticky', top: 0, zIndex: 11, backgroundColor: '#121212', cursor: 'pointer' }}
      >
        <MessagePanelHeader variant="h2" color="text.secondary">
          Messages
        </MessagePanelHeader>
        <IconButton aria-label="add to favorites">
          <MailOutlineIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <KeyboardDoubleArrowUpIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: 0, backgroundColor: '#121212' }}>
          {MESSAGES.map(({ firstName, lastName, username, avatar, message, date }) => (
            <MessagePanelBox>
              <MessagePanelAvatar variant="circular" height={40} width={40} src={avatar} />

              <MessagePanelStack sx={{ flexDirection: 'row', padding: '0' }}>
                <MessagePanelName>
                  {firstName} {lastName}
                </MessagePanelName>
                <Typography>&nbsp;</Typography>
                <Typography>
                  {Math.floor(Math.random() * 10) > 1 ? <VerifiedIcon color="primary" fontSize="tiny" /> : ''}
                  &nbsp;
                </Typography>
                <MessagePanelHandle>@{username}</MessagePanelHandle>
                <MessagePanelDate>&nbsp;- {date}</MessagePanelDate>
              </MessagePanelStack>
              <MessagePanelContent paragraph>{message}</MessagePanelContent>
            </MessagePanelBox>
          ))}
        </CardContent>
      </Collapse>
    </MessagePanelCard>
  );
}
