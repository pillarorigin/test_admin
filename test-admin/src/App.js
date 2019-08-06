import React  from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

//메뉴바 아이콘 속성 추가
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
//Dashboard 모듈 추가.
import Dashboard from './Dashboard';
//로그인 인증 모듈 추가
import authProvider from './authProvider';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
<Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} /> 
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
</Admin>
);
    

export default App;