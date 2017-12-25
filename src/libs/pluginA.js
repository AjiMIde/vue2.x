        export default {
          install (Vue) {
            Vue.prototype.hello = function () {
              window.alert('hello world')
            }
          }
        }
