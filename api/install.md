##### 0. Initialize project
* `vue init webpack my-project`
* You can try other template
* __url__ [https://vuejs-templates.github.io/webpack/]()


##### 1. Config JavaScript Version, excluded node_modules
* `ctrl + shift + s` open the WebStorm setting
* choose `Languages and Frameworks`
* choose `JavaScript`
* choose `JavaScript languages version` to ES6
* find **node_modules**
* right click
* make directory as 'excluded'


##### 2. Config jade (optional)

* Install jade
```shell
npm install jade jade-loader -D
or
yarn add jade jade-loader --dev
```

* Config jade
> open build/webpack.base.conf.js and add the code above
```js
{
  test: /\.jade$/,
  loader: 'jade-loader'
}
```

##### 3. Config less
```shell
npm install less less-loader -D
or
yarn add less less-loader --dev
```

##### 4. Config vux (if need)
* install
```shell
yarn add vux vux-loader --dev
```
* config
> open webpack.base.conf.js
```js
const vuxLoader = require('vux-loader')
const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
```
* use
```html
<template>
  <div>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group,
    Cell
  }
}
</script>
```

##### 5. Reset css (if need)
* install normalize.css
```shell
yarn add normalize.css
```
* Open `app.vue` and add code above
```html
<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~normalize.css/normalize.css';
  @import "./assets/key.less";
</style>
```

##### 6. Install vue-resource
* install
```shell
yarn add vue-resource
```
* open `main.js` and config
```js
import VueResource from 'vue-resource'
Vue.use(VueResource)
```
* use
```js
mounted () {
    this.$http.get('http://127.0.0.1:8080', {responseType: 'text'}).then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
}
```

##### 7. Install vuex
* install
```shell
yarn add vuex
```
* config
```js
import Vuex from 'vuex'
Vue.use(Vuex)
```
* use
[Github Vuex](https://github.com/vuejs/vuex)

##### 8. Install vue dev tools
[Chrome Web Store](https://chrome.google.com/webstore/detail/nhdogjmejiglipccpnnnanhbledajbpd?utm_source=chrome-app-launcher-info-dialog)

