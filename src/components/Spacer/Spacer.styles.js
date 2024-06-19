import styled from 'styled-components';


export const StyledSpacer = styled.div`
  display: inline-flex;
  width: ${(props) => (props.width ? props.width + 'px' : '0')};
  height: ${(props) => (props.height ? props.height + 'px' : '0')};

  ${({ height }) => height && `display: block;`}
`;
