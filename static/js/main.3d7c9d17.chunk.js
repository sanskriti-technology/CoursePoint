(this["webpackJsonpcourse-register"]=this["webpackJsonpcourse-register"]||[]).push([[0],{165:function(e,t){},167:function(e,t){},178:function(e,t){},180:function(e,t){},207:function(e,t){},209:function(e,t){},210:function(e,t){},215:function(e,t){},217:function(e,t){},223:function(e,t){},225:function(e,t){},244:function(e,t){},256:function(e,t){},259:function(e,t){},286:function(e,t,s){"use strict";s.r(t);var n,c=s(1),r=s.n(c),i=s(51),o=s.n(i),a=(s(86),s(6)),l=s(9),d=s(0),j=function(e){return console.log("inside courselist"),console.log(e),Object(d.jsxs)("div",{className:"course-list",children:[Object(d.jsx)("h1",{children:"List of Courses"}),e.course.map((function(e){return Object(d.jsx)("div",{className:"course-preview",children:Object(d.jsxs)(l.b,{to:"/Courses/"+e.id,children:[Object(d.jsxs)("h3",{children:["Course ID : ",e.id]}),Object(d.jsxs)("h2",{children:["Title: ",e.title]}),Object(d.jsxs)("p",{children:["Course Duration: ",e.duration]})]})},e.id)}))]})},u=function(e){var t=Object(c.useState)(null),s=Object(a.a)(t,2),n=s[0],r=s[1],i=Object(c.useState)(!0),o=Object(a.a)(i,2),l=o[0],d=o[1],j=Object(c.useState)(null),u=Object(a.a)(j,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("url connected Data not recived");return e.json()})).then((function(e){r(e),d(!1),h(!1)})).catch((function(e){"AbortError"===e.name?(console.log("fetch aborted"),h(e.message)):(d(!1),h(e.message))}))}),10),function(){return t.abort()}}),[e]),{dbdata:n,loading:l,errMsg:b}},b=function(){var e=u("https://my-json-server.typicode.com/sanskriti-technology/CoursePoint/courses"),t=e.dbdata,s=e.loading,n=e.errMsg;return Object(d.jsxs)("div",{className:"home",children:[n&&Object(d.jsxs)("div",{children:[" ",n]}),s&&Object(d.jsx)("p",{children:" loading.."}),!s&&Object(d.jsx)(j,{course:t})]})},h=Object(c.createContext)(null),O=s(143),x=s.n(O),m=["title","titleId"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var s,n,c=function(e,t){if(null==e)return{};var s,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(c[s]=e[s]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(c[s]=e[s])}return c}function g(e,t){var s=e.title,r=e.titleId,i=p(e,m);return c.createElement("svg",f({viewBox:"0 0 448 512",ref:t,"aria-labelledby":r},i),s?c.createElement("title",{id:r},s):null,n||(n=c.createElement("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",className:""})))}var v=c.forwardRef(g),y=(s.p,function(){var e=Object(c.useContext)(h),t=e.logedUser,s=e.signed,n=e.setLogedUser,r=e.setSigned,i=Object(c.useState)(!1),o=Object(a.a)(i,2),j=o[0],u=o[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{className:"navbar1",children:[Object(d.jsx)("h1",{children:"Course Point"}),Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)(l.b,{to:"/Home",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Courses"}),s&&Object(d.jsx)(l.b,{to:"/",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Dash Board"}),Object(d.jsx)(l.b,{to:"/ContactUs",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"ContactUs"}),!s&&Object(d.jsx)(l.b,{to:"/",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"Sign In"}),s&&Object(d.jsx)(x.a,{fontSize:"large",onClick:function(){return u(!j)}}),j&&Object(d.jsx)("div",{className:"dropdown",children:Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsxs)("div",{className:"menu-item",children:["Hi ",t.username]}),Object(d.jsxs)("div",{className:"menu-item",children:[Object(d.jsx)("span",{className:"icon-button",children:Object(d.jsx)(v,{})}),Object(d.jsx)(l.b,{to:"/",onClick:function(){r(!1),n("guest"),u(!j)},children:"Sign Out"})]})]})})]})]})})}),C=function(){return Object(d.jsxs)("div",{className:"PageNotFound",children:[Object(d.jsx)("h3",{children:"Address"}),Object(d.jsx)("h4",{children:" India"}),Object(d.jsx)("span",{}),Object(d.jsx)(l.b,{to:"/",children:"Back to Home"})]})},S=function(e){var t=e.user;return Object(d.jsxs)("div",{className:"course-list",children:[Object(d.jsx)("h1",{children:"List of Registed Course"}),t.courses.map((function(e){return Object(d.jsx)("div",{className:"course-preview",children:Object(d.jsxs)(l.b,{to:"/Courses/"+e.id,children:[Object(d.jsxs)("h3",{children:["Course ID : ",e.id]}),Object(d.jsxs)("h2",{children:["Title: ",e.title]}),Object(d.jsxs)("p",{children:["Course Duration: ",e.duration]})]})},e.id)}))]})},N=function(){var e=Object(c.useContext)(h),t=e.logedUser,n=e.signed,r=e.setLogedUser,i=e.setSigned,o=u("https://my-json-server.typicode.com/sanskriti-technology/CoursePoint/student"),j=o.dbdata,b=o.loading,O=o.errMsg,x=Object(c.useState)(""),m=Object(a.a)(x,2),f=m[0],p=m[1],g=Object(c.useState)(""),v=Object(a.a)(g,2),y=v[0],C=v[1],N=Object(c.useState)(""),w=Object(a.a)(N,2),k=w[0],P=w[1],U=f,E=y,D=s(87);return Object(d.jsxs)("div",{className:"studentHome",children:[!n&&Object(d.jsxs)("div",{className:"signin",children:[Object(d.jsx)("h2",{children:"Login Page"}),k&&Object(d.jsx)("h4",{children:k}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=j.find((function(e){return"react@"+e.id===U}));if(null==t)console.log("Cannot find user"),P("User is not registered");else try{var s=D.AES.decrypt(t.password,"ragu@key").toString(D.enc.Utf8);console.log(s),E===s?(console.log("Success"),r(t),i(!0)):(console.log("Not Allowed"),P("Password Invalid"))}catch(n){P("UserID or Password Invalid")}},children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{children:"UserID:  "}),Object(d.jsx)("input",{type:"text",required:!0,value:f,onChange:function(e){return p(e.target.value)}})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("label",{children:"Password:  "}),Object(d.jsx)("input",{type:"password",required:!0,value:y,onChange:function(e){return C(e.target.value)}})]}),Object(d.jsx)("button",{children:"Login"})]}),Object(d.jsxs)("p",{children:[" Click here to ",Object(d.jsx)(l.b,{to:"/SignUp",children:"Sign Up"})]})]}),O&&Object(d.jsx)("div",{children:O}),b&&Object(d.jsx)("div",{}),n&&Object(d.jsx)(S,{user:t})]})},w=s(24),k=s(85),P=function(e,t){var n=Object(c.useState)({username:"",email:"",password:"",address:"",courses:[]}),r=Object(a.a)(n,2),i=r[0],o=r[1],l=Object(c.useState)({}),d=Object(a.a)(l,2),j=d[0],u=d[1],b=Object(c.useState)(!1),h=Object(a.a)(b,2),O=h[0],x=h[1];return Object(c.useEffect)((function(){0===Object.keys(j).length&&O&&(console.log("2"),t())}),[j,O,t]),{handleChange:function(e){var t=e.target,s=t.name,n=t.value;o(Object(k.a)(Object(k.a)({},i),{},Object(w.a)({},s,n)))},handleSubmit:function(t){if(t.preventDefault(),u(e(i)),0===Object.entries(j).length){console.log("5");var n=s(87).AES.encrypt(i.password,"ragu@key").toString();o({username:i.username,email:i.email,address:i.address,password:n,courses:[]})}x(!0)},values:i,errors:j}},U=function(e){var t={};return e.username.trim()||(t.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",e.password?e.password.length<6&&(t.password="Password needs to be 6 characters or more"):t.password="Password is required",e.address||(t.address="addressis required"),t},E=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(null),i=Object(a.a)(r,2),o=i[0],l=i[1],j=P(U,(function(){0!==Object.keys(O).length||s||fetch("https://my-json-server.typicode.com/sanskriti-technology/CoursePoint/student/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.json()})).then((function(e){n(!0),l(e.id)}))})),u=j.handleChange,b=j.handleSubmit,h=j.values,O=j.errors;return Object(d.jsxs)("div",{className:"signup",children:[!s&&Object(d.jsxs)("form",{onSubmit:b,className:"form",children:[Object(d.jsx)("h3",{children:"Create your account by filling out the information below."}),Object(d.jsxs)("div",{className:"form-inputs",children:[Object(d.jsx)("label",{className:"form-label",children:"Name"}),O.username&&Object(d.jsx)("p",{children:O.username}),Object(d.jsx)("input",{className:"form-input",type:"text",name:"username",placeholder:"Enter your username",value:h.username,onChange:u})]}),Object(d.jsxs)("div",{className:"form-inputs",children:[Object(d.jsx)("label",{className:"form-label",children:"Email"}),O.email&&Object(d.jsx)("p",{children:O.email}),Object(d.jsx)("input",{className:"form-input",type:"email",name:"email",placeholder:"Enter your email",value:h.email,onChange:u})]}),Object(d.jsxs)("div",{className:"form-inputs",children:[Object(d.jsx)("label",{className:"form-label",children:"Password"}),O.password&&Object(d.jsx)("p",{children:O.password}),Object(d.jsx)("input",{className:"form-input",type:"password",name:"password",placeholder:"Enter your password",value:h.password,onChange:u})]}),Object(d.jsxs)("div",{className:"form-inputs",children:[Object(d.jsx)("label",{className:"form-label",children:"Address"}),O.address&&Object(d.jsx)("p",{children:O.address}),Object(d.jsx)("textarea",{className:"form-input",type:"text",name:"address",placeholder:"Type Address Here",value:h.address,onChange:u})]}),Object(d.jsx)("button",{className:"form-input-btn",type:"submit",children:"Sign Up"}),Object(d.jsxs)("div",{className:"form-input-login",children:["Already have an account? Login ",Object(d.jsx)("a",{href:"/",children:"here"})]})]}),s&&Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:" Registered Succsessfully"}),Object(d.jsx)("h2",{children:" Please Note Down Your University Seat Number (USN) to Login"}),Object(d.jsxs)("h3",{children:[" USN : react@",o]})]})]})},D=function(){return Object(d.jsxs)("div",{className:"PageNotFound",children:[Object(d.jsx)("h1",{children:"Page Not Found"}),Object(d.jsx)(l.b,{to:"/",children:"Back to Home"})]})},L=s(7),I=s(144),A=s.n(I),H=s(145),T=s.n(H),F=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(!0),i=Object(a.a)(r,2),o=i[0],l=i[1],j=Object(c.useContext)(h),b=j.logedUser,O=j.signed,x=j.setLogedUser,m=Object(L.f)(),f=Object(L.g)().id,p=u("https://my-json-server.typicode.com/sanskriti-technology/CoursePoint/courses"+f),g=p.dbdata,v=p.loading,y=p.errMsg;O&&o&&(null!=b.courses.find((function(e){return e.id===f}))&&(l(!1),n(!0)));var C=function(e){fetch("https://my-json-server.typicode.com/sanskriti-technology/CoursePoint/student/"+b.id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({courses:e})}).then((function(e){return e.json()})).then((function(e){x(e)}))};return Object(d.jsxs)("div",{className:"course-details",children:[v&&Object(d.jsx)("div",{children:"Loading..."}),y&&Object(d.jsx)("div",{children:y}),g&&Object(d.jsxs)("div",{children:[s&&Object(d.jsx)(A.a,{style:{display:"block",padding:30,float:"right"},onClick:function(e){e.preventDefault();var t=b.courses.filter((function(e){return e.id!==f}));C(t),n(!1),console.log("enrolled set false"),l(!0)},children:" Delete"}),o&&Object(d.jsxs)("p",{children:["Enroll ",Object(d.jsx)(T.a,{onClick:function(e){if(e.preventDefault(),"guest"!==b){var t=b.courses.concat(g);C(t),n(!0),console.log("enrolled set true"),l(!1)}else m.push("/")},children:"Enrol"})]}),s&&Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("h4",{children:"Enrolled"})," "]}),Object(d.jsxs)("article",{children:[Object(d.jsx)("h2",{children:g.title}),Object(d.jsxs)("h3",{children:["Course ID : ",g.id]}),Object(d.jsxs)("p",{children:["Course Duration: ",g.duration]}),Object(d.jsx)("div",{children:g.body})]})]})]})};var R=function(){var e=Object(c.useState)("guest"),t=Object(a.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(!1),i=Object(a.a)(r,2),o=i[0],j=i[1];return Object(d.jsx)(h.Provider,{value:{logedUser:s,signed:o,setLogedUser:n,setSigned:j},children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(y,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(L.c,{children:[Object(d.jsx)(L.a,{exact:!0,path:"/SignUp",children:Object(d.jsx)(E,{})}),Object(d.jsx)(L.a,{exact:!0,path:"/ContactUs",children:Object(d.jsx)(C,{})}),Object(d.jsx)(L.a,{exact:!0,path:"/Home",children:Object(d.jsx)(b,{})}),Object(d.jsx)(L.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{})}),Object(d.jsx)(L.a,{exact:!0,path:"/Courses/:id",children:Object(d.jsx)(F,{})}),Object(d.jsx)(L.a,{path:"*",children:Object(d.jsx)(D,{})})]})})]})})})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,298)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),r(e),i(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),q()},86:function(e,t,s){}},[[286,1,2]]]);
//# sourceMappingURL=main.3d7c9d17.chunk.js.map