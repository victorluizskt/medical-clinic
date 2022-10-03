import styled from "styled-components";

interface ContainerProps {
  marginTop: string,
}

export const InputContainer = styled.div<ContainerProps>`
  margin-top: ${(props) => props.marginTop};
  & > * {
    width: 300px !important;
  }
`;

export default null;
