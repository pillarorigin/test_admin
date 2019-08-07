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
//테마 스타일 모듈 추가
import { createMuiTheme } from '@material-ui/core/styles';

//임의 데이터
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

//테마 스타일
const theme = createMuiTheme({
    palette: {
        type: 'light',
        secondary : {main: '#11cb5f'}
    }
})

const App = () => (
<Admin theme={theme} dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} /> 
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
</Admin>
);
    

export default App;