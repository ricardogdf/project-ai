import styled from 'styled-components';

export const NotificationBody = styled.div`
  max-width: 60rem;

  .title {
    font-weight: bold;
    color: ${(props) => props.theme.palette.gray[200]};
    margin-bottom: 1rem;
    white-space: nowrap;

    svg {
      margin-right: 1rem;
    }

    &.alert {
      color: #c20d19;
    }
  }

  .pointer {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.palette.gray[200]};
  border-radius: 0.8rem;

  padding: 1rem 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  height: 4rem;
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: grid;
  position: relative;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    color: black;
  }
`;
