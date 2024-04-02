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
  },
  display: 'flex',
  alignItems: 'flex-end',
}));

export const SearchBarContainer = styled(Container)(() => ({
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingBottom: '1rem',
}));

export const SearchBarTextField = styled(TextField)(() => ({
  marginTop: '0',
  '& div': {
    marginTop: '0',
  },
  '& label': {
    top: 'calc(6/16 * -1 * 1rem)',
  },
  '& input': {
    padding: '0.75rem 0',
  },
  // minHeight: '3rem',
}));

export const SearchBarIcon = styled(SearchIcon)(({ theme }) => ({
  color: `${theme.palette.secondary.main} !important`,
  mr: 1, // margin-right
  my: 0.5, // margin-top
  position: 'relative',
  top: '-0.5rem',
}));
