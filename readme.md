config 文件下 以 url 开头的文件，返回数组，会自动注册为路由
返回的数组格式为{type:"get"|"post"|"delete"|"put",url:string,result:()=>返回值|返回值}[]
