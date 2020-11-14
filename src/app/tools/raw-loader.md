## Raw-load

> * 一个 webpack loader，可以让你将文件作为字符串引入
> * 可用于 markdown 引入，并进行渲染
> * [Github, webpack raw-loader](https://github.com/webpack-contrib/raw-loader)

#### Install
```shell
npm install --save-dev raw-loader
# or
yarn add raw-loader --dev
```


#### Usage
* change in webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  }
}
```

* In your js file

```js
import txt from 'file.txt';
// use txt
```
