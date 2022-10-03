import styled from "styled-components";

interface ContainerProps {
  width: string,
  height: string,
}

export const CardContainer = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #EBF9FF;
  position: absolute;
  margin-top: 90px;
  margin-left: 58px;
`;

export default null;
