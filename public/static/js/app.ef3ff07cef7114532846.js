webpackJsonp([2],{"+HYy":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-navigation-drawer",{attrs:{temporary:"",light:"",overflow:"",absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[t.$store.state.isUserLoggedIn?t._e():r("v-list-tile",{attrs:{to:"/login"}},[r("v-list-tile-content",[t._v("Login")])],1),t._v(" "),t.$store.state.isUserLoggedIn?t._e():r("v-list-tile",{attrs:{to:"/register"}},[r("v-list-tile-content",[t._v("Register")])],1),t._v(" "),t.$store.state.isUserLoggedIn?r("v-list-tile",{attrs:{to:"/profile"}},[r("v-list-tile-content",[t._v("My Books")])],1):t._e(),t._v(" "),t.$store.state.isUserLoggedIn?r("v-list-tile",{attrs:{to:"/settings"}},[r("v-list-tile-content",[t._v("Settings")])],1):t._e(),t._v(" "),t.$store.state.isUserLoggedIn?r("v-list-tile",{attrs:{to:"#"},nativeOn:{click:function(e){t.onLogout(e)}}},[r("v-list-tile-content",[t._v("Logout")])],1):t._e()],1)],1),t._v(" "),r("v-toolbar",{staticClass:"cyan",attrs:{dark:"",absolute:""}},[r("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{attrs:{href:"/home"}},[r("router-link",{attrs:{id:"title",to:"/home"}},[t._v("Booktrader")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t.$store.state.isUserLoggedIn?t._e():r("v-btn",{attrs:{flat:"",to:"/login"}},[t._v("Login")]),t._v(" "),t.$store.state.isUserLoggedIn?t._e():r("v-btn",{attrs:{flat:"",to:"/register"}},[t._v("Register")]),t._v(" "),t.$store.state.isUserLoggedIn?r("v-btn",{attrs:{flat:"",to:"/profile"}},[t._v("My Books")]):t._e(),t._v(" "),t.$store.state.isUserLoggedIn?r("v-btn",{attrs:{flat:"",to:"/settings"}},[t._v("Settings")]):t._e(),t._v(" "),t.$store.state.isUserLoggedIn?r("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.onLogout(e)}}},[t._v("Logout")]):t._e()],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},"+maZ":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("panel",{attrs:{title:"Settings"}},[r("v-flex",{attrs:{xs12:""}},[r("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs6:"",sm4:"","offset-sm2":""}},[r("v-text-field",{attrs:{name:"firstName",label:"First Name"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:"",sm4:""}},[r("v-text-field",{attrs:{name:"lastName",label:"Last Name"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs6:"",sm4:"","offset-sm2":""}},[r("v-text-field",{attrs:{name:"city",label:"City"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:"",sm4:""}},[r("v-text-field",{attrs:{name:"state",label:"State"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1),t._v(" "),r("v-btn",{attrs:{type:"submit",primary:""}},[t._v("Save")])],1)])],1)],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},"/Idh":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("panel",{attrs:{title:"My books"}},[t.books.length?r("v-list",t._l(t.books,function(e,s){return r("v-list-tile",{key:e.id,staticClass:"tile",attrs:{avatar:""}},[r("v-list-tile-avatar",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[e.imageLink?r("img",{attrs:{src:e.imageLink}}):t._e()])]),t._v(" "),r("v-list-tile-content",[e.author?r("v-list-tile-title",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                "+t._s(e.title)+" ("+t._s(e.author)+")\n                ")])]):r("v-list-tile-title",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                "+t._s(e.title)+" (unknown)\n                ")])])],1),t._v(" "),r("v-list-tile-action",{on:{click:function(r){t.removeBook(e,s)}}},[r("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:{html:"Delete this book"},expression:"{ html: 'Delete this book' }",arg:"left"}],attrs:{icon:""}},[r("v-icon",{staticClass:"add-icon red--text"},[t._v("remove_circle")])],1)],1)],1)})):t._t("default",[t._v("\n          You don't have any books yet\n        ")])],2)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("panel",{attrs:{title:"Add a book"}},[t.searchPending?t._e():r("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[r("v-text-field",{attrs:{name:"searchTerm",label:"Search the library"},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),t._v(" "),r("v-btn",{attrs:{type:"submit",primary:"",disabled:!t.formIsValid}},[t._v("Submit")])],1)],1)],1),t._v(" "),!t.results.length&&t.searchPending?r("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:"",size:50}}):t._e(),t._v(" "),t.results.length?r("v-list",{attrs:{subheader:""}},[r("v-subheader",[t._v("Search Results")]),t._v(" "),t._l(t.results,function(e){return r("v-list-tile",{key:e.id,staticClass:"tile",attrs:{avatar:""}},[r("v-list-tile-avatar",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[e.imageLinks?r("img",{attrs:{src:e.imageLinks.smallThumbnail}}):t._e()])]),t._v(" "),r("v-list-tile-content",[e.authors?r("v-list-tile-title",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                "+t._s(e.title)+" ("+t._s(e.authors.join(", "))+")\n                ")])]):r("v-list-tile-title",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                "+t._s(e.title)+" (unknown)\n                ")])])],1),t._v(" "),r("v-list-tile-action",{on:{click:function(r){t.addToMyBooks(e)}}},[r("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:{html:"Add to my books"},expression:"{ html: 'Add to my books' }",arg:"left"}],attrs:{icon:""}},[r("v-icon",{staticClass:"add-icon blue--text"},[t._v("library_add")])],1)],1)],1)})],2):t._e()],1)],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},0:function(t,e){},"3v6S":function(t,e,r){"use strict";e.a={props:["title"]}},"8fTd":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"cyan",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),t._t("action")],2),t._v(" "),r("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("\n      No slot content defined.\n    ")])],2)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},BBJI:function(t,e){},Drc2:function(t,e,r){"use strict";r("SGRL");e.a={data:function(){return{drawer:null}},methods:{onLogout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$swal({title:"Info",text:"You are now logged out",type:"info",timer:1e3,showConfirmButton:!1}).catch(this.$swal.noop),this.$router.push("/home")}}}},EmAO:function(t,e,r){"use strict";function s(t){r("fd9b")}var n=r("lEDJ"),a=r("ZA2R"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,"data-v-2cc99a02",null);e.a=c.exports},Fs8J:function(t,e,r){"use strict";var s=r("Xxa5"),n=r.n(s),a=r("exGp"),o=r.n(a),i=r("V/3R"),c=r("EmAO");e.a={created:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.getAllBooks();case 3:r=e.sent,t.books=r.books||[],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},data:function(){return{books:[]}},computed:{},methods:{allowTradeRequest:function(t){var e=this;return o()(n.a.mark(function r(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.allowTradeRequest(t.id);case 3:s=e.sent,t.ownerId=t.requestedBy,t.requestedBy=0,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},r,e,[[0,8]])}))()},declineTradeRequest:function(t){var e=this;return o()(n.a.mark(function r(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.declineTradeRequest(t.id);case 3:t.requestedBy=0,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},r,e,[[0,6]])}))()},cancelTradeRequest:function(t){var e=this;return o()(n.a.mark(function r(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.cancelTradeRequest(t.id);case 3:t.requestedBy=0,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},r,e,[[0,6]])}))()},bookColor:function(t){var e="";return this.userIsOwner(t)&&(e="cyan--text"),e},userIsOwner:function(t){return!(!this.$store.getters.user||this.$store.getters.user.id!==t.ownerId)},requestTrade:function(t,e){var r=this;return o()(n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.userIsOwner(t)&&!t.requestedBy){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,i.a.requestTrade(t.id,r.$store.state.user);case 5:s=e.sent,t.requestedBy=s.book.requestedBy,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,r,[[2,9]])}))()}},components:{requests:c.a}}},HUVn:function(t,e){},JJT7:function(t,e,r){"use strict";var s=r("Xxa5"),n=r.n(s),a=r("exGp"),o=r.n(a),i=r("SGRL"),c=r("olkN");e.a={beforeRouteEnter:function(t,e,r){c.a.getters.isUserLoggedIn?r("/home"):r()},data:function(){return{username:"",email:"",password:"",confirmPassword:"",required:function(t){return!!t||"Required."}}},computed:{formIsValid:function(){return""!==this.username&&""!==this.password&&""!==this.email&&this.password===this.confirmPassword}},methods:{onSubmit:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.register({username:t.username,email:t.email,password:t.password});case 2:r=e.sent;try{t.handleSuccess(r)}catch(e){t.handleRejection(e,r)}case 4:case"end":return e.stop()}},e,t)}))()},handleSuccess:function(t){if(!t.success)throw new Error("Failed to register");this.$swal({title:"Success",text:"Successfully registered, you can now login",type:"success",timer:1e3,showConfirmButton:!1}).then(function(){},function(t){this.$router.push("login")}.bind(this))},handleRejection:function(t,e){1===e.status&&(this.username=""),2===e.status&&(this.email=""),this.password="",this.confirmPassword="",this.$swal({title:"Error",text:e.msg,type:"error",timer:1e3,showConfirmButton:!1}).catch(this.$swal.noop)}}}},JZSy:function(t,e,r){"use strict";var s=r("Xxa5"),n=r.n(s),a=r("exGp"),o=r.n(a),i=r("SGRL"),c=r("olkN");e.a={beforeRouteEnter:function(t,e,r){c.a.getters.isUserLoggedIn?r():r("/login")},created:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.getSettings(t.$store.getters.user.id);case 3:r=e.sent,t.firstName=r.settings[0],t.lastName=r.settings[1],t.city=r.settings[2],t.state=r.settings[3],e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,t,[[0,10]])}))()},data:function(){return{firstName:"",lastName:"",city:"",state:"",required:function(t){return!!t||"Required."}}},methods:{onSubmit:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.postSettings([t.firstName,t.lastName,t.city,t.state],t.$store.getters.user.id);case 3:r=e.sent,r.success?t.$swal({title:"Success",text:"Settings upated",type:"success",timer:1e3,showConfirmButton:!1}).catch(t.$swal.noop):t.$swal({title:"Error",text:r.msg,type:"error",timer:1e3,showConfirmButton:!1}).catch(t.$swal.noop),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}}}},JhKW:function(t,e,r){"use strict";function s(t){r("HUVn")}var n=r("3v6S"),a=r("8fTd"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,"data-v-27703a94",null);e.a=c.exports},KnOo:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"app"}},[r("navbar"),t._v(" "),r("main",[r("v-container",[r("router-view",{attrs:{id:"content-wrapper"}})],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},LE9f:function(t,e){},M93x:function(t,e,r){"use strict";function s(t){r("uSq7")}var n=r("xJD8"),a=r("KnOo"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,null,null);e.a=c.exports},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("7+uW"),n=r("NYxO"),a=r("ORbq"),o=r("3EgV"),i=r.n(o),c=r("M93x"),u=r("9JMe"),l=(r.n(u),r("YaEn")),v=r("olkN"),d=r("ao/4"),f=r("JhKW");r.e(0).then(r.bind(null,"7zck")),s.a.use(n.a),s.a.use(a.a),s.a.use(i.a),s.a.use(d.a),s.a.config.productionTip=!1,s.a.component("panel",f.a),r.i(u.sync)(v.a,l.a),new s.a({el:"#app",store:v.a,router:l.a,template:"<App/>",components:{App:c.a}})},Ppqj:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[t.$store.getters.isUserLoggedIn?r("requests",{attrs:{allow:t.allowTradeRequest,decline:t.declineTradeRequest,cancel:t.cancelTradeRequest,books:t.books}}):t._e(),t._v(" "),r("panel",{attrs:{title:"All books"}},[t.books.length?r("v-list",t._l(t.books,function(e,s){return r("v-list-tile",{key:e.id,staticClass:"tile",attrs:{avatar:""}},[r("v-list-tile-avatar",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[e.imageLink?r("img",{attrs:{src:e.imageLink}}):t._e()])]),t._v(" "),r("v-list-tile-content",[e.author?r("v-list-tile-title",[r("a",{class:t.bookColor(e),attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                "+t._s(e.title)+" ("+t._s(e.author)+")\n                ")])]):r("v-list-tile-title",[r("a",{class:t.bookColor(e),attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                "+t._s(e.title)+" (unknown)\n                ")])])],1),t._v(" "),t.$store.state.user?r("v-list-tile-action",[t.userIsOwner(e)||0!==e.requestedBy?r("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:{html:"You cannot request this book"},expression:"{ html: 'You cannot request this book' }",arg:"left"}],attrs:{icon:""}},[r("v-icon",{staticClass:"add-icon deactivated grey--text"},[t._v("swap_horiz")])],1):r("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:{html:"Request this book"},expression:"{ html: 'Request this book' }",arg:"left"}],attrs:{icon:""},on:{click:function(r){t.requestTrade(e,s)}}},[r("v-icon",{staticClass:"add-icon green--text"},[t._v("swap_horiz")])],1)],1):t._e()],1)})):t._t("default",[t._v("\n          There are no books for trade\n        ")])],2)],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},QmSG:function(t,e,r){"use strict";e.a={serverAddress:""}},SGRL:function(t,e,r){"use strict";var s=r("7+uW"),n=r("olkN"),a=r("QmSG"),o=a.a.serverAddress;e.a={login:function(t){return s.a.http.post(o+"/api/login",{username:t.username,password:t.password}).then(i,c)},register:function(t){return s.a.http.post(o+"/api/register",{username:t.username,email:t.email,password:t.password}).then(i,c)},getSettings:function(t){return console.log(),s.a.http.get(o+"/api/settings",{headers:{Authorization:"Bearer "+n.a.state.token}}).then(i,c)},postSettings:function(t,e){return s.a.http.post(o+"/api/settings",{settings:t},{headers:{Authorization:"Bearer "+n.a.state.token}}).then(i,c)}};var i=function(t){return t.json()},c=function(t){return console.log(t)}},"V/3R":function(t,e,r){"use strict";var s=r("pFYg"),n=r.n(s),a=r("7+uW"),o=r("QmSG"),i=r("olkN"),c=o.a.serverAddress;e.a={searchBook:function(t){return a.a.http.post(c+"/api/searchBook",{searchTerm:t},{headers:{Authorization:"Bearer "+i.a.state.token}}).then(u,l)},requestTrade:function(t,e){return a.a.http.post(c+"/api/requestTrade",{bookId:t,user:e},{headers:{Authorization:"Bearer "+i.a.state.token}}).then(u,l)},addBook:function(t,e,r,s,o){return e="object"===(void 0===e?"undefined":n()(e))?e.join(", "):"",a.a.http.post(c+"/api/addBook",{title:t.substring(0,120),author:e,previewLink:s,imageLink:o},{headers:{Authorization:"Bearer "+i.a.state.token}}).then(u,l)},getAllBooks:function(){return a.a.http.get(c+"/api/books").then(u,l)},getBooksByUser:function(){return a.a.http.get(c+"/api/user-books/",{headers:{Authorization:"Bearer "+i.a.state.token}}).then(u,l)},deleteBook:function(t){return a.a.http.delete(c+"/api/book/"+t,{headers:{Authorization:"Bearer "+i.a.state.token}}).then(u,l)},allowTradeRequest:function(t){return a.a.http.patch(c+"/api/trade",{bookId:t},{headers:{Authorization:"Bearer "+i.a.state.token}}).then(u,l)},declineTradeRequest:function(t){return a.a.http.patch(c+"/api/trade/decline",{bookId:t},{headers:{Authorization:"Bearer "+i.a.state.token}}).then(u,l)},cancelTradeRequest:function(t){return a.a.http.patch(c+"/api/trade/cancel",{bookId:t},{headers:{Authorization:"Bearer "+i.a.state.token}}).then(u,l)}};var u=function(t){return t.json()},l=function(t){return console.log(t)}},WkmR:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("panel",{attrs:{title:"Register"}},[r("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("v-text-field",{attrs:{name:"username",label:"Enter Username",rules:[t.required],required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),r("v-text-field",{attrs:{rules:[t.required],name:"email",label:"Enter Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{rules:[t.required],name:"password",label:"Enter Password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-text-field",{attrs:{name:"confirmPassword",rules:[t.required],label:"Confirm Password",type:"password",required:""},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),t._v(" "),r("v-btn",{attrs:{type:"submit",primary:"",disabled:!t.formIsValid}},[t._v("Submit")])],1)],1)],1)])],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},XDci:function(t,e){},YaEn:function(t,e,r){"use strict";var s=r("7+uW"),n=r("/ocq"),a=r("lO7g"),o=r("dIqY"),i=r("xJsL"),c=r("o9cx"),u=r("niH5");s.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:a.a},{path:"/home",redirect:{name:"Home"}},{path:"/register",name:"Register",component:o.a},{path:"/login",name:"Login",component:i.a},{path:"/profile",redirect:{name:"Profile"}},{path:"/my-books",name:"Profile",component:c.a},{path:"/settings",name:"Settings",component:u.a}]})},ZA2R:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",{attrs:{row:""}},[r("v-expansion-panel",{attrs:{expand:""}},[r("v-flex",{staticClass:"outset",attrs:{xs12:""}},[r("v-expansion-panel-content",{staticClass:"pl-4 pr-4 pt-2 pb-2 green lighten-2"},[r("div",{slot:"header"},[t._v("Trade Requests For You ("+t._s(t.requestsForUser().length)+")")]),t._v(" "),t._l(t.requestsForUser(),function(e,s){return r("v-list-tile",{key:e.id,staticClass:"tile green lighten-2",attrs:{avatar:""}},[r("v-list-tile-avatar",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[e.imageLink?r("img",{attrs:{src:e.imageLink}}):t._e()])]),t._v(" "),r("v-list-tile-content",[e.author?r("v-list-tile-title",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                  "+t._s(e.title)+" ("+t._s(e.author)+")\n                ")])]):r("v-list-tile-title",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                  "+t._s(e.title)+" (unknown)\n                ")])])],1),t._v(" "),r("v-list-tile-action",[r("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:{html:"Accept trade request"},expression:"{ html: 'Accept trade request' }",arg:"left"}],attrs:{icon:""},on:{click:function(r){t.allow(e)}}},[r("v-icon",{staticClass:"add-icon green--text text--darken-4"},[t._v("done")])],1)],1),t._v(" "),r("v-list-tile-action",[r("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:{html:"Decline trade request"},expression:"{ html: 'Decline trade request' }",arg:"left"}],attrs:{icon:""},on:{click:function(r){t.decline(e)}}},[r("v-icon",{staticClass:"add-icon red--text text--darken-4"},[t._v("sync_disabled")])],1)],1)],1)})],2),t._v(" "),r("v-expansion-panel-content",{staticClass:"pl-4 pr-4 pt-2 pb-2 deep-orange lighten-2"},[r("div",{slot:"header"},[t._v("Your Trade Requests ("+t._s(t.requestsByUser().length)+")")]),t._v(" "),t._l(t.requestsByUser(),function(e,s){return r("v-list-tile",{key:e.id,staticClass:"tile deep-orange lighten-2",attrs:{avatar:""}},[r("v-list-tile-avatar",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[e.imageLink?r("img",{attrs:{src:e.imageLink}}):t._e()])]),t._v(" "),r("v-list-tile-content",[e.author?r("v-list-tile-title",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                  "+t._s(e.title)+" ("+t._s(e.author)+")\n                ")])]):r("v-list-tile-title",[r("a",{attrs:{href:e.previewLink,target:"_blank"}},[t._v("\n                  "+t._s(e.title)+" (unknown)\n                ")])])],1),t._v(" "),r("v-list-tile-action",[r("v-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:{html:"Cancel trade request"},expression:"{ html: 'Cancel trade request' }",arg:"left"}],attrs:{icon:""},on:{click:function(r){t.cancel(e)}}},[r("v-icon",{staticClass:"add-icon red--text text--darken-4"},[t._v("sync_disabled")])],1)],1)],1)})],2)],1)],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},"ao/4":function(t,e,r){"use strict";var s=r("PBfN"),n=r.n(s);r("x36W");var a={};a.install=function(t){t.prototype.$swal=n.a},e.a=a},dIqY:function(t,e,r){"use strict";function s(t){r("LE9f")}var n=r("JJT7"),a=r("WkmR"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,null,null);e.a=c.exports},fd9b:function(t,e){},kNwE:function(t,e){},l0zJ:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("panel",{attrs:{title:"Login"}},[r("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("v-text-field",{attrs:{name:"username",rules:[t.required],label:"Enter Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),r("v-text-field",{attrs:{name:"password",label:"Enter Password",type:"password",rules:[t.required],required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-btn",{attrs:{type:"submit",primary:"",disabled:!t.formIsValid}},[t._v("Submit")])],1)],1)],1)])],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},lEDJ:function(t,e,r){"use strict";r("olkN"),r("V/3R");e.a={data:function(){return{}},props:["books","allow","decline","cancel"],methods:{requestsForUser:function(){var t=this;return this.books.filter(function(e){return e.requestedBy&&e.ownerId===t.$store.getters.user.id})},requestsByUser:function(){var t=this;return this.books.filter(function(e){return e.requestedBy===t.$store.getters.user.id})}}}},lO7g:function(t,e,r){"use strict";function s(t){r("kNwE")}var n=r("Fs8J"),a=r("Ppqj"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,"data-v-16b7ec9d",null);e.a=c.exports},lfLh:function(t,e,r){"use strict";function s(t){r("XDci")}var n=r("Drc2"),a=r("+HYy"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,"data-v-455081ce",null);e.a=c.exports},"nKb+":function(t,e,r){"use strict";var s=r("Xxa5"),n=r.n(s),a=r("exGp"),o=r.n(a),i=r("SGRL"),c=r("olkN");e.a={beforeRouteEnter:function(t,e,r){c.a.getters.auth?r("/home"):r()},data:function(){return{username:"",password:"",required:function(t){return!!t||"Required."}}},computed:{formIsValid:function(){return""!==this.username&&""!==this.password}},methods:{onSubmit:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.login({username:t.username,password:t.password});case 3:r=e.sent;try{t.handleSuccess(r)}catch(e){t.handleRejection(e,r)}e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.handleRejection(e.t0,data);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},handleSuccess:function(t){if(!t.success)throw new Error;this.$store.dispatch("setToken",t.token),this.$store.dispatch("setUser",t.user),this.$swal({title:"Success",text:"Successfully logged in, you are now being redirected",type:"success",timer:1e3,showConfirmButton:!1}).then(function(){},function(t){this.$router.push("home")}.bind(this))},handleRejection:function(t,e){1===e.status&&(this.username=""),this.password="",this.$swal({title:"Error",text:e.msg,type:"error",timer:1e3,showConfirmButton:!1}).catch(this.$swal.noop)}}}},niH5:function(t,e,r){"use strict";function s(t){r("vCjs")}var n=r("JZSy"),a=r("+maZ"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,null,null);e.a=c.exports},o9cx:function(t,e,r){"use strict";function s(t){r("BBJI")}var n=r("yoF/"),a=r("/Idh"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,"data-v-0e2b2d4a",null);e.a=c.exports},olkN:function(t,e,r){"use strict";var s=r("7+uW"),n=r("NYxO"),a=r("qQWK"),o=r.n(a);r("SGRL");s.a.use(n.a);var i={token:null,user:null,isUserLoggedIn:!1},c={setUser:function(t,e){return t.user=e},setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e}},u={setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}},l={isUserLoggedIn:function(t){return t.isUserLoggedIn},user:function(t){return t.user}};e.a=new n.a.Store({state:i,getters:l,mutations:c,actions:u,plugins:[o()()]})},rgRx:function(t,e){},uSq7:function(t,e){},vCjs:function(t,e){},x36W:function(t,e){},xJD8:function(t,e,r){"use strict";var s=r("lfLh");e.a={name:"app",components:{navbar:s.a}}},xJsL:function(t,e,r){"use strict";function s(t){r("rgRx")}var n=r("nKb+"),a=r("l0zJ"),o=r("VU/8"),i=s,c=o(n.a,a.a,i,null,null);e.a=c.exports},"yoF/":function(t,e,r){"use strict";var s=r("Xxa5"),n=r.n(s),a=r("exGp"),o=r.n(a),i=r("olkN"),c=r("V/3R");e.a={beforeRouteEnter:function(t,e,r){i.a.getters.isUserLoggedIn?r():r("/login")},created:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.getBooksByUser(t.$store.getters.user.id);case 3:r=e.sent,t.books=r.books||[],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},data:function(){return{searchTerm:"",results:[],books:[],searchPending:!1}},computed:{formIsValid:function(){return""!==this.searchTerm.trim()}},methods:{removeBook:function(t,e){var r=this;return o()(n.a.mark(function s(){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return r.books.splice(e,1),s.next=3,c.a.deleteBook(t.id);case 3:case"end":return s.stop()}},s,r)}))()},addToMyBooks:function(t){var e=this;return o()(n.a.mark(function r(){var s,a;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s=t.imageLinks?t.imageLinks.smallThumbnail:"",e.books.push({author:t.authors?t.authors.join(", "):"unknown",title:t.title,previewLink:t.previewLink,imageLink:s}),r.prev=2,r.next=5,c.a.addBook(t.title,t.authors,e.$store.getters.user.id,t.previewLink,s);case 5:a=r.sent,e.onAddSuccess(a),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),e.onAddError(r.t0);case 12:case"end":return r.stop()}},r,e,[[2,9]])}))()},onAddSuccess:function(t){this.books[this.books.length-1].id=t.id},onAddError:function(t){console.log(t)},onSubmit:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.results=[],t.searchPending=!0,e.prev=2,e.next=5,c.a.searchBook(t.searchTerm);case 5:r=e.sent,t.onSubmitSuccess(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t.onSubmitError(e.t0);case 12:case"end":return e.stop()}},e,t,[[2,9]])}))()},onSubmitSuccess:function(t){var e=this;this.searchPending=!1,t.info.forEach(function(t){t.volumeInfo.id=t.id,e.results.push(t.volumeInfo)})},onSubmitError:function(t,e){console.log(t,e)}}}}},["NHnr"]);
//# sourceMappingURL=app.ef3ff07cef7114532846.js.map