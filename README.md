TypeScript ts-node Run Esm Dependency Demo
===========================

如果某个库是以esm发布的，在当前的ts-node中直接调用它非常麻烦。

1. package.json中要添加 `type=module`
2. 命令行要加很多参数

并且此时使用了普通commonjs的dependency，会有另外的报错。所以如果不使用bundler，要避免使用esm库

```
npm install
npm start
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

