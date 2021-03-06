import Mock from 'mockjs';
import loginData from './loginData';

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
});

// 登录相关
Mock.mock('/012004/test/login', 'post', loginData.login);

export default Mock;
