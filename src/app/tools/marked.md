## marked
> * 一个全功能的 markdown 解析器，编译器，使用 JavaScript 编写
> * [Github, marked ](https://github.com/chjj/marked)
> * 待补充 options 内容。。。

#### Install
```shell
npm install marked --save-dev
npm i marked -g
# or
yarn add marked --dev
```

#### Usage

##### Node 不讲

##### Browser 
```js
// <script src='libs/marked.js'></script>
document.write(marked('## title \n\n **marked**'))
```

##### webpack + ES6
```js
import marked from 'marked/lib/marked'
document.write(marked('## title \n\n **marked**'))

```
