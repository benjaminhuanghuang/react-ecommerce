// 
import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class User {
    login(loginInfo) {
        return _mm.request({
            url: 'manage/user/login.do',
            type: 'POST',
            data: loginInfo

        });
    }

    logout(){
        return _mm.request({
            url: '/user/logout.do',
            type: 'POST'
        });
    }

    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username);
        let password = $.trim(loginInfo.password);
        if(typeof username !== 'string' || username.length === 0 )
        {
            return {
                status: false,
                msg:  "User name can not be empty."
            }
        }

        if(typeof password !== 'string' || password.length === 0 )
        {
            return {
                status: false,
                msg:  "Password can not be empty."
            }
        }

        return {
            status: true,
            msg: 'Logged in.'
        };
    }
}


export default User;