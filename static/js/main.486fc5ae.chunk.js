(this["webpackJsonpshopping-cart-v2"]=this["webpackJsonpshopping-cart-v2"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),a=c(7),i=c.n(a),o=(c(13),c(2)),d=c(3),l=c(5),u=c(4),p=(c(14),function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var e=this.props.colors;return Object(n.jsx)("div",{className:"colors",children:e.map((function(e,t){return Object(n.jsx)("button",{style:{background:e}},t)}))})}}]),c}(s.Component)),b=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var e=this.props,t=e.images,c=e.tab,s=e.myRef;return Object(n.jsx)("div",{className:"thumb",ref:s,children:t.map((function(e,t){return Object(n.jsx)("img",{onClick:function(){return c(t)},src:e,alt:""},t)}))})}}]),c}(s.Component),j=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={products:[{_id:"1",title:"Nike Shoes",src:["https://cdn.shopify.com/s/files/1/0049/9043/5439/products/product_5_f073bdbe-103c-4341-9348-cb7fbf62087c_450x480_crop_center.jpg","https://cdn.shopify.com/s/files/1/0049/9043/5439/products/product_3_54c58d43-afd5-4a38-b121-d11016e82157_450x480_crop_center.jpg","https://cdn.shopify.com/s/files/1/0049/9043/5439/products/product_11_21cdca58-c25a-467d-964c-b7c700bf0bdd_450x480_crop_center.jpg","https://cdn.shopify.com/s/files/1/0049/9043/5439/products/product_7_3e7da5df-3040-473b-8de0-7337ceb27ebc_450x480_crop_center.jpg"],description:"UI/UX designing, html css tutorials",content:"Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",price:23,colors:["red","black","crimson","teal"],count:1}],index:0},e.myRef=r.a.createRef(),e.handleTab=function(t){e.setState({index:t});for(var c=e.myRef.current.children,n=0;n<c.length;n++)c[n].className=c[n].className.replace("active","");c[t].className="active"},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this.state.index;this.myRef.current.children[e].className="active"}},{key:"render",value:function(){var e=this,t=this.state,c=t.products,s=t.index;return Object(n.jsx)("div",{className:"app",children:c.map((function(t){return Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)("div",{className:"big-img",children:Object(n.jsx)("img",{src:t.src[s],alt:""})}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h2",{children:t.title}),Object(n.jsxs)("span",{children:["$",t.price]})]}),Object(n.jsx)(p,{colors:t.colors}),Object(n.jsx)("p",{children:t.description}),Object(n.jsx)("p",{children:t.content}),Object(n.jsx)(b,{images:t.src,tab:e.handleTab,myRef:e.myRef}),Object(n.jsx)("button",{className:"cart",children:"Add to cart"})]})]},t._id)}))})}}]),c}(r.a.Component),h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.486fc5ae.chunk.js.map