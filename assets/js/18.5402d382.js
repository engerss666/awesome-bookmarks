(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{179:function(e,t,n){"use strict";n.r(t);var i=n(0),s=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("之前有一个人问我，为什么他监听了一个 div 的 keydown 事件，为什么没有用？\n我看了一下代码发现的确没有写错？但为什么就不触发呢？")]),e._v(" "),n("p",[e._v("后来查阅了一下文档")]),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("发现只有能被 focus 的元素才能出发键盘事件，所以 div 也就不能触发 keydown 事件了。")]),e._v(" "),n("p",[e._v("那怎么才能让 div 支持呢？")]),e._v(" "),n("p",[e._v("答案是 "),n("code",[e._v("tabindex")]),e._v(" "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex",target:"_blank",rel:"noopener noreferrer"}},[e._v("mdn"),n("OutboundLink")],1),e._v("。它表示元素是可聚焦的，并且可以通过键盘导航来访问到该元素。")]),e._v(" "),e._m(3)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"div-如何监听-keydown-事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#div-如何监听-keydown-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" div 如何监听 keydown 事件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("2018-09-10")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Focused element processing the key event, root element if no suitable input element focused")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("这样一来我们就能愉快的使用"),t("code",[this._v("keydown")]),this._v("事件了。")])}],!1,null,null,null);s.options.__file="div-keydown.md";t.default=s.exports}}]);