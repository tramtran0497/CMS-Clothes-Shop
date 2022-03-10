import styled from "styled-components";
import { color } from "../../Styles/colors";

// Chart
export const ContainerChart = styled.div`
    width: 80vw;
    height: 40vh;
    margin-bottom: 20px;
`

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

    span{
        margin-left: 10px;
    }
`
export const Title = styled.h1`
    width: 150px;
    font-size: 30px;
    font-weight: 500;
`
export const Amount = styled.p`
    width: 90px;
    font-size: 25px;
    span{
        font-size: 16px;
    }
`
