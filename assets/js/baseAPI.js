//注意：每次调用$.get() $.post() $.ajax()的时候，会先调用这个函数，
//在这个函数中，可以拿到ajax给我们的配置对象
$.ajaxPrefilter(function(options) {
    //再发起正真的ajax请求之前，统一拼接请求路径
    // console.log(options.url); ///api/login
    options.url = 'http://www.liulongbin.top:3007' + options.url
        // console.log(options.url); //http://www.liulongbin.top:3007/api/login

})