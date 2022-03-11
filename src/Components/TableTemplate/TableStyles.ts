import styled from "styled-components";
import { color } from "../../Styles/colors";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const TitleTable = styled.div`
    margin: 20px;
    font-size: 30px;
    font-weight: 500;
    color: ${color.primary_darker};
`
export const Table = styled.table`
    width: 70vw;
    border-collapse: collapse;

`
export const TableRow = styled.tr`
    height: 40px;
    width: calc(100%/7);
    text-align: center;
    border-bottom: 1px solid ${color.primary_lighter} ;
    
    &:nth-child(even){
        background-color: ${color.primary_lightest};
    }
`
export const TableHead = styled.th`
    width: calc(100%/7);
    text-align: center;
    border-bottom: 2px solid ${color.primary};
    color: ${color.primary_darker};
    font-weight: 500;
    font-size: 18px;

`
export const TableDisplay = styled.td`
    font-size: 15px;
   
`