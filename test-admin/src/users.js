//user page

//react 기본 제공 componenet
import React from 'react';
import {List, Datagrid, TextField, EmailField} from 'react-admin'; 
//내가 만든 component
import MyUrlField from './MyUrlField';

//함수형 component (props만 전달해서 view 랜더링만 할 목적이므로) / 비구조화 할당
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
