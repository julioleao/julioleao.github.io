(this["webpackJsonpweb2-project2"]=this["webpackJsonpweb2-project2"]||[]).push([[0],{37:function(e,a,t){e.exports=t.p+"static/media/logo.0bcd48e4.png"},41:function(e,a,t){e.exports=t(72)},50:function(e,a,t){},52:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),l=t(17),o=t(11),s=t(13),m=t(15),i=t(10),u=t(9),d={isAuthenticated:localStorage.getItem("token")},p=Object(m.b)("LOGIN"),b=Object(m.b)("LOGOUT"),v=Object(m.c)(d,(n={},Object(i.a)(n,p.type,(function(e,a){return Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!0})})),Object(i.a)(n,b.type,(function(e,a){return Object(u.a)(Object(u.a)({},e),{},{isAuthenticated:!1})})),n)),f=Object(m.a)({reducer:{auth:v}});t(50);function E(){var e=Object(s.c)((function(e){return e.auth})).isAuthenticated,a=Object(s.b)();return r.a.createElement("nav",{className:"l-header navbar navbar-expand-sm navbar-dark bg-primary"},r.a.createElement(o.b,{to:"/list",activeClassName:"active",className:"navbar-brand"},"Pok\xe9mon TCG"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor01"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/list",activeClassName:"active",className:"nav-link"},"Listar")))),r.a.createElement("ul",{className:"navbar-nav ml-md-auto"},r.a.createElement(o.b,{to:"/login",activeClassName:"active",onClick:function(){e&&a((localStorage.removeItem("token"),b()))},className:"nav-item mt-2 mr-3"},r.a.createElement("button",{className:"btn btn-outline-secondary mr-1 mb-2",type:"submit"},"Login/Logout"))),r.a.createElement("ul",{className:"navbar-nav ml-md-auto"},r.a.createElement(o.b,{to:"/register",activeClassName:"active",className:"nav-item mt-2 mr-3"},r.a.createElement("button",{className:"btn btn-outline-secondary mr-2 mb-2",type:"submit"},"Registrar-se"))))}function h(e){var a=e.children;return r.a.createElement("main",{className:"l-content container-fluid"},a)}var g=function(){return r.a.createElement("footer",{className:"l-footer"},"Pokemon TCG \xa9 ",(new Date).getFullYear())},N=(t(52),function(e){var a=e.children;return r.a.createElement(c.Fragment,null,r.a.createElement(E,null),r.a.createElement(h,null,a),r.a.createElement(g,null))}),O=t(39),j=t(2),w=t(35),y=t(36),k=t(40),C=t(38),S=t(12),x=t.n(S);t(70);function q(e){var a=e.cards;return r.a.createElement("div",{className:"col-sm-3 mt-3 mb-3"},r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-footer"},r.a.createElement("img",{src:a.imageUrl,className:"card-img-top",alt:a.name}),r.a.createElement("div",{className:"card-body mt-3"},r.a.createElement("h5",{className:"card-title"},a.name)))))}var I=t(37),L=t.n(I),A=(t(71),function(e){Object(k.a)(t,e);var a=Object(C.a)(t);function t(){var e;Object(w.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={cards:[],query:"",loading:!1,message:"",cancel:""},e.fetchSearchResults=function(a){var t="https://api.pokemontcg.io/v1/cards?name=".concat(a);e.cancel&&e.cancel.cancel(),e.cancel=x.a.CancelToken.source(),x.a.get(t,{cancelToken:e.cancel.token}).then((function(a){e.setState({cards:a.data.cards})})).catch((function(a){(x.a.isCancel(a)||a)&&e.setState({loading:!1,message:"Falha ao encontrar o valor digitado"})}))},e.handleOnInputChange=function(a){var t=a.target.value;e.setState({query:t,loading:!0,message:""},(function(){e.fetchSearchResults(t)}))},e}return Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"d-flex justify-content-center mb-5 mt-5"},r.a.createElement("img",{src:L.a,alt:"cur",height:350,width:700})),r.a.createElement("div",{className:"input-group md-form form-sm form-2 pl-0"},r.a.createElement("input",{className:"form-control my-0 py-1 amber-border",type:"text",placeholder:"Search","aria-label":"Search",onChange:this.handleOnInputChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text amber lighten-3",id:"basic-text1"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"})))),r.a.createElement("div",{className:"row"},this.state.cards.map((function(e,a){return r.a.createElement(q,{key:a,cards:e})}))))}}]),t}(c.Component)),R=t(19);function T(){var e=Object(c.useState)({email:"",password:""}),a=Object(R.a)(e,2),t=a[0],n=a[1];function l(e){var a=e.target,c=a.name,r=a.value;n(Object(u.a)(Object(u.a)({},t),{},Object(i.a)({},c,r)))}return r.a.createElement("div",null,r.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),x.a.post("https://reqres.in/api/login",{email:t.email,password:t.password}).then((function(e){console.log(e.data),alert("Login efetuado com sucesso!!"),localStorage.setItem("token",e.data.token),window.location.pathname="/list"})).catch((function(){alert("Usu\xe1rio ou senha Inv\xe1lidos")})),console.log(t),n({email:"",password:""})},style:{width:350,margin:"40px auto"}},r.a.createElement("h2",{className:"text-center"},"Login"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{placeholder:"E-mail",onChange:l,name:"email",className:"form-control",value:t.email,required:!0}),r.a.createElement("div",{className:"invalid-feedback"},"Email inv\xe1lido"),r.a.createElement("label",null,"eve.holt@reqres.in")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{placeholder:"Senha",onChange:l,name:"password",className:"form-control",type:"password",value:t.password}),r.a.createElement("label",null,"cityslicka")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Entrar"))))}function G(){var e=Object(c.useState)({email:"",password:""}),a=Object(R.a)(e,2),t=a[0],n=a[1];function l(e){var a=e.target,c=a.name,r=a.value;n(Object(u.a)(Object(u.a)({},t),{},Object(i.a)({},c,r)))}return r.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),x.a.post("https://reqres.in/api/register",{email:t.email,password:t.password}).then((function(e){console.log(e.data),alert("Registrado com sucesso!!"),window.location.pathname="/login"})).catch((function(){alert("Verifique os campos digitados!")})),console.log(t),n({email:"",password:""})},style:{width:350,margin:"40px auto"}},r.a.createElement("h2",{className:"text-center"},"Registrar"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{placeholder:"E-mail",onChange:l,name:"email",className:"form-control",value:t.email,required:!0}),r.a.createElement("div",{className:"invalid-feedback"},"Email inv\xe1lido")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{placeholder:"Senha",onChange:l,name:"password",className:"form-control",type:"password",value:t.password})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Registrar-se")))}function D(e){var a=e.component,t=Object(O.a)(e,["component"]),n=Object(s.c)((function(e){return e.auth})).isAuthenticated;return r.a.createElement(j.b,Object.assign({},t,{render:function(e){return n?r.a.createElement(a,e):r.a.createElement(j.a,{to:{pathname:"/",state:{from:e.location}}})}}))}var F=function(){return r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/login",component:T}),r.a.createElement(j.b,{path:"/register",component:G}),r.a.createElement(D,{path:"/list",component:A}),r.a.createElement(j.a,{path:"/",to:"/login"}))};function U(){return r.a.createElement(N,null,r.a.createElement(F,null))}Object(l.render)(r.a.createElement(s.a,{store:f},r.a.createElement(o.a,null,r.a.createElement(U,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6c6d770f.chunk.js.map