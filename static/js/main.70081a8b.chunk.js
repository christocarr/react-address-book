(this["webpackJsonpaddress-book"]=this["webpackJsonpaddress-book"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),o=n.n(a),i=n(3),l=n(9),r=n(2),s={contactList:[]};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":var n=e.contactList.some((function(e){return e.email===t.payload.email}));return n?e:Object.assign({},e,{contactList:e.contactList.concat(t.payload)});case"DELETE_CONTACT":return Object(r.a)(Object(r.a)({},e),{},{contactList:e.contactList.filter((function(e){return e.email!==t.payload.contact}))});case"TOGGLE_EDIT_CONTACT":var c=t.payload.editingContact,a=Object(r.a)(Object(r.a)({},c),{},{editing:!c.editing});return Object.assign({},e,{contactList:e.contactList.map((function(e){return e.date===c.date?a:e}))});case"UPDATE_CONTACT":return Object.assign({},e,{contactList:e.contactList.map((function(e){return e.date===t.payload.date?t.payload:e}))});default:return e}},d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.a,u=Object(l.b)(j,d()),b=n(4),p=n(5),O=function(e){return{type:"TOGGLE_EDIT_CONTACT",payload:e}},m=n(0);var x=Object(i.b)((function(e){return{contactList:e.contactList}}),{addContact:function(e){return{type:"ADD_CONTACT",payload:e}}})((function(e){var t=e.addContact,n=e.contactList,a=Object(c.useState)({name:"",firstLine:"",secondLine:"",town:"",county:"",postcode:"",email:"",phone:"",date:""}),o=Object(b.a)(a,2),i=o[0],l=o[1],s=Object(c.useState)(null),j=Object(b.a)(s,2),d=j[0],u=j[1],O=function(e){var t=e.target,n=t.name,c=t.value;l(Object(r.a)(Object(r.a)({},i),{},Object(p.a)({},n,c)))};return Object(m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n.length>0){var c=n.find((function(e){return e.email===i.email}));c.email===i.email&&u("A contact with the email ".concat(c.email," is already in your contact list"))}t(Object(r.a)(Object(r.a)({},i),{},{date:Date.now(),editing:!1})),l({name:"",firstLine:"",secondLine:"",town:"",county:"",postcode:"",email:"",phone:""})},children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{value:i.name,onChange:O,type:"text",name:"name",id:"name",placeholder:"name",required:!0}),Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{children:"Address"}),Object(m.jsx)("input",{value:i.firstLine,onChange:O,type:"text",name:"firstLine",placeholder:"first line"}),Object(m.jsx)("input",{value:i.secondLine,onChange:O,type:"text",name:"secondLine",placeholder:"second line"}),Object(m.jsx)("input",{value:i.town,onChange:O,type:"text",name:"town",placeholder:"town"}),Object(m.jsx)("input",{value:i.county,onChange:O,type:"text",name:"county",placeholder:"county"}),Object(m.jsx)("input",{value:i.postcode,onChange:O,type:"text",name:"postcode",placeholder:"postcode"})]}),Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{value:i.email,onChange:O,type:"text",id:"email",name:"email",placeholder:"email",required:!0}),Object(m.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(m.jsx)("input",{value:i.phone,onChange:O,type:"text",id:"phone",name:"phone",placeholder:"phone"}),d&&Object(m.jsx)("p",{className:"text-red-600 mb-2",children:d}),Object(m.jsx)("button",{className:"btn",children:"Add contact"})]})}));var h=Object(i.b)(null,{toggleEditContact:O})((function(e){var t=e.toggleEditContact,n=e.contact;return Object(m.jsx)("button",{onClick:function(){t({type:"TOGGLE_EDIT_CONTACT",editingContact:n})},children:"Edit"})}));var f=Object(i.b)(null,{deleteContact:function(e){return{type:"DELETE_CONTACT",payload:e}}})((function(e){var t=e.deleteContact,n=e.contact;return Object(m.jsx)("button",{onClick:function(){t({type:"DELETE_CONTACT",contact:n.email})},className:"bg-red-500 hover:bg-red-700",children:"Delete"})}));var y=function(e){var t=e.contact;return Object(m.jsxs)("div",{className:"container flex flex-col max-w-xs p-4 rounded border border-gray-300",children:[Object(m.jsx)("h3",{children:t.name}),Object(m.jsx)("address",{className:"align-left",children:Object(m.jsxs)("p",{children:[t.firstLine,Object(m.jsx)("br",{}),t.secondLine,Object(m.jsx)("br",{}),t.town,Object(m.jsx)("br",{}),t.county,Object(m.jsx)("br",{}),t.postcode,Object(m.jsx)("br",{})]})}),Object(m.jsxs)("p",{children:[t.email,Object(m.jsx)("br",{}),t.phone]}),Object(m.jsxs)("div",{className:"w-full flex justify-evenly",children:[Object(m.jsx)(h,{contact:t}),Object(m.jsx)(f,{contact:t})]})]})};var C=Object(i.b)(null,{updateContact:function(e){return{type:"UPDATE_CONTACT",payload:e}},toggleEditContact:O})((function(e){var t=e.contact,n=e.updateContact,a=e.toggleEditContact,o=Object(c.useState)({name:"",firstLine:"",secondLine:"",town:"",county:"",postcode:"",email:"",phone:""}),i=Object(b.a)(o,2),l=i[0],s=i[1];Object(c.useEffect)((function(){s(t)}),[t]);var j=function(e){var t=e.target,n=t.name,c=t.value;s(Object(r.a)(Object(r.a)({},l),{},Object(p.a)({},n,c)))};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(l),a({type:"TOGGLE_EDIT_CONTACT",editingContact:l})},children:[Object(m.jsx)("input",{value:l.name,onChange:j,type:"text",name:"name",placeholder:"name",required:!0}),Object(m.jsx)("input",{value:l.firstLine,onChange:j,type:"text",name:"firstLine",placeholder:"first line"}),Object(m.jsx)("input",{value:l.secondLine,onChange:j,type:"text",name:"secondLine",placeholder:"second line"}),Object(m.jsx)("input",{value:l.town,onChange:j,type:"text",name:"town",placeholder:"town"}),Object(m.jsx)("input",{value:l.county,onChange:j,type:"text",name:"county",placeholder:"county"}),Object(m.jsx)("input",{value:l.postcode,onChange:j,type:"text",name:"postcode",placeholder:"postcode"}),Object(m.jsx)("input",{value:l.email,onChange:j,type:"text",name:"email",placeholder:"email",required:!0}),Object(m.jsx)("input",{value:l.phone,onChange:j,type:"text",name:"phone",placeholder:"phone"}),Object(m.jsxs)("div",{className:"w-full flex justify-evenly",children:[Object(m.jsx)("button",{type:"submit",children:"Update"}),Object(m.jsx)("button",{onClick:function(){a({type:"TOGGLE_EDIT_CONTACT",editingContact:t})},children:"Cancel"})]})]})}));var v=Object(i.b)((function(e){return{contactList:e.contactList}}))((function(e){var t=e.contactList;return Object(m.jsx)("div",{className:"container flex flex-col justify-center items-center sm:flex-row gap-2",children:t.length>0?t.map((function(e,t){return e.editing?Object(m.jsx)(C,{contact:e},t):Object(m.jsx)(y,{contact:e},t)})):Object(m.jsx)("p",{children:"No Contacts!"})})}));var g=function(e){var t=e.setDisplayForm,n=e.displayForm?"Close Form":"Add New Contact";return Object(m.jsx)("button",{onClick:function(){t((function(e){return!e}))},className:"btn mb-6 w-48",children:n})};var L=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{className:"container flex flex-col justify-center items-center mx-auto py-4 px-2",children:[Object(m.jsx)("header",{className:"w-full mb-4 flex justify-center",children:Object(m.jsx)("h1",{children:"Address Book"})}),Object(m.jsxs)("main",{className:"container flex flex-col justify-center items-center py-2",children:[Object(m.jsx)(g,{displayForm:n,setDisplayForm:a}),n&&Object(m.jsx)(x,{}),Object(m.jsx)(v,{})]})]})};n(20);o.a.render(Object(m.jsx)(i.a,{store:u,children:Object(m.jsx)(L,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.70081a8b.chunk.js.map