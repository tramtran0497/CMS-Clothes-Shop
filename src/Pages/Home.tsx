import React from "react";
import { Card } from "../Components/Analytics/Card";
import { Chart } from "../Components/Analytics/Chart";
import {CardWrap, Container} from "./HomeStyle";
interface HomeProps{

}

export const Home: React.FC<HomeProps> = () => {
    return(
        <Container>
            <CardWrap>
                <Card title="Sales" amount={4700} isIncreased={true}/>
                <Card title="Cost" amount={3000} isIncreased={true}/>
                <Card title="Revenue" amount={1700} isIncreased={false}/>
            </CardWrap>
            <Chart/>
        </Container>
    )
}