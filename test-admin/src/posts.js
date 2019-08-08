//게시물 페이지
import React from 'react';
import {
    List, Datagrid, TextField, ReferenceField, EditButton,
    Edit, SimpleForm, DisabledInput, ReferenceInput, SelectInput, TextInput, LongTextInput, Create, 
    Filter, SimpleList
} from 'react-admin';

//게시물 검색
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

//게시물 목록
export const PostList = props => (
    <List filters={<PostFilter/>} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);


const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};
//게시물 수정
export const PostEdit = props => (
    <Edit title = {<PostTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

//게시물 등록
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);



