import './main.css'
import './main.less'

import App from './App.vue'
import Vue from 'vue'

import codeImg from './code.png'

const img = new Image()

img.src = codeImg

document.body.append(img)

img.addEventListener('click', () => {
  alert('ci 测试11234')
})

// import foot from './foot.html'

// document.write(foot)

// import markdown from './markdown.md'
// console.log('1', abc);

// console.log('hello, 1233')
// console.log('definePlugin', BASE_TEST) // eslint-disable-line

new Vue({
  render: h => h(App)
}).$mount('#app')
