 $ ( '#login-button' ) . 点击 ( 功能  ( 事件 )  {
     出租  用户名 = document. 麦田比德 ( "userName" ) . 价值 ;
     出租  无价值的 = document. 麦田比德 ( "pwd" ) . 价值 ;
     如果  ( userName == "大傻逼" && pwd == "520" )  {
         $ ( '#h' ) . 文本 ( "生日快乐！" ) ;
        事件。 预防违约 ( ) ;
         $ ( 'form' ) . 逐渐消失 ( 500 ) ;
         $ ( '.wrapper' ) . 地址类 ( 'form-success' ) ;
         规定超时时间 ( 功能  ( )  {
            地点。 高参考值 = "BirthdayCake.html" ;
         } , 4000 ) ;
     }  其他的  {
         警告 ( "用户名或密码不正确！" ) ;
    }
 } ) ;
