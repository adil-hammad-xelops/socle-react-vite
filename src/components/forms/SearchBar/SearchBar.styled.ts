import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;

  .MuiOutlinedInput-root {
    border-radius: ${({theme}) => theme.spacing(3)};
    background-color: ${({theme}) => theme.palette.background.paper};
  }
`;

