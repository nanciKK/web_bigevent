//注意：每次调用$.get() $.post() $.ajax()的时候，会先调用这个函数，
//在这个函数中，可以拿到ajax给我们的配置对象
$.ajaxPrefilter(function(options) {
    //再发起正真的ajax请求之前，统一拼接请求路径
    // console.log(options.url); ///api/login
    options.url = 'http://www.liulongbin.top:3007' + options.url
        // console.log(options.url); //http://www.liulongbin.top:3007/api/login

    // 统一为有权限的接口，设置 headers 请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token' || '')
        }
    }

    // 全局统一挂载 complete 函数
    options.complete = function(res) {
        // console.log('执行了complete函数');
        // console.log(res);
        //  在complete 回调函数中，可以使用 res.responseJSON  拿到服务器响应回来的数据
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            // 1.强制清空token
            localStorage.removeItem('token');
            // 2.跳转到登录页
            location.href = '/login.html'

        }
    }

})