(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(4984)}])},4984:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(8520),s=n.n(r),o=n(5893),a=n(9769),u=n(7247),c=n(7294);function i(e,t,n,r,s,o,a){try{var u=e[o](a),c=u.value}catch(i){return void n(i)}u.done?t(c):Promise.resolve(c).then(r,s)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function a(e){i(o,r,s,a,u,"next",e)}function u(e){i(o,r,s,a,u,"throw",e)}a(void 0)}))}}function l(){return(0,o.jsx)("svg",{className:"h-6 w-6 text-center",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})})}function f(){var e=(0,c.useState)(""),t=e[0],n=e[1],r=(0,c.useState)(""),i=r[0],f=r[1],b=(0,c.useState)(""),p=b[0],m=b[1],x=(0,c.useState)(""),g=x[0],h=x[1],v=(0,c.useState)(""),w=v[0],C=v[1],k=(0,c.useState)(""),D=k[0],j=k[1],N=(0,c.useState)(!1),y=N[0],F=N[1],E=(0,c.useState)(""),T=E[0],I=E[1],S=(0,c.useState)(!1),B=S[0],P=S[1],_=(0,c.useState)(""),A=_[0],L=_[1],O=(0,c.useState)(""),q=O[0],H=O[1],M=(0,c.useState)(""),V=M[0],R=M[1],W=d(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!B||y){e.next=65;break}if((n=new a.TelegramClient(new u.StringSession(""),Number(t),String(i),{connectionRetries:5})).setLogLevel("debug"),r="","bot"!=A){e.next=36;break}return e.next=8,n.start({botAuthToken:function(){return F("botToken"),r="botToken",R("waiting bot token"),new Promise((function(e,t){document.getElementById("submitbotToken").addEventListener("click",(function(t){if(t.preventDefault(),"botToken"!==r)return!1;R("Verifying bot token.");var n=document.getElementById("bottoken")?document.getElementById("bottoken").value:g;""!==g||""!==n?(R("resolve botToken"),e(""==g?n:g)):(R(""),I("botToken cannot be empty or undefined."))}))}))}});case 8:R("generating session"),e.t0=Number(n.session.dcId),e.next=1===e.t0?12:2===e.t0?14:3===e.t0?16:4===e.t0?18:5===e.t0?20:22;break;case 12:return n.session.setDC(1,"149.154.175.53",80),e.abrupt("break",23);case 14:return n.session.setDC(2,"149.154.167.51",80),e.abrupt("break",23);case 16:return n.session.setDC(3,"149.154.175.100",80),e.abrupt("break",23);case 18:return n.session.setDC(4,"149.154.167.91",80),e.abrupt("break",23);case 20:return n.session.setDC(5,"91.108.56.130",80),e.abrupt("break",23);case 22:n.session.setDC(4,"149.154.167.91",80);case 23:return e.t1=H,e.next=26,n.session.save();case 26:return e.t2=e.sent,(0,e.t1)(e.t2),R(""),F(!1),L(""),h(""),P(!1),e.abrupt("return",!0);case 36:if("user"!=A){e.next=65;break}return e.next=39,n.start({phoneNumber:function(){return F("phoneNumber"),r="phoneNumber",R("waiting phone number."),new Promise((function(e){document.getElementById("submitphoneNumber").addEventListener("click",(function(t){if(t.preventDefault(),"phoneNumber"!==r)return!1;R("Verifying phoneNumber.");var n=document.getElementById("phonenumber")?document.getElementById("phonenumber").value:w;if(""!==w||""!==n)return R("resolve phone number"),e(""==w?n:w);R(""),I("phoneNumber cannot be empty or undefined.")}))}))},password:function(){return F("password"),r="password",R("waiting password."),new Promise((function(e){document.getElementById("submitpassword").addEventListener("click",(function(t){if(t.preventDefault(),"password"!==r)return!1;R("Verifying password.");var n=document.getElementById("password")?document.getElementById("password").value:D;""!==D||""!==n?(R("resolve password"),e(""==D?n:D)):(R(""),I("password cannot be empty or undefined."))}))}))},phoneCode:function(){return F("phoneCode"),r="phoneCode",R("waiting phone code."),new Promise((function(e){document.getElementById("submitphoneCode").addEventListener("click",(function(t){if(t.preventDefault(),"phoneCode"!==r)return!1;R("Verifying OTP.");var n=document.getElementById("phonecode")?document.getElementById("phonecode").value:p;""!==p||""!==n?(R("resolve otp"),e(""==p?n:p)):(R(""),I("cannot be empty or undefined."))}))}))},onError:function(e){P(!1),I(e.message),R("")}});case 39:if(!n.session){e.next=60;break}R("generating session"),e.t3=Number(n.session.dcId),e.next=1===e.t3?44:2===e.t3?46:3===e.t3?48:4===e.t3?50:5===e.t3?52:54;break;case 44:return n.session.setDC(1,"149.154.175.53",80),e.abrupt("break",55);case 46:return n.session.setDC(2,"149.154.167.51",80),e.abrupt("break",55);case 48:return n.session.setDC(3,"149.154.175.100",80),e.abrupt("break",55);case 50:return n.session.setDC(4,"149.154.167.91",80),e.abrupt("break",55);case 52:return n.session.setDC(5,"91.108.56.130",80),e.abrupt("break",55);case 54:n.session.setDC(4,"149.154.167.91",80);case 55:return e.t4=H,e.next=58,n.session.save();case 58:e.t5=e.sent,(0,e.t4)(e.t5);case 60:return F(!1),L(""),P(!1),R(""),e.abrupt("return",!0);case 65:return e.abrupt("return",!1);case 68:e.prev=68,e.t6=e.catch(0),console.log(e.t6),I(e.t6.message),R("");case 73:case"end":return e.stop()}}),e,null,[[0,68]])})));return(0,c.useEffect)((function(){W()}),[B]),(0,o.jsx)("div",{className:"relative",children:(0,o.jsx)("div",{className:"h-screen w-full bg-[#D6E6F2]",children:(0,o.jsxs)("div",{className:"inset-x-0 md:inset-x-48 top-10 mx-1 rounded-b-xl absolute bg-white rounded-t-xl p-2",children:[(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsx)("div",{className:"border-b-2 border-gray-200 w-16 h-2"})}),(0,o.jsxs)("div",{className:"my-2",children:[(0,o.jsx)("h2",{className:"text-black font-bold text-xl text-center",children:"tgsnake session generator"}),(0,o.jsxs)("div",{className:"flex justify-between mt-2 items-center",children:[(0,o.jsx)("input",{name:"apiid",className:"m-2 p-2 w-5/6 border border-[#769FCD] rounded-lg focus:outline-none focus:ring focus:ring-[#769FCD]/50",type:"text",required:!0,placeholder:"API ID",value:t,onChange:function(e){if(B)return!1;n(e.target.value)}}),(0,o.jsx)("button",{className:"p-2 h-10 items-center text-center text-white w-10 mx-2 rounded-lg bg-[#769FCD] focus:ring focus:ring-[#769FCD]/50 focus:outline-none hover:bg-[#769FCD] focus:bg-[#769FCD]",onClick:d(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!B){e.next=3;break}return e.abrupt("return",!1);case 3:return e.t0=n,e.next=6,navigator.clipboard.readText();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)}))),children:(0,o.jsx)(l,{})})]}),(0,o.jsxs)("div",{className:"flex justify-between mt-2 items-center",children:[(0,o.jsx)("input",{name:"apihash",className:"m-2 p-2 w-5/6 border border-[#769FCD] rounded-lg focus:outline-none focus:ring focus:ring-[#769FCD]/50",type:"text",required:!0,placeholder:"API HASH",value:i,onChange:function(e){if(B)return!1;f(e.target.value)}}),(0,o.jsx)("button",{className:"p-2 h-10 items-center text-center text-white w-10 mx-2 rounded-lg bg-[#769FCD] focus:ring focus:ring-[#769FCD]/50 focus:outline-none hover:bg-sky-600 focus:bg-[#769FCD]",onClick:d(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!B){e.next=3;break}return e.abrupt("return",!1);case 3:return e.t0=f,e.next=6,navigator.clipboard.readText();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)}))),children:(0,o.jsx)(l,{})})]}),(0,o.jsxs)("div",{className:"flex justify-center items-center",children:[(0,o.jsx)("div",{className:"border-b-2 border-gray-200 w-16 h-2"}),(0,o.jsx)("span",{className:"p-2 mx-2 font-light",children:"login as"}),(0,o.jsx)("div",{className:"border-b-2 border-gray-200 w-16 h-2"})]}),(0,o.jsxs)("div",{className:"flex items-center justify-between mt-2",children:[(0,o.jsx)("button",{className:"w-3/6 p-2 rounded-lg bg-[#769FCD] hover:bg-[#769FCD] focus:bg-[#769FCD] text-white focus:ring focus:ring-[#769FCD]/50 focus:outline-none text-center mx-2 ",onClick:d(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),I(""),!B){e.next=4;break}return e.abrupt("return",I("already logined as bot."));case 4:if(""!=i&&""!=t){e.next=6;break}return e.abrupt("return",I("Api ID or Hash cannot be empty or undefined."));case 6:R("trying login as bot"),L("bot"),P(!0);case 9:case"end":return e.stop()}}),e)}))),children:"Bot"}),(0,o.jsx)("button",{className:"w-3/6 p-2 rounded-lg bg-[#769FCD] hover:bg-[#769FCD] focus:bg-[#769FCD] text-white focus:ring focus:ring-[#769FCD]/50 focus:outline-none text-center mx-2 ",onClick:d(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),I(""),!B){e.next=4;break}return e.abrupt("return",I("already logined as user."));case 4:if(""!=i&&""!=t){e.next=6;break}return e.abrupt("return",I("Api ID or Hash cannot be empty or undefined."));case 6:R("trying login as user"),L("user"),P(!0);case 9:case"end":return e.stop()}}),e)}))),children:"User"})]}),(0,o.jsxs)("div",{className:"mx-2 mt-3",children:[(0,o.jsx)("p",{className:"text-red-500 font-light px-2",children:""!==T?"[Error] ".concat(T):T}),(0,o.jsx)("p",{className:"text-black font-light px-2",children:""!==V?"[PleaseWait] ".concat(V):V})]}),(0,o.jsx)("div",{}),function(){switch(y){case"botToken":return(0,o.jsxs)("div",{className:"flex items-center justify-between mt-2",children:[(0,o.jsx)("input",{name:"bottoken",className:"m-2 p-2 w-5/6 border border-[#769FCD] rounded-lg focus:outline-none focus:ring focus:ring-[#769FCD]/50",type:"text",placeholder:"BOT TOKEN",required:!0,id:"bottoken",value:g,onChange:function(e){if(I(""),y&&!B&&P(!0),!B)return!1;h(e.target.value)}}),(0,o.jsx)("button",{className:"p-2 h-10 items-center text-center text-white w-10 mx-2 rounded-lg bg-[#769FCD] focus:ring focus:ring-[#769FCD]/50 focus:outline-none hover:bg-sky-600 focus:bg-[#769FCD]",onClick:d(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),I(""),y&&!B&&P(!0),B){e.next=5;break}return e.abrupt("return",!1);case 5:return e.t0=h,e.next=8,navigator.clipboard.readText();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)}))),children:(0,o.jsx)(l,{})})]});case"phoneNumber":return(0,o.jsxs)("div",{className:"flex items-center justify-between mt-2",children:[(0,o.jsx)("input",{name:"phonenumber",className:"m-2 p-2 w-5/6 border border-[#769FCD] rounded-lg focus:outline-none focus:ring focus:ring-[#769FCD]/50",type:"text",placeholder:"INTERNATIONAL PHONE NUMBER",required:!0,id:"phonenumber",value:w,onChange:function(e){if(I(""),y&&!B&&P(!0),!B)return!1;C(e.target.value)}}),(0,o.jsx)("button",{className:"p-2 h-10 items-center text-center text-white w-10 mx-2 rounded-lg bg-[#769FCD] focus:ring focus:ring-[#769FCD]/50 focus:outline-none hover:bg-sky-600 focus:bg-[#769FCD]",onClick:d(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),I(""),y&&!B&&P(!0),B){e.next=5;break}return e.abrupt("return",!1);case 5:return e.t0=C,e.next=8,navigator.clipboard.readText();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)}))),children:(0,o.jsx)(l,{})})]});case"phoneCode":return(0,o.jsxs)("div",{className:"flex items-center justify-between mt-2",children:[(0,o.jsx)("input",{name:"phonecode",className:"m-2 p-2 w-5/6 border border-[#769FCD] rounded-lg focus:outline-none focus:ring focus:ring-[#769FCD]/50",type:"text",placeholder:"OTP",required:!0,id:"phonecode",value:p,onChange:function(e){if(I(""),y&&!B&&P(!0),!B)return!1;m(e.target.value)}}),(0,o.jsx)("button",{className:"p-2 h-10 items-center text-center text-white w-10 mx-2 rounded-lg bg-[#769FCD] focus:ring focus:ring-[#769FCD]/50 focus:outline-none hover:bg-sky-600 focus:bg-[#769FCD]",onClick:d(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),I(""),y&&!B&&P(!0),B){e.next=5;break}return e.abrupt("return",!1);case 5:return e.t0=m,e.next=8,navigator.clipboard.readText();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)}))),children:(0,o.jsx)(l,{})})]});case"password":return(0,o.jsxs)("div",{className:"flex items-center justify-between mt-2",children:[(0,o.jsx)("input",{name:"password",className:"m-2 p-2 w-5/6 border border-[#769FCD] rounded-lg focus:outline-none focus:ring focus:ring-[#769FCD]/50",type:"text",placeholder:"2FA PASSWORD",required:!0,id:"password",value:D,onChange:function(e){if(I(""),y&&!B&&P(!0),!B)return!1;j(e.target.value)}}),(0,o.jsx)("button",{className:"p-2 h-10 items-center text-center text-white w-10 mx-2 rounded-lg bg-[#769FCD] focus:ring focus:ring-[#769FCD]/50 focus:outline-none hover:bg-sky-600 focus:bg-[#769FCD]",onClick:d(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),I(""),y&&!B&&P(!0),B){e.next=5;break}return e.abrupt("return",!1);case 5:return e.t0=j,e.next=8,navigator.clipboard.readText();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)}))),children:(0,o.jsx)(l,{})})]});default:return(0,o.jsx)(o.Fragment,{})}}(),(0,o.jsx)("div",{children:y?(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("button",{id:"submit".concat(y||""),className:"w-[96%] p-2 rounded-lg bg-[#769FCD] hover:bg-[#769FCD] focus:bg-[#769FCD] text-white focus:ring focus:ring-[#769FCD]/50 focus:outline-none text-center mx-2 ",children:"Verify"})}):(0,o.jsx)(o.Fragment,{})}),""!==q?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex justify-center items-center",children:[(0,o.jsx)("div",{className:"border-b-2 border-gray-200 w-16 h-2"}),(0,o.jsx)("span",{className:"p-2 mx-2 font-light",children:"Your String Session"}),(0,o.jsx)("div",{className:"border-b-2 border-gray-200 w-16 h-2"})]}),(0,o.jsx)("div",{className:"bg-[#769FCD] text-white overflow-y-auto h-62 p-2 rounded-lg break-all",children:(0,o.jsx)("code",{children:q})})]}):(0,o.jsx)(o.Fragment,{})]}),(0,o.jsx)("p",{className:"text-center my-2 py-2 text-black",children:"MIT ".concat((new Date).getFullYear()," \xa9 butthx.")})]})})})}},6601:function(){},9214:function(){},1922:function(){},2363:function(){},2361:function(){},4616:function(){},5644:function(){}},function(e){e.O(0,[545,774,888,179],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);