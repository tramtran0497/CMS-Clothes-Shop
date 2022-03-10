import React from "react";
import { Amount, ContainerCard, Title } from "./AnalyticsStyles";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

interface CardProps{
    title: string,
    amount: number,
    isIncreased: boolean,
}

export const Card:React.FC<CardProps> = ({title, amount, isIncreased}) => {
    return(
        <ContainerCard>
            <Title>{title}</Title>
            <Amount><span>€</span> {amount}</Amount>
            {isIncreased ? <TrendingUpIcon style={{color: "#fca311"}}/> : <TrendingDownIcon style={{color: "#d00000"}}/>}
            <span>Compared to last month</span>
        </ContainerCard>
    )
}