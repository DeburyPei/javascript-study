// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules

/*
    优点
        该支持都支持
        支持静态分析 tree-shaking    //把没有用掉的变量 删掉
        支持按需加载 import
    缺点
        不支持拼接字符串
        不支持模糊加载  import ... from './*.js'   解决 代码生成技术
        不兼容Node的CJS                             解决 使用.mjs后缀

*/