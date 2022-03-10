import React from "react";
import { Applist, AppListItem, Title, Item } from "./NavigationStyles";
interface AppListProps {}

export const AppList: React.FC<AppListProps> = () => {
  return (
    <Applist>
      <AppListItem>
        <Title>Home</Title>
        <Item>Sales</Item>
        <Item>Analytics</Item>
      </AppListItem>
      <AppListItem>
        <Title>Menu</Title>
        <Item>Users</Item>
        <Item>Products</Item>
        <Item>Transactions</Item>
        <Item>Reports</Item>
      </AppListItem>
      <AppListItem>
        <Title>Notifications</Title>
        <Item>Mail</Item>
        <Item>Feedbacks</Item>
        <Item>Message</Item>
      </AppListItem>
      <AppListItem>
        <Title>Staff</Title>
        <Item>Employees</Item>
      </AppListItem>
    </Applist>
  );
};
