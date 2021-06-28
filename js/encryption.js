var password='halo';
(function(){
    if (prompt('请输入密码') !== password){
        alert('密码错误！');
        history.back();
    }
})();