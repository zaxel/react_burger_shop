(this.webpackJsonpburger_store=this.webpackJsonpburger_store||[]).push([[0],{36:function(e,t,a){e.exports=a(54)},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(19),o=a(32),c=a(5),i=a(25),l=a.n(i),u=a(30),m=a(21),d=a(14),p=a(6),h=a(7),g=a(9),b=a(8),v=function(e){return n.a.createElement("div",{className:"menu__header menu-header"},n.a.createElement("div",{className:"menu-header__rating header-rating"},n.a.createElement("div",{className:"header-rating__text"},"Rating: "),n.a.createElement("div",{className:"header-rating__stars"}," \u2605\u2605\u2605\u2605\u2605 ")),n.a.createElement("span",{className:"menu-header__line"}),n.a.createElement("h1",{className:"menu-header__slogan"},e.title),n.a.createElement("h2",{className:"menu-header__descr"}," Hot ",n.a.createElement("span",{className:"menu-header__highlight"},"burgers")," and quick delivery"))},_=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t="available"===this.props.burger.status;return n.a.createElement("div",{className:"burger__container"},n.a.createElement("div",{className:"burger__pic-cont"},n.a.createElement("img",{src:this.props.burger.image,alt:"Burger"})),n.a.createElement("div",{className:"burger__descr-cont descr-cont"},n.a.createElement("div",{className:"descr-cont__top-cont"},n.a.createElement("div",{className:"descr-cont__title-cont"},n.a.createElement("div",{className:"descr-cont__title"},this.props.burger.name),n.a.createElement("div",{className:"descr-cont__price"},"\xa3 ",parseFloat(this.props.burger.price).toFixed(2))),n.a.createElement("div",{className:"descr-cont__descr"},this.props.burger.descr)),n.a.createElement("div",{className:"descr-cont__button-cont"},n.a.createElement("button",{onClick:function(){return e.props.addOrder(e.props.index)},className:"select-button descr-cont__bottom ".concat(!t&&"disabled")},"Order Now",n.a.createElement("span",null,"Order Now"))),n.a.createElement("div",{className:"descr-cont__banner ".concat(t&&"disabled")},"out of stock")))}}]),a}(n.a.Component),f=a(56),E=a(55),N=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"burgers__menu menu"},n.a.createElement(v,this.props),n.a.createElement(f.a,{component:"ul",className:"burgers__list"},Object.keys(this.props.burgers).map((function(t){return n.a.createElement(E.a,{classNames:"burgers__list",key:t,timeout:{enter:800,exit:800}},n.a.createElement("li",{className:"burger",key:t},n.a.createElement(_,{burger:e.props.burgers[t],index:t,addOrder:e.props.addOrder})))}))))}}]),a}(n.a.Component),O=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.total,t=50,a=500-e,r=e+(t=e<500?t:10);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{className:"orders__delivery"},"Delivery: \xa3 ",t.toFixed(2)),a>0&&n.a.createElement("div",{className:"orders__del-descr"},"spend another \xa3 ",a.toFixed(2)," to get discounted delivery for only \xa3 ",10..toFixed(2)),n.a.createElement("h3",{className:"orders__total"},"Total: \xa3 ",r.toFixed(2)))}}]),a}(n.a.Component),j=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).setMoveUpCss=function(t){e.myClass=t},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.burgers,a=this.props.order,r=this.props.scrollingDirection.isScrolOrdrNumUp,s=Object.keys(a);if(0===Object.entries(t).length)return n.a.createElement("div",{className:"burgers__orders orders"},n.a.createElement("h2",{className:"orders__tittle"},"Your Order "));var o=function(e){return"available"===t[e].status},c=s.reduce((function(e,r){return o(r)?e+t[r].price*a[r].amount:e}),0),i=function(e){return 1===a[e].amount&&r?"orders__number":a[e].className||"orders__number"},l=function(e){var t;return 1===a[e].amount&&r?"none":(null===(t=a[e])||void 0===t?void 0:t.transitionClass)?"orders__transition-absolute "+a[e].transitionClass:"none"};return n.a.createElement("div",{className:"burgers__orders orders"},n.a.createElement("div",{className:"orders__container"},n.a.createElement("h2",{className:"orders__tittle"},"Your Order"),!s.length&&n.a.createElement("h3",{className:"orders__list-noitem"},"Please make your order"),n.a.createElement(f.a,{component:"ul",className:"orders__list-cont"},s.map((function(s){return n.a.createElement(E.a,{classNames:"orders__list-cont",key:s,timeout:{enter:800,exit:800}},n.a.createElement("li",{key:s,className:"orders__list-item ".concat(o(s)?"":"orders__list-outofstock")},!o(s)&&n.a.createElement("h4",{className:"orders__outofstock-warning"},"ouof stock temporary"),n.a.createElement("div",{className:"orders__title-cont"},n.a.createElement("div",{className:"orders__list-info"},n.a.createElement("span",{className:i(s)},a[s].amount),n.a.createElement("span",{className:l(s)},r?a[s].amount-1:a[s].amount+1),n.a.createElement("span",null," x ",t[s].name," \xa0\xa0\xa0\xa3",parseFloat(t[s].price).toFixed(2))),n.a.createElement("button",{onClick:function(){e.props.removeOrder(s),e.setMoveUpCss()},className:"orders__list-button   select-button"},"X",n.a.createElement("span",null,"X")))))}))),n.a.createElement("div",{className:"orders__total-cont"},c>0&&n.a.createElement(O,{total:c}))))}}]),a}(n.a.Component),y=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).titleRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descrRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createBurger=function(t){t.preventDefault();var a={name:e.titleRef.current.value||"Burger",price:parseFloat(e.priceRef.current.value||100),status:e.statusRef.current.value,descr:e.descrRef.current.value||"This is the best burger in whole universe.",image:e.imageRef.current.value||"../images/burger6.jpg"};e.props.addBurger(a),t.currentTarget.reset()},e}return Object(h.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.createBurger,className:"editor__form editor-form"},n.a.createElement("div",{className:"editor-form__main"},n.a.createElement("input",{ref:this.titleRef,type:"text",name:"burger_title",placeholder:"Title"}),n.a.createElement("input",{ref:this.priceRef,type:"number",step:".01",name:"burger_price",placeholder:"Price"})),n.a.createElement("select",{ref:this.statusRef,name:"burger_status"},n.a.createElement("option",{defaultValue:"status"},"available"),n.a.createElement("option",{value:"out_of_stock"},"Out of stock")),n.a.createElement("textarea",{ref:this.descrRef,name:"burger_descr",placeholder:"Enter burger description",rows:"3"}),n.a.createElement("input",{ref:this.imageRef,type:"text",name:"burger_img",placeholder:"Image"}),n.a.createElement("button",{className:"select-button"},"Add To Menu",n.a.createElement("span",null,"Add To Menu")))}}]),a}(n.a.Component),k=a(15),S=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={user:"",email:"",photo:""},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.default.auth().onAuthStateChanged((function(t){t&&e.setState({user:t.displayName,email:t.email,photo:t.photoURL})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"editor__userprofile userprofile"},n.a.createElement("div",{className:"userprofile__container"},n.a.createElement("div",{className:"userprofile__info-cont"},n.a.createElement("div",{className:"userprofile__photo"},n.a.createElement("img",{src:this.state.photo||"../../images/user_placeholder.png",alt:"user"})),n.a.createElement("h3",{className:"userprofile__user-name"},this.state.user||"user"),n.a.createElement("h5",{className:"userprofile__user-email"},this.state.email)),n.a.createElement("div",{className:"userprofile__button-cont"},n.a.createElement("button",{onClick:this.props.handleLogout,className:"select-button userprofile__button"},"Logout",n.a.createElement("span",null,"Logout")))))}}]),a}(n.a.Component),C={burger1:{name:"The Impossible Burger",price:160.5,status:"available",descr:"impossible patty, american cheese, pickles, onion, mustard, ketchup. \r\n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit. \r\n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit",image:"../images/burger1.jpg"},burger2:{name:"The Original",price:180,status:"out_of_stock",descr:"american cheese, pickles, onion, mustard, ketchup",image:"../images/burger2.jpg"},burger3:{name:"The Cheesy Chili",price:150.5,status:"available",descr:"homemade chili, melted cheese, BBQ ranch, caramelized onions.\r\n Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore verit",image:"../images/burger3.jpg"},burger4:{name:"The Classic",price:130.5,status:"out_of_stock",descr:"american cheese, pickles, lettuce, tomato, caramelized onions, Burger Shop secret dressing",image:"../images/burger4.jpg"},burger5:{name:"Wine Maker",price:220.5,status:"available",descr:"saint agur blue cheese cream, grilled grapes, white cheddar, and port wine glaze",image:"../images/burger5.jpg"},burger6:{name:"The 3pm",price:200,status:"available",descr:"bacon, crispy onion ring, american cheese, and bbq sauce",image:"../images/burger6.jpg"},burger7:{name:"Toro Bravo",price:140.5,status:"available",descr:"roasted hatch chilies, candied bacon, white cheddar, and habanero aioli",image:"../images/burger7.jpg"},burger8:{name:"Loaded Grill Cheese",price:250,status:"available",descr:"caramelized onions, tomatoes, pickles, avocado, white cheddar and cheese sauce",image:"../images/burger4.jpg"}},w=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).changeHandler=function(t){var a=Object(d.a)({},e.props.burger);a[t.currentTarget.name]=t.currentTarget.value,"price"===t.currentTarget.name&&(a[t.currentTarget.name]=parseFloat(t.currentTarget.value)),e.props.changeBurger(a,e.props.index)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.props.removeBurger(e.props.index)},className:"editor__form editor-form"},n.a.createElement("div",{className:"editor-form__main"},n.a.createElement("input",{onChange:this.changeHandler,type:"text",name:"name",value:this.props.burger.name}),n.a.createElement("input",{onChange:this.changeHandler,type:"number",step:".01",name:"price",value:parseFloat(this.props.burger.price).toFixed(2)})),n.a.createElement("select",{onChange:this.changeHandler,name:"status",value:this.props.burger.status},n.a.createElement("option",{value:"available"},"available"),n.a.createElement("option",{value:"out_of_stock"},"Out of stock")),n.a.createElement("textarea",{onChange:this.changeHandler,name:"descr",rows:"3",value:this.props.burger.descr}),n.a.createElement("input",{onChange:this.changeHandler,type:"text",name:"image",value:this.props.burger.image}),n.a.createElement("button",{className:"select-button"},"remove item",n.a.createElement("span",null,"remove item")))}}]),a}(n.a.Component),B=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"burgers__editor editor"},n.a.createElement(S,{handleLogout:this.props.handleLogout}),n.a.createElement("h2",{className:"editor__tittle"},"Edit Menu"),n.a.createElement(f.a,{component:"div",className:"edtr"},Object.keys(this.props.burgers).map((function(t){return n.a.createElement(E.a,{classNames:"edtr",key:t,timeout:{enter:800,exit:800}},n.a.createElement(w,{key:t,index:t,burger:e.props.burgers[t],changeBurger:e.props.changeBurger,removeBurger:e.props.removeBurger}))})),n.a.createElement(y,this.props)),n.a.createElement("button",{onClick:function(){return e.props.loadSamples(C)},className:"editor__button select-button"},"Load Burgers Samples",n.a.createElement("span",null,"Load Burgers Samples")))}}]),a}(n.a.Component),x=a(31),R=a.n(x),D=(a(45),a(49),k.default.initializeApp({apiKey:"AIzaSyA2GDff-lJpCClsZW61xgycdVXyaZLEvew",authDomain:"hot-burgers-shop.firebaseapp.com",databaseURL:"https://hot-burgers-shop-default-rtdb.europe-west1.firebasedatabase.app",projectId:"hot-burgers-shop",storageBucket:"hot-burgers-shop.appspot.com",messagingSenderId:"139086176407",appId:"1:139086176407:web:d33f76b4e14344ea94c9d2"})),L=R.a.createClass(D.database()),T=function(e){return n.a.createElement("div",{className:"login"},n.a.createElement("h2",{className:"login__title"},"Authorization"),n.a.createElement("p",{className:"login__descr"},"Please log in using one of the following"),n.a.createElement("div",{className:"login__buttons"},n.a.createElement("button",{onClick:function(){e.authenticate("github")},className:"select-button login__button"},"Login with GItHub",n.a.createElement("span",null,"Login with GItHub")),n.a.createElement("button",{onClick:function(){e.authenticate("google")},className:"select-button login__button"},"Login with Google",n.a.createElement("span",null,"Login with Google"))))},I=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={user:""},e.authHandler=function(t){var a=t.user.email;e.setState({user:a})},e.authenticate=function(t){var a=null;"github"===t?a=new k.default.auth.GithubAuthProvider:"google"===t&&(a=new k.default.auth.GoogleAuthProvider),D.auth().signInWithPopup(a).then(e.authHandler)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.default.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){return this.state.user?this.props.children:n.a.createElement(T,{authenticate:this.authenticate})}}]),a}(n.a.Component),A=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={burgers:{},order:{},scrollingDirection:{}},e.setLocalStore=function(){var t=e.props.match.params,a=e.state.order,r=Object.keys(a);r.length||localStorage.setItem(t.restaurantId,{});var n=r.reduce((function(e,t,r){return Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},t,{amount:a[t].amount,className:a[t].className,transitionClass:a[t].transitionClass}))}),{});localStorage.setItem(t.restaurantId,JSON.stringify(n))},e.addBurger=function(t){var a=Object(d.a)({},e.state.burgers);a["burger".concat(Date.now())]=t,e.setState({burgers:a})},e.removeBurger=function(t){var a=Object(d.a)({},e.state.burgers);a[t]=null,e.setState({burgers:a});var r=Object(d.a)({},e.state.order);r[t]&&delete r[t],e.setState({order:r})},e.changeBurger=function(t,a){var r=Object(d.a)({},e.state.burgers);r[a]=t,e.setState({burgers:r})},e.addOrder=function(t){var a,r=Object(d.a)({},e.state.order),n=(null===(a=r[t])||void 0===a?void 0:a.amount)+1||1;r[t]={amount:n,className:"",transitionClass:""},e.setState({order:r},(function(){e.changeScrollDirection(!0),e.changeNumberClasses(t,!0)})),e.setState({order:r},(function(){e.changeScrollDirection(!0),e.changeNumberClasses(t,!0)}))},e.removeOrder=function(t){var a,r=Object(d.a)({},e.state.order);(null===(a=r[t])||void 0===a?void 0:a.amount)>1?r[t].amount-=1:delete r[t],e.setState({order:r},(function(){e.changeScrollDirection(!1),e.changeNumberClasses(t,!1)}))},e.loadSamples=function(t){e.setState({burgers:t})},e.changeScrollDirection=function(t){var a=Object(d.a)({},e.state.scrollingDirection);a.isScrolOrdrNumUp=t,e.setState({scrollingDirection:a})},e.changeNumberClasses=function(t,a){var r=Object(d.a)({},e.state.order),n=function(e){return new Promise((function(t,a){setTimeout((function(){return t()}),e)}))};r[t]&&(r[t].transitionClass="orders__transition",e.setState({order:r}),a?(r[t].className="orders__number-down",e.setState({order:r}),n(0).then((function(){r[t].transitionClass="orders__transition orders__transition-up",e.setState({order:r})})).then((function(){return n(800)})).then((function(){r[t].transitionClass="none orders__transition",e.setState({order:r})}))):(r[t].className="orders__number-up",e.setState({order:r}),n(0).then((function(){r[t].transitionClass="orders__transition orders__transition-down",e.setState({order:r})})).then((function(){return n(800)})).then((function(){r[t].transitionClass="none orders__transition",e.setState({order:r})}))),n(0).then((function(){r[t].className="orders__number",e.setState({order:r})})))},e.handleLogout=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.default.auth().signOut();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.restaurantId);t&&this.setState({order:JSON.parse(t)}),this.ref=L.syncState("".concat(e.restaurantId,"/burgers"),{context:this,state:"burgers"}),this.setState({scrollingDirection:{isScrolOrdrNumUp:!0}})}},{key:"componentDidUpdate",value:function(){this.setLocalStore()}},{key:"componentWillUnmount",value:function(){L.removeBinding(this.ref)}},{key:"render",value:function(){return n.a.createElement(I,null,n.a.createElement("div",{className:"burgers"},n.a.createElement(N,{title:"Hot Burgers Best",burgers:this.state.burgers,addOrder:this.addOrder}),n.a.createElement(j,{burgers:this.state.burgers,order:this.state.order,scrollingDirection:this.state.scrollingDirection,removeOrder:this.removeOrder}),n.a.createElement(B,{addBurger:this.addBurger,loadSamples:this.loadSamples,burgers:this.state.burgers,changeBurger:this.changeBurger,removeBurger:this.removeBurger,handleLogout:this.handleLogout})))}}]),a}(n.a.Component),H=a(22),F=[{title:"Hot Burger Opernyi Teatr",url:"hotburgerteatr-lviv-ua",id:1},{title:"Hot Burger Varenichna",url:"varenyky-lviv-ua",id:2},{title:"Hot Burger Cheburechna",url:"chebureckh-lviv-ua",id:3}],q=function(e){var t=Object(r.useState)(!1),a=Object(H.a)(t,2),s=a[0],o=a[1],c=Object(r.useState)(""),i=Object(H.a)(c,2),l=i[0],u=i[1],m=Object(r.useState)(""),d=Object(H.a)(m,2),p=d[0],h=d[1];return n.a.createElement("div",{className:"rest"},n.a.createElement("div",{className:"rest__select-top select-top"},n.a.createElement("div",{onClick:function(){o(!s)},className:"select-top__header"},l||"Select restaurant"),n.a.createElement("div",{className:"select-top__picker picker"},n.a.createElement("div",{className:"picker__up"},n.a.createElement("i",{className:"arrow_up"})),n.a.createElement("div",{className:"picker__down"},n.a.createElement("i",{className:"arrow_down"})))),s?n.a.createElement("div",{className:"rest__select-bottom select-bottom"},n.a.createElement("ul",null,F.map((function(e){return n.a.createElement("li",{onClick:function(){return function(e){var t=e.title,a=e.url;u(t),h(a),o(!1)}(e)},key:e.id},e.title)})))):null,!s&&l?n.a.createElement("button",{onClick:function(){e.history.push("/restaurant/".concat(p))},className:"rest__select-button select-button"},"visit the restaurant",n.a.createElement("span",null,"visit the restaurant")):null)},M=function(){return n.a.createElement("div",{className:"notfound"},n.a.createElement("h2",null,"The Page is Not Found"))},U=function(){return n.a.createElement(o.a,{basename:"/authburger"},n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",component:q}),n.a.createElement(c.a,{exact:!0,path:"/restaurant/:restaurantId",component:A}),n.a.createElement(c.a,{component:M})))};a(53);Object(s.render)(n.a.createElement(U,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.af185ecf.chunk.js.map