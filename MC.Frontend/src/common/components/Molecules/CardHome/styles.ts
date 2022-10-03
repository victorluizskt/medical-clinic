import styled from "styled-components";

interface ContainerProps {
  width: string,
  height: string,
  marginTop: string,
}

export const Image = styled.img<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;

export const PasswordContainer = styled.div`
  margin-top: 30px;
`;

export const PasswordRecover = styled.span`
  margin-top: 3px;
  font-family: 'Inter';
  font-size: 12px;
`;

export const PrivacyPolitic = styled.span`
  margin-top: 23px;
  font-family: 'Inter';
  font-size: 12px;
`;

export const PrivacyPoliticHref = styled.span`
  text-decoration: underline;
  font-family: 'Inter';
  font-size: 12px;
  text-align: center;
`;

export const InputContainer = styled.div`
  & > * {
    width: 300px !important;
  }
`;

export default null;
