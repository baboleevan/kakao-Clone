(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,t,e){n.exports=e(37)},37:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(4),o=e.n(i),c=e(9),u=e(10),l=e(14),d=e(11),h=e(13),s=e(12),p=e(19),f=e(25),b=e(6),g={isChat:!0},m=Object(b.b)({chat:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CHAT":return[].concat(Object(f.a)(n),[{state:t.data}]);default:return n}},chatOnOff:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;switch((arguments.length>1?arguments[1]:void 0).type){case"CHAT_ON":return Object(p.a)({},n,{isChat:!0});case"CHAT_OFF":return Object(p.a)({},n,{isChat:!1});default:return n}}}),O=m,v=e(7),x=e(1),j=e(2);function C(){var n=Object(x.a)(["\n  padding: 10px;\n  width: max-content;\n  border: 1px solid black;\n  border-radius: 35px;\n  border-bottom-left-radius: 0px;\n  justify-self: start;\n  margin-left: -30px;\n  background-color: #f5f6fa;\n"]);return C=function(){return n},n}function y(){var n=Object(x.a)(["\n  padding: 10px;\n  width: max-content;\n  border: 1px solid black;\n  border-radius: 35px;\n  border-bottom-right-radius: 0px;\n  justify-self: end;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  background-color: #f9ca24;\n"]);return y=function(){return n},n}function w(){var n=Object(x.a)(["\n  display: grid;\n  justify-self: start;\n  margin-left: -20px;\n  margin-bottom: -1px;\n  font-weight: 800;\n"]);return w=function(){return n},n}function E(){var n=Object(x.a)(["\n  display: grid;\n  justify-self: end;\n  margin-right: 10px;\n  margin-bottom: -1px;\n  font-weight: 800;\n"]);return E=function(){return n},n}var k=j.a.p(E()),A=j.a.p(w()),D=j.a.li(y()),S=j.a.li(C()),H=function(n){var t=n.state,e=n.date;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,"to"),r.a.createElement(D,null,"\ub0b4\uc6a9: ",t,r.a.createElement("br",null),"\ub0a0\uc9dc: ",e),r.a.createElement(A,null,"From"),r.a.createElement(S,null,"\ub0b4\uc6a9: ",t,r.a.createElement("br",null),"\ub0a0\uc9dc: ",e))};function T(){var n=Object(x.a)(["\n  width: 100%;\n  height: 20px;\n  background-color: gray;\n  color: white;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return T=function(){return n},n}function F(){var n=Object(x.a)(["\n  width: 15%;\n  height: 30px;\n  border: 1px solid red;\n  background-color: #fbc531;\n"]);return F=function(){return n},n}function _(){var n=Object(x.a)(["\n  width: 70%;\n  height: 25px;\n  border: 1px solid blue;\n  margin-right: 10px;\n"]);return _=function(){return n},n}function N(){var n=Object(x.a)(["\n  width: 100%;\n  display: flex\n  justify-content:center;\n"]);return N=function(){return n},n}function I(){var n=Object(x.a)(["\n  width: 100%;\n  height: 5vh;\n  border: 1px solid black;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return I=function(){return n},n}function J(){var n=Object(x.a)(["\n  list-style: none;\n  display: grid;\n"]);return J=function(){return n},n}function q(){var n=Object(x.a)(["\n  width: 100%;\n  height: 83vh;\n  border: 1px solid black;\n  margin-top: 10px;\n  overflow: scroll;\n  background-color: #7ed6df;\n"]);return q=function(){return n},n}function z(){var n=Object(x.a)(["\n  width: 75px;\n  height: 30px;\n  background-color: #3498db;\n  text-align: center;\n  justify-self: start;\n  margin-left: 15px;\n  margin-top: -30px;\n"]);return z=function(){return n},n}function B(){var n=Object(x.a)(["\n  width: 75px;\n  height: 30px;\n  background-color: #e74c3c;\n  text-align: center;\n  justify-self: start;\n  margin-left: 15px;\n  margin-top: -30px;\n"]);return B=function(){return n},n}function M(){var n=Object(x.a)(["\n  width: 100%;\n  height: 5vh;\n  background-color: #7ed6df;\n  border-radius: 5px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  padding-top: 10px;\n"]);return M=function(){return n},n}function G(){var n=Object(x.a)(["\n  margin-top: -10px;\n  margin-left: -50px;\n"]);return G=function(){return n},n}function K(){var n=Object(x.a)(["\n  width: 100%;\n"]);return K=function(){return n},n}var L=j.a.header(K()),P=j.a.h1(G()),Q=j.a.div(M()),R=j.a.button(B()),U=j.a.button(z()),V=j.a.div(q()),W=j.a.ul(J()),X=j.a.div(I()),Y=j.a.form(N()),Z=j.a.input(_()),$=j.a.button(F()),nn=j.a.div(T()),tn=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this,n))).handleChange=e.handleChange.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e.state={input:""},e}return Object(h.a)(t,n),Object(u.a)(t,[{key:"handleChange",value:function(n){n.preventDefault(),this.setState({input:n.target.value})}},{key:"handleSubmit",value:function(n){var t=document.querySelector("Input");n.preventDefault(),""!==this.state.input&&(this.props.onSend(this.state.input),this.setState({input:""}),t.value="")}},{key:"render",value:function(){var n=this.props.data,t=(new Date).getMonth(),e=(new Date).getDate(),a="".concat(t,"\uc6d4").concat(e,"\uc77c");console.log(Date);var i=n.map(function(n,t){return r.a.createElement(H,Object.assign({key:t,date:a},n))});return n.length>0&&console.log(n),r.a.createElement(L,null,r.a.createElement(Q,null,this.props.isChat?r.a.createElement(U,{onClick:this.props.onChatOff},"Chat Off"):r.a.createElement(R,{onClick:this.props.onChatOn},"Chat On"),r.a.createElement(P,null,"Hello Talk")),r.a.createElement(V,null,r.a.createElement(W,null,i)),r.a.createElement(X,null,this.props.isChat?r.a.createElement(Y,{onSubmit:this.handleSubmit},r.a.createElement(Z,{type:"text",name:"message",placeholder:"\ub300\ud654 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:this.handleChange}),r.a.createElement($,{onClick:this.handleSubmit},"\uc804\uc1a1")):r.a.createElement(nn,null,"\ucc44\ud305 \uc785\ub825 \ubd88\uac00 \uc0c1\ud0dc\uc785\ub2c8\ub2e4")))}}]),t}(a.Component),en=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this,n))).state={},e}return Object(h.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(tn,{isChat:this.props.isChat,data:this.props.chat,date:this.props.date,onChatOn:this.props.handleChatOn,onChatOff:this.props.handleChatOff,onSend:this.props.handleAddChat}))}}]),t}(a.Component),an=Object(s.b)(function(n){return{isChat:n.chatOnOff.isChat,chat:n.chat,date:Date.now()}},function(n){return{handleChatOff:function(){n({type:"CHAT_OFF"})},handleChatOn:function(){n({type:"CHAT_ON"})},handleAddChat:function(t){n(function(n){return{type:"ADD_CHAT",data:n}}(t))}}})(en),rn=Object(b.c)(O);o.a.render(r.a.createElement(s.a,{store:rn},r.a.createElement(an,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c98d64af.chunk.js.map