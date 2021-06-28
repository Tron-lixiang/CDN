var token='halo';
(function(){
    if (prompt('请输入密码') !== token){
        alert('密码错误！');
        history.back();
    }
})();