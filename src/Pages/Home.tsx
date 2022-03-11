import React from "react";
import { Analytics } from "../Components/Analytics/Analytics";
import { TableTemplate } from "../Components/TableTemplate/TableTemplate";
import {PageContainer} from "./HomeStyle";
import {salesList, salesHeaders} from "../temporaryData"
interface HomeProps{

}

export const Home: React.FC<HomeProps> = () => {
    return(
        <PageContainer>
            <Analytics/>
            <TableTemplate list={salesList} headers={salesHeaders} title="Sales"/>
        </PageContainer>
    )
}

