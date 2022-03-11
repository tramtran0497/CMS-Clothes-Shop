import React from "react";
import { Card } from "./Card";
import { Chart } from "./Chart";
import {CardWrap, Container} from "./AnalyticsStyles";
interface AnalyticsProps{

}
export const Analytics: React.FC<AnalyticsProps> = () => {
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