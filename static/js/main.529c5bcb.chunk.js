(this["webpackJsonpaddress-book"]=this["webpackJsonpaddress-book"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),o=n.n(a),i=n(3),r=n(9),s=n(2),l={contactList:[]};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":var n=e.contactList.some((function(e){return e.email===t.payload.email}));return n?e:Object.assign({},e,{contactList:e.contactList.concat(t.payload)});case"DELETE_CONTACT":return Object(s.a)(Object(s.a)({},e),{},{contactList:e.contactList.filter((function(e){return e.email!==t.payload.contact}))});case"TOGGLE_EDIT_CONTACT":var c=t.payload.editingContact,a=Object(s.a)(Object(s.a)({},c),{},{editing:!c.editing});return Object.assign({},e,{contactList:e.contactList.map((function(e){return e.date===c.date?a:e}))});case"UPDATE_CONTACT":return Object.assign({},e,{contactList:e.contactList.map((function(e){return e.date===t.payload.date?t.payload:e}))});default:return e}},j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.a,d=Object(r.b)(u,j()),b=n(5),p=n(4),O=function(e){return{type:"TOGGLE_EDIT_CONTACT",payload:e}},x=n(0);var m=Object(i.b)(null,{addContact:function(e){return{type:"ADD_CONTACT",payload:e}}})((function(e){var t=e.addContact,n=Object(c.useState)({name:"",firstLine:"",secondLine:"",town:"",county:"",postcode:"",email:"",phone:"",date:""}),a=Object(b.a)(n,2),o=a[0],i=a[1],r=function(e){var t=e.target,n=t.name,c=t.value;i(Object(s.a)(Object(s.a)({},o),{},Object(p.a)({},n,c)))};return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(Object(s.a)(Object(s.a)({},o),{},{date:Date.now(),editing:!1})),i({name:"",firstLine:"",secondLine:"",town:"",county:"",postcode:"",email:"",phone:""})},children:[Object(x.jsx)("input",{value:o.name,onChange:r,type:"text",name:"name",placeholder:"name",required:!0}),Object(x.jsx)("input",{value:o.firstLine,onChange:r,type:"text",name:"firstLine",placeholder:"first line"}),Object(x.jsx)("input",{value:o.secondLine,onChange:r,type:"text",name:"secondLine",placeholder:"second line"}),Object(x.jsx)("input",{value:o.town,onChange:r,type:"text",name:"town",placeholder:"town"}),Object(x.jsx)("input",{value:o.county,onChange:r,type:"text",name:"county",placeholder:"county"}),Object(x.jsx)("input",{value:o.postcode,onChange:r,type:"text",name:"postcode",placeholder:"postcode"}),Object(x.jsx)("input",{value:o.email,onChange:r,type:"text",name:"email",placeholder:"email",required:!0}),Object(x.jsx)("input",{value:o.phone,onChange:r,type:"text",name:"phone",placeholder:"phone"}),Object(x.jsx)("button",{className:"btn",children:"Add contact"})]})}));var h=Object(i.b)(null,{toggleEditContact:O})((function(e){var t=e.toggleEditContact,n=e.contact;return Object(x.jsx)("button",{onClick:function(){t({type:"TOGGLE_EDIT_CONTACT",editingContact:n})},children:"Edit"})}));var f=Object(i.b)(null,{deleteContact:function(e){return{type:"DELETE_CONTACT",payload:e}}})((function(e){var t=e.deleteContact,n=e.contact;return Object(x.jsx)("button",{onClick:function(){t({type:"DELETE_CONTACT",contact:n.email})},className:"bg-red-500 hover:bg-red-700",children:"Delete"})}));var C=function(e){var t=e.contact;return Object(x.jsxs)("div",{className:"container flex flex-col p-4 mb-4 rounded border border-gray-300",children:[Object(x.jsx)("h3",{children:t.name}),Object(x.jsx)("address",{className:"align-left",children:Object(x.jsxs)("p",{children:[t.firstLine,Object(x.jsx)("br",{}),t.secondLine,Object(x.jsx)("br",{}),t.town,Object(x.jsx)("br",{}),t.county,Object(x.jsx)("br",{}),t.postcode,Object(x.jsx)("br",{})]})}),Object(x.jsxs)("p",{children:[t.email,Object(x.jsx)("br",{}),t.phone]}),Object(x.jsxs)("div",{className:"w-full flex justify-evenly",children:[Object(x.jsx)(h,{contact:t}),Object(x.jsx)(f,{contact:t})]})]})};var y=Object(i.b)(null,{updateContact:function(e){return{type:"UPDATE_CONTACT",payload:e}},toggleEditContact:O})((function(e){var t=e.contact,n=e.updateContact,a=e.toggleEditContact,o=Object(c.useState)({name:"",firstLine:"",secondLine:"",town:"",county:"",postcode:"",email:"",phone:""}),i=Object(b.a)(o,2),r=i[0],l=i[1];Object(c.useEffect)((function(){l(t)}),[t]);var u=function(e){var t=e.target,n=t.name,c=t.value;l(Object(s.a)(Object(s.a)({},r),{},Object(p.a)({},n,c)))};return Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(r),a({type:"TOGGLE_EDIT_CONTACT",editingContact:r})},children:[Object(x.jsx)("input",{value:r.name,onChange:u,type:"text",name:"name",placeholder:"name",required:!0}),Object(x.jsx)("input",{value:r.firstLine,onChange:u,type:"text",name:"firstLine",placeholder:"first line"}),Object(x.jsx)("input",{value:r.secondLine,onChange:u,type:"text",name:"secondLine",placeholder:"second line"}),Object(x.jsx)("input",{value:r.town,onChange:u,type:"text",name:"town",placeholder:"town"}),Object(x.jsx)("input",{value:r.county,onChange:u,type:"text",name:"county",placeholder:"county"}),Object(x.jsx)("input",{value:r.postcode,onChange:u,type:"text",name:"postcode",placeholder:"postcode"}),Object(x.jsx)("input",{value:r.email,onChange:u,type:"text",name:"email",placeholder:"email",required:!0}),Object(x.jsx)("input",{value:r.phone,onChange:u,type:"text",name:"phone",placeholder:"phone"}),Object(x.jsxs)("div",{className:"w-full flex justify-evenly",children:[Object(x.jsx)("button",{type:"submit",children:"Update"}),Object(x.jsx)("button",{onClick:function(){a({type:"TOGGLE_EDIT_CONTACT",editingContact:t})},children:"Cancel"})]})]})}));var v=Object(i.b)((function(e){return{contactList:e.contactList}}))((function(e){var t=e.contactList;return Object(x.jsx)("div",{className:"container flex flex-col justify-center items-center",children:t.length>0?t.map((function(e,t){return e.editing?Object(x.jsx)(y,{contact:e},t):Object(x.jsx)(C,{contact:e},t)})):Object(x.jsx)("p",{children:"No Contacts!"})})}));var g=function(e){var t=e.setDisplayForm,n=e.displayForm?"Close Form":"Add New Contact";return Object(x.jsx)("button",{onClick:function(){t((function(e){return!e}))},className:"btn mb-6 w-48",children:n})};var T=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(x.jsxs)("div",{className:"container flex flex-col justify-center items-center mx-auto py-4 px-2",children:[Object(x.jsx)("header",{className:"w-full mb-4 flex justify-center",children:Object(x.jsx)("h1",{children:"Address Book"})}),Object(x.jsxs)("main",{className:"container flex flex-col justify-center items-center py-2",children:[Object(x.jsx)(g,{displayForm:n,setDisplayForm:a}),n&&Object(x.jsx)(m,{}),Object(x.jsx)(v,{})]})]})};n(20);o.a.render(Object(x.jsx)(i.a,{store:d,children:Object(x.jsx)(T,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.529c5bcb.chunk.js.map