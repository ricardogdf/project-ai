import { styled } from '@mui/material';

export const OrderedList = styled('ol')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  listStyle: 'none',
  margin: '0',
  padding: '0',
}));

export const ListItem = styled('li')(() => ({
  display: 'flex',
  marginBottom: '0.5rem',
  paddingTop: '14px',
  paddingBottom: '14px',
}));