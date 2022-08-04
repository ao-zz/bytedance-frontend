# Week 1
- `web-worker` 利用 web worker 实现双线程通信
- `module_load` 基本的模块加载函数

# Week 2
- `render-vdom` 实现 vdom 渲染
- `render-jsx` 实现 jsx 编译为 vdom 并渲染

# Week 3
实现基本组件与语句的编译，将 JSX 代码转换成对应的小程序模板。支持 `button`, `tt:if` 等

# Week 4
融合 Week 1-3 的内容，通过 JSX 代码的编译与渲染完成一个简单小程序的开发

# 运行
1. 安装依赖
```
npm install
```

2. Week 1-3 启动 server 后在浏览器打开
```
npx http-server
```

Week 4 需要执行编译
```
npm run build:compile
```
