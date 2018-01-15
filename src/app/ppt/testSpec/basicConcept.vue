<template>
  <div class="vux2x-document">
    <h2>Why/How/TDD/BDD</h2>

    <h4>Why</h4>
    <div class="para">
      <ul>
        <li>潮流: 在面向对象的编程语言中，自动化测试/单元测试由来已久。c#/Java/php 都有其发展相关的测试语言框架。<code>javascript其实也有，只不过是受限于语言本身特性（脚本、非编译）一直无法流行起来</code></li>
        <li>解决 <code>缺陷回归</code> 的问题: <code>一些过去修复好的 bug 又出现的 bug</code></li>
        <li>BS架构的灵活发布，对测试提出更多的要求，需要有一个持续性的、可创造性的反馈机制: <code>灵活发布、多次发布，更要多次测试</code></li>
        <li>重构会对项目造成影响，同时也对测试代码提出挑战: <code>不停地重构，不可能进行重复的人工测试</code></li>
        <li>JavaScript 是一门动态语言，不像其他编译语言，不能对变量不存在、函数不存在、对象不存在等错误进行提前预知，因为，测试是必要的，有用的</li>
      </ul>
    </div>

    <h4>How</h4>
    <div class="para">
      <ul>
        <li>对整个系统进行拆分，做单元测试，用不同的配置，不同场景对一个单元做多次测试验证。<code>同一单元测试入参不同环境</code></li>
        <li>有必要对一个系统中，一个重要的、开销更大的功能进行独立测试。<code>重点测试</code></li>
        <li>系统的设计需要更多的关注点分享及单一责任原则</li>
        <li>自动测试，能脱离浏览器，能模拟浏览器做测试</li>
      </ul>
    </div>

    <h4>TDD</h4>
    <div class="para">
      <blockquote>
        Test Driven Development 测试驱动开发，敏捷开发最佳实践之一。
        <li>敏捷开发中的一项核心实践和技术，**一种设计方法论**。</li>
        <li>原理: 在开发功能代码之前，先编写单元测试用例代码，测试代码确定需要编写什么产品代码（测试驱动开发）。</li>
        <li>测试驱动开发并不只是单纯的测试工作，而是把需求分析，设计，质量控制量化的过程。</li>
        <li>TDD的重要目的不仅仅是测试软件，测试工作保证代码质量仅仅是其中一部分，而且是在开发过程中帮助客户和程序员去除模棱两可的需求。TDD首先考虑使用需求（对象、功能、过程、接口等），主要是编写测试用例框架对功能的过程和接口进行设计，而测试框架可以持续进行验证。</li>
      </blockquote>
    </div>

    <h4>BDD</h4>
    <div class="para">
      <blockquote>
        Behavior Driven Development 行为驱动开发
        <ul>
          <li>BDD是第二代的、由外及内的、基于拉(pull)的、多方利益相关者的(stakeholder)、多种可扩展的、高自动化的敏捷方法。</li>
          <li>它描述了一个交互循环，可以具有带有良好定义的输出（即工作中交付的结果）：已测试过的软件</li>
          <li>更关注需求，而非技术</li>
        </ul>


      </blockquote>
    </div>

    <h2>Key Words</h2>
    <h4>describe/it/except</h4>
    <div class="para">
      <ul>
        <li><code>describe</code> 称为“测试套件” <code>test suite</code>，表示一组测试，可多个嵌套</li>
        <li><code>it</code> 称为“测试用例” <code>test case</code>，表示一个单独测试，包含在 test suite 里面；</li>
        <li><code>except</code> 为“断言”，即判断结果是否与预期一致；</li>
        <li>一个 <code>test suite</code>可包含多个 <code>test suite</code>，或多个 <code>test case</code>；一个 <code>test case </code>应包含一个或多个 <code>expert</code> 断言；</li>
      </ul>
      <pre><code class="javascript">
        describe('', () => {
          it('', function () {
            expect('').to.be.equal('')
          })
        })
      </code></pre>
    </div>

    <h4>Hook Function</h4>
    <div class="para">
      <ul>
        <li><code>before</code> 在所有测试用例执行之前执行</li>
        <li><code>after</code> 在所有测试用例执行之后执行</li>
        <li><code>beforeEach</code> 在每一个测试用例执行之前都执行</li>
        <li><code>afterEach</code> 在每一个测试用例执行之后都执行</li>
      </ul>
      <pre><code class="javascript">
        describe('hooks', function() {
          before(function() {
          });

          after(function() {
          });

          beforeEach(function() {
          });

          afterEach(function() {
          });
        });
      </code></pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ppt',
    data () {
      return {
        list: [
          {title: 'Vue 总结', url: 'vue-summary'},
          {title: 'Vue 总结', url: 'vue-summary'},
          {title: 'Vue 总结', url: 'vue-summary'}
        ]
      }
    }
  }
</script>

<style lang="less">
</style>
