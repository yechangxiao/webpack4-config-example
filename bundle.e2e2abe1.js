!function(n){function e(e){for(var t,u,b=e[0],r=e[1],a=e[2],p=0,m=[];p<b.length;p++)u=b[p],Object.prototype.hasOwnProperty.call(l,u)&&l[u]&&m.push(l[u][0]),l[u]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t]);for(o&&o(e);m.length;)m.shift()();return i.push.apply(i,a||[]),c()}function c(){for(var n,e=0;e<i.length;e++){for(var c=i[e],t=!0,b=1;b<c.length;b++){var r=c[b];0!==l[r]&&(t=!1)}t&&(i.splice(e--,1),n=u(u.s=c[0]))}return n}var t={},l={0:0},i=[];function u(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.m=n,u.c=t,u.d=function(n,e,c){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)u.d(c,t,function(e){return n[e]}.bind(null,t));return c},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="";var b=window.webpackJsonp=window.webpackJsonp||[],r=b.push.bind(b);b.push=e,b=b.slice();for(var a=0;a<b.length;a++)e(b[a]);var o=r;i.push([7,1]),c()}({6:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "img/code.9e4bc9.png";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb2RlLnBuZz9kOWMzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jb2RlLjllNGJjOS5wbmdcIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n')},7:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/main.css\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./src/main.less\n// extracted by mini-css-extract-plugin\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&\nvar Appvue_type_template_id_7ba5bd90_render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"app\" })\n}\nvar staticRenderFns = []\nAppvue_type_template_id_7ba5bd90_render._withStripped = true\n\n\n// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=7ba5bd90&\n\n// CONCATENATED MODULE: ./replaceLoader.js!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n/* harmony default export */ var Appvue_type_script_lang_js_ = ({\n  name: 'app'\n});\n// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&\n /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./src/App.vue\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer[\"a\" /* default */])(\n  src_Appvue_type_script_lang_js_,\n  Appvue_type_template_id_7ba5bd90_render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ var App = (component.exports);\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js\nvar vue_runtime_esm = __webpack_require__(1);\n\n// EXTERNAL MODULE: ./src/code.png\nvar code = __webpack_require__(6);\nvar code_default = /*#__PURE__*/__webpack_require__.n(code);\n\n// CONCATENATED MODULE: ./src/main.js\n\n\n\n\n\nvar img = new Image();\nimg.src = code_default.a;\ndocument.body.append(img);\nimg.addEventListener('click', function () {\n  alert('world world');\n}); // import foot from './foot.html'\n// document.write(foot)\n// import markdown from './markdown.md'\n// console.log('1', abc);\n// console.log('hello, 1233')\n// console.log('definePlugin', BASE_TEST) // eslint-disable-line\n\nnew vue_runtime_esm[\"a\" /* default */]({\n  render: function render(h) {\n    return h(App);\n  }\n}).$mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovLy8uL3NyYy9tYWluLmxlc3M/ODRjZCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT82NDdhIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlP2E3NjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/Mzc4YiIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT9kZjdjIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU4OWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcHBcIiB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vXG4vL1xuLy9cbi8vXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHAnXG59OyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vcmVwbGFjZUxvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL3JlcGxhY2VMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ydW5uZXIvd29yay93ZWJwYWNrNC1jb25maWctZXhhbXBsZS93ZWJwYWNrNC1jb25maWctZXhhbXBsZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3YmE1YmQ5MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YmE1YmQ5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YmE1YmQ5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YmE1YmQ5MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgJy4vbWFpbi5jc3MnO1xuaW1wb3J0ICcuL21haW4ubGVzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgY29kZUltZyBmcm9tICcuL2NvZGUucG5nJztcbnZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbmltZy5zcmMgPSBjb2RlSW1nO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQoaW1nKTtcbmltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgYWxlcnQoJ3dvcmxkIHdvcmxkJyk7XG59KTsgLy8gaW1wb3J0IGZvb3QgZnJvbSAnLi9mb290Lmh0bWwnXG4vLyBkb2N1bWVudC53cml0ZShmb290KVxuLy8gaW1wb3J0IG1hcmtkb3duIGZyb20gJy4vbWFya2Rvd24ubWQnXG4vLyBjb25zb2xlLmxvZygnMScsIGFiYyk7XG4vLyBjb25zb2xlLmxvZygnaGVsbG8sIDEyMzMnKVxuLy8gY29uc29sZS5sb2coJ2RlZmluZVBsdWdpbicsIEJBU0VfVEVTVCkgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5uZXcgVnVlKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoaCkge1xuICAgIHJldHVybiBoKEFwcCk7XG4gIH1cbn0pLiRtb3VudCgnI2FwcCcpOyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7QUNBQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n")}});