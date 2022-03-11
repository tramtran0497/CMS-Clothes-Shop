import styled from "styled-components";
import { color } from "../../Styles/colors";

// Analytics
export const Container = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardWrap = styled.div`
  width: 70vw;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;
// Chart
export const TitleChart = styled.div`
  margin: 20px;
  font-size: 30px;
  font-weight: 500;
  color: ${color.primary_darker};
`
export const ContainerChart = styled.div`
  width: 70vw;
  height: 40vh;
  margin-bottom: 30px;
`;

// Card
export const ContainerCard = styled.div`
  width: 250px;
  height: 100px;
  background-color: ${color.primary};
  border-radius: 20px;
  padding: 10px 20px;
  color: ${color.lightTheme};
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;
export const Title = styled.h1`
  width: 150px;
  font-size: 30px;
  font-weight: 500;
`;
export const Amount = styled.p`
  width: 90px;
  font-size: 25px;
  span {
    font-size: 16px;
  }
`;
