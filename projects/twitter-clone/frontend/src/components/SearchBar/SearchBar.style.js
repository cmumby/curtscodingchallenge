import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';

import { styled } from '@mui/material/styles';

export const SearchBarBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.boxBackgroundColor,
  // paddingBottom: '1rem',
  paddingLeft: '1rem',
  borderRadius: '624.9375rem',
  '& label[data-shrink="true"]': {
    display: 'none !important',
    // visibility: 'hidden',
  },
  display: 'flex',
  alignItems: 'flex-end',
}));

export const SearchBarContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.mainBackgroundColor,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingBottom: '1rem',
  paddingTop: '1rem',
  position: 'sticky',
  top: 0,
  zIndex: 10,
}));

export const SearchBarTextField = styled(TextField)(() => ({
  marginTop: '0',
  '& div': {
    marginTop: '0',
  },
  '& label': {
    // top: 'calc(3/16 * -1 * 1rem)',
    // position: 'relative',
  },
  '& input': {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },

  minHeight: '2rem !important',
}));

export const SearchBarIcon = styled(SearchIcon)(({ theme }) => ({
  color: `${theme.palette.secondary.main} !important`,
  mr: 1, // margin-right
  my: 0.5, // margin-top
  position: 'relative',
  top: '-0.5rem',
}));
