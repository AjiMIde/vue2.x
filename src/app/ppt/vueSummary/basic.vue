<template>
  <div class="vux2x-document">
    <h2>Vue2.X</h2>
    <h4>起源</h4>
    <div class="para">
      <ul>
        <li>2013.06 项目建立</li>
        <li>2014.02 Version1.0</li>
        <li>2016.10 Version2.0</li>
        <li>MVVM Framework</li>
        <li><a href="http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html" target="_blank">阮一峰 MVC/MVP/MVVM</a></li>
      </ul>
    </div>

    <h4>特点</h4>
    <div class="para">
      <ul>
        <li>以数据驱动为目的，只关注视图层</li>
        <li>渐进式、自底向上、增量级</li>
        <li>使用 Virtual Dom</li>
        <li>组件化、响应式</li>
      </ul>
    </div>

    <h4>入门实例</h4>
    <div class="para">
      <ul>
        <li><a href="https://jsfiddle.net/AjiMIde/oxv76z3j/13/" target="_blank">js fiddle</a></li>
        <li><a href="https://s.phone580.com/pay/assets/qq/fzs/#!/index/qb" target="_blank">qq充值</a></li>
        <li><a href="http://localhost:8088/#/ppt/vue-summary/example" target="_blank">仿 qq充值</a></li>
        <li><b>带 v- 开头的，均为 vue 指令</b></li>
        <pre><code class="html">
          &lt;div v-model v-bind v-on v-html>{{msg}&shy;}&lt;/div>
        </code></pre>

        <li>使用双括号<code>{&shy;{}}</code>进行值的文本渲染</li>
        <pre><code class="html">
          &lt;div>{{msg}&shy;}&lt;/div>
          &lt;div>{{msg | filter}&shy;}&lt;/div>
        </code></pre>

        <li>使用 <code>v-html</code> 渲染 html 代码（而非输出 html 代码）</li>
        <pre><code class="html">
          &lt;div v-html='htmlVal'>/div>
        </code></pre>

        <li>使用 <code>v-model</code> 双向绑定表单输入（不过是 @input/:value 的语法糖）</li>
        <pre><code class="html">
          &lt;input type="text" v-model="inputVal">
        </code></pre>

        <li>使用 <code>v-bind</code>（简写成冒号： ':'） 输出 html tag 属性</li>
        <pre><code class="html">
          &lt;div :title='"i am title"'>&lt;/div>
        </code></pre>

        <li>使用 <code>v-on</code>（简写成： '@'） 绑定事件 </li>
        <pre><code class="html">
          // 添加事件，除 click 外，还有：keyup/keydown/mousedown/mouseup等
          &lt;div @click='onClick()'>&lt;/div>

          // 使用事件修饰符
          // stop：阻止事件传播（冒泡）
          // prevent：阻止提交页面，主要用于 form 表单：:submit.prevent
          // capture：内部的事件在此处理，再由内部自身处理，如
          // self：只在当前 element 触发事件，即 event.target == this
          &lt;div @click.stop='onClick()'>&lt;/div>

          &lt;div @click='onDivClick()'>          当点击 button 时，执行 onBtnClick，不会执行onBtnClick
            &lt;button @click.stop='onBtnClick()'>&lt;/button>
          &lt;/div>

          &lt;div @click.capture='onDivClick()'>          当点击 button 时，先执行 onDivClick，再执行onBtnClick
            &lt;button @click='onBtnClick()'>&lt;/button>
          &lt;/div>

          // 使用按键修改符，13 时该键的 keyCode，vue 提供了别名，可使用 enter/tab/delete/esc/space/up/down/left/right
          // 使用 Vue.config.keyCodes.keyAliasName = 111 可自定义按钮修改名
          &lt;input @keyup.13="submit">
          &lt;input @keyup.enter="submit">


        </code></pre>
        <div class="example">
          <div style="" @click="onDivClick()">
            <button @click.stop="onBtnClick()">点我测试 stop</button>
          </div>
          <div style="" @click.capture="onDivClick()">
            <button @click="onBtnClick()">点我测试 capture</button>
          </div>
        </div>

        <li>使用 <code>v-if/v-else-if/v-elsev-show</code>控制 Dom 显示与否</li>
        <pre><code class="html">
          &lt;div v-show='show' v-if='show'>{&shy;{msg}}&lt;/div>
          &lt;div v-else>&lt;{&shy;{msg}}/div>
        </code></pre>

        <li>使用 <code>v-bind</code> 控制class/style <b>（只举例 class）</b></li>
        <pre><code class="html">
          &lt;div :class='{danger: isDanger, error: isError}'>&lt;/div>
          &lt;div :class='ClassObj'>&lt;/div>
          &lt;div :class='[isDanger? "danger" : "warning"]'>&lt;/div>
        </code></pre>

        <li>可在 Vue 模板渲染中使用 javascript 表达式（单个表达式）</li>
        <pre><code class="html">
          &lt;div :title='(new Date()).getYear() > 1970 ? "20th" : "21th"'>&lt;/div>
          // 注意，单个表达式意味着，不能使用语句、条件、switch、等，下面都是反例
          &lt;div :title='if (Date > 1970) {}'>&lt;/div>
          &lt;div :title='var Date = 1970'>&lt;/div>
        </code></pre>

        <li>使用 <code>v-for</code> 渲染列表（使用track-by="$index"高效复杂 dom 元素，重用、重排）</li>
        <pre><code class="html">
          // 注意，基于 vue 的响应式原理，在对数组/对象操作发生变化之后，Dom 会实时高效地进行列表的更新渲染
          // 以下方法都可引起响应：push/pop/shift/unshift/splice/sort/reverse
          // 然而，将一个数据中的对象替换、及修改数组长度时，是无法引起变化的。应采用以下方法：
          // Vue.set(items, indexOfItem, newItem)
          // item.splice(newLength)
          &lt;li v-for='(item, $index) in list' track-by="$index">{&shy;{item.index + '--' + item.name}}&lt;/li> // v1.x
          &lt;li v-for='(item, $index) in list' :key="$index">{&shy;{item.index + '--' + item.name}}&lt;/li> // v2.x
          &lt;li v-for='item in list' :key="item.index">{&shy;{item.index + '--' + item.name}}&lt;/li> // v2.x
        </code></pre>
        <li><a href="https://m.taobao.com" target="_blank">重绘与重排（回流）淘宝</a></li>
        <li><a href="http://www.zhangxinxu.com/wordpress/2010/01/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%EF%BC%9Acss%E6%80%A7%E8%83%BD%E8%AE%A9javascript%E5%8F%98%E6%85%A2%EF%BC%9F/" target="_blank">重绘与重排（回流）张鑫旭</a></li>
        <li><a href="https://s.phone580.com/pay/mobile/21cn/index.html#/choose-phone" target="_blank">手机回收2.0</a></li>
      </ul>
      <pre><code class="javascript">
        var app = new Vue({
          el: '#app',
          data: {
            msg: 'hello world',
            title: 'Google',
            list: [{index: 1, name: 'Google'}, {index: 2, name: 'Fackbook'}],
            showSun: true,
            showMoon: false,
            inputVal: ''
          },
          methods: {
            onClick() {
                this.msg = 'hello Vue'
            }
          }
        })
      </code></pre>
    </div>

    <h4>表单</h4>
    <div class="para">
      v-model 在与表单的控件上实现双向绑定，能实现更多的业务上的操作
      <ul>
        <li>复选框</li>
        <pre><code class="html">
          &lt;input type="checkbox" id="checkbox" v-model="checked">
          &lt;label for="checkbox">{{ checked }}&lt;/label>
        </code></pre>
        <div class="example">
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">{{ checked }}</label>
        </div>

        <li><b>多个复选框</b></li>
        <pre><code class="html">
          &lt;input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          &lt;label for="jack">Jack&lt;/label>
          &lt;input type="checkbox" id="john" value="John" v-model="checkedNames">
          &lt;label for="john">John&lt;/label>
        </code></pre>
        <div class="example">
          {{ checkedNames }}
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
        </div>

        <li>单选按钮</li>
        <pre><code class="html">
          &lt;input type="radio" id="one" value="One" v-model="picked">
          &lt;label for="one">One&lt;/label>
          &lt;input type="radio" id="two" value="Two" v-model="picked">
          &lt;label for="two">Two&lt;/label>
        </code></pre>
        <div class="example">
          <input type="radio" id="one" value="One" v-model="picked">
          <label for="one">One</label>
          <br>
          <input type="radio" id="two" value="Two" v-model="picked">
          <label for="two">Two</label>
          <br>
          <span>Picked: {{ picked }}</span>
        </div>

        <li>选择列表(可使用 multiple ) <a href="">收银台项目</a></li>
        <pre><code class="html">
          &lt;select v-model="selected">
            &lt;option disabled value="">请选择&lt;/option>
            &lt;option>A&lt;/option>
            &lt;option>B&lt;/option>
            &lt;option>C&lt;/option>
          &lt;/select>
          &lt;span>Selected: {{ selected }}&lt;/span>
        </code></pre>
        <div class="example">
          <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>
        </div>

        <li><code>.lazy/.number/.trim</code>额外选项</li>
        <pre><code class="html">
          &lt;!-- 在 "change" 而不是 "input" 事件中更新 -->
          &lt;input v-model.lazy="msg" >
          &lt;input v-model.number="age" type="number">
          &lt;input v-model.trim="msg">
        </code></pre>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '',
        picked: '',
        checked: false,
        checkedNames: []
      }
    },
    mounted () {
      console.log(window.m = this)
    },
    methods: {
      onDivClick () {
        window.alert('i am div')
      },
      onBtnClick () {
        window.alert('i am btn')
      }
    }
  }

</script>
