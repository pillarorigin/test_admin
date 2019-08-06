//로그인 인증 페이지
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default(type, params) => {
    //user가 로그인 시도 할 때
    if(type === AUTH_LOGIN) {
        const {username} = params;
        localStorage.setItem('username', username);
    //유저이름과 비밀번호 일치하면
    return Promise.resolve();
    }

    //user가 로그아웃 버튼 클릭할 때
    if(type === AUTH_LOGOUT){
        localStorage.removeItem('username');
        return Promise.resolve();
    }

    //API가 error를 return할 때 호출 코드
    if(type === AUTH_ERROR){
        const { status } = params;
        if (status === 401 || status === 400){
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    
    //user가 새로 고침 할 떄
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
        ? Promise.resolve()
        : Promise.reject();
    }
    return Promise.reject('Unknown method');

     
};