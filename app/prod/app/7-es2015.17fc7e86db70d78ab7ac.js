(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{aqVg:function(t,e,s){"use strict";s.r(e),s.d(e,"GagsModule",(function(){return C}));var i=s("tyNb"),n=s("fXoL");class r{constructor(){this.validations=null,this.fields=[],this.id="",this.touched=!1}getName(){return this.constructor.name}from(t){return t?(Object.getOwnPropertyNames(t).forEach(e=>this[e]=t[e]),t._id&&(this.id=t._id),this):this}getPlainForm(){let t={};return this.fields.forEach(e=>t[e]=[""]),t}getData(){let t={};return this.fields.forEach(e=>t[e]=this[e]||null),t}clone(){return Object.assign(Object.create(Object.getPrototypeOf(this)),this)}validate(){if(!this.validations)return{ok:!0};let t=Object.keys(this.validations),e=!0,s=[];return t.forEach(t=>{this.validations[t].forEach(i=>{let n=this.validateKey(t,i);!0!==n&&(e=!1,s.push({key:t,error:n}))})}),e?{ok:!0}:{ok:!1,errors:s}}getFunctionName(t){let e=t.name.split(" ");return e[e.length-1]}validateKey(t,e){return"required"==e?!!this[t]||e:e instanceof Function?!!e()||this.getFunctionName(e):void 0}displayErrors(t){let e="";return t.forEach(t=>e+=t.key+" is "+t.error+";\n"),e}}r.prototype.toString=function(){let t="{ CLASS "+this.getName()+" => ";return Object.getOwnPropertyNames(this).forEach(e=>{"validations"!=e&&(t+='"'+e+'": "'+this[e]+'"; ')}),t+="}",t};class a extends r{constructor(){super(...arguments),this.fields=["id","content","author","location","origin","date","used_in"]}getOrigin(){switch(this.origin){case"twitter":return'<i class="fab fa-twitter"></i>&nbsp; Twitter';case"kindle":return'<i class="fa fa-book"></i>&nbsp; Kindle';default:return`<i class="fa fa-question-circle"></i> Unknown (${this.origin})`}}getLocation(){switch(this.origin){case"twitter":return`<a href="https://twitter.com/${this.author}/status/${this.location}" target="_blank">${this.location}</a>`;default:return this.location}}}var c=s("+1Bj");let o=(()=>{class t{constructor(t){this.GagsApi=t}search(t){return this.GagsApi.Search(t).map(t=>{if(!t.success)return{hasMore:!1,list:[]};let e=t.data.map(t=>(new a).from(t));return{hasMore:t.has_more,list:e}})}}return t.\u0275fac=function(e){return new(e||t)(n.Tb(c.a))},t.\u0275prov=n.Gb({token:t,factory:t.\u0275fac}),t})();var l=s("3Pt+"),u=s("ofXK");function h(t,e){if(1&t&&(n.Pb(0,"span",3),n.lc(1),n.Ob()),2&t){const t=n.Zb();n.zb(1),n.mc(t.subcaption)}}let b=(()=>{class t{constructor(){this.action=new n.n,this.btclass=[]}ngOnInit(){this.Initialize()}applyCustomClass(){this.extraClass&&(this.btclass=[].concat(this.extraClass))}preFab(){switch(this.type){case"save":this.btclass.push("btn-outline-success"),this.icon="save",this.caption="Salvar";break;case"cancel":this.btclass.push("btn-outline-danger"),this.icon="times-circle",this.caption="Cancelar";break;case"load-more":this.caption="Carregar mais",this.icon="plus-square",this.btclass.push("btn-outline-primary");break;case"search":this.caption="Buscar",this.icon="search",this.btclass.push("btn-secondary"),this.btclass.push("btn-rounded");break;case"primary":this.btclass.push("btn-primary");break;case"outline-primary":this.btclass.push("btn-outline-primary");break;case"success":this.btclass.push("btn-outline-success");break;case"danger":this.btclass.push("btn-outline-danger");break;case"primary-outline":this.btclass.push("btn-outline-primary");break;default:this.btclass.push("btn-outline-secondary")}}Initialize(){this.applyCustomClass(),this.preFab()}doAction(){this.action.next()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Eb({type:t,selectors:[["platypus-button"]],inputs:{type:"type",btnId:"btnId",caption:"caption",subcaption:"subcaption",icon:"icon",extraClass:"extraClass"},outputs:{action:"action"},decls:4,vars:5,consts:[[1,"btn","transition",3,"ngClass","id","click"],[1,"fa",3,"ngClass"],["class","subcaption",4,"ngIf"],[1,"subcaption"]],template:function(t,e){1&t&&(n.Pb(0,"button",0),n.Xb("click",(function(){return e.doAction()})),n.Lb(1,"i",1),n.lc(2),n.kc(3,h,2,1,"span",2),n.Ob()),2&t&&(n.dc("id",e.btnId),n.cc("ngClass",e.btclass),n.zb(1),n.cc("ngClass","fa-"+e.icon),n.zb(1),n.nc(" ",e.caption," "),n.zb(1),n.cc("ngIf",e.subcaption))},directives:[u.i,u.k],styles:[".small[_ngcontent-%COMP%]{font-size:12px;padding:5px 10px}.subcaption[_ngcontent-%COMP%]{width:100%;font-size:.8rem;font-style:italic;float:left}"]}),t})(),p=(()=>{class t{constructor(t,e){this.router=t,this.route=e,this.query="",this.author="",this.search=new n.n}ngOnInit(){this.route.queryParams.subscribe(t=>{let e=!1;t.q&&(this.query=t.q,"0"==this.query?this.query="":e=!0),t.author&&(this.author=t.author,"0"==this.author?this.author="":e=!0,e=!0),e&&this.filter()})}updateUrl(t){this.router.navigate([],{relativeTo:this.route,queryParams:t})}filter(){let t={};this.query&&(t.q=this.query),this.author&&(t.author=this.author),this.updateUrl(t),this.search.emit(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(i.c),n.Kb(i.a))},t.\u0275cmp=n.Eb({type:t,selectors:[["search-bar"]],outputs:{search:"search"},decls:16,vars:2,consts:[[1,"row"],[1,"col-md-2","lbl"],["for","query"],[1,"col-md-10"],[1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],[1,"row","submit"],[1,"col-md-8"],[1,"col-md-4"],["extraClass","btn-100","type","search","caption","Search",3,"click"]],template:function(t,e){1&t&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.Pb(2,"label",2),n.lc(3,"Query:"),n.Ob(),n.Ob(),n.Pb(4,"div",3),n.Pb(5,"input",4),n.Xb("ngModelChange",(function(t){return e.query=t}))("keyup.enter",(function(){return e.filter()})),n.Ob(),n.Ob(),n.Ob(),n.Pb(6,"div",0),n.Pb(7,"div",1),n.Pb(8,"label",2),n.lc(9,"Author:"),n.Ob(),n.Ob(),n.Pb(10,"div",3),n.Pb(11,"input",4),n.Xb("ngModelChange",(function(t){return e.author=t}))("keyup.enter",(function(){return e.filter()})),n.Ob(),n.Ob(),n.Ob(),n.Pb(12,"div",5),n.Lb(13,"div",6),n.Pb(14,"div",7),n.Pb(15,"platypus-button",8),n.Xb("click",(function(){return e.filter()})),n.Ob(),n.Ob(),n.Ob()),2&t&&(n.zb(5),n.cc("ngModel",e.query),n.zb(6),n.cc("ngModel",e.author))},directives:[l.a,l.f,l.h,b],styles:[".lbl{text-align:right;padding-top:10px}.submit{margin:10px 0}div{margin:0}"],encapsulation:2}),t})();var g=s("r+JB");let d=(()=>{class t{constructor(t){this.navigation=t,this.item=null}getAuthor(){return this.item.author?this.item.author.replace(/ *\([^)]*\) */g,""):""}SearchAuthor(){let t=this.getAuthor();this.navigation.searchAuthor(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(g.a))},t.\u0275cmp=n.Eb({type:t,selectors:[["gag-item"]],inputs:{item:"item"},decls:16,vars:8,consts:[[1,"row"],[1,"col-sm-12","content"],[1,"row","origin"],[1,"col-md-4","location"],[3,"innerHTML"],[1,"date"],[1,"fa","fa-calendar"],[1,"col-md-8","author","right",3,"click"]],template:function(t,e){1&t&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.lc(2),n.Ob(),n.Ob(),n.Pb(3,"div",2),n.Pb(4,"div",3),n.Lb(5,"span",4),n.Lb(6,"br"),n.Lb(7,"span",4),n.Lb(8,"br"),n.Pb(9,"span",5),n.lc(10," \xa0\xa0\xa0 "),n.Lb(11,"i",6),n.lc(12),n.ac(13,"date"),n.Ob(),n.Ob(),n.Pb(14,"div",7),n.Xb("click",(function(){return e.SearchAuthor()})),n.lc(15),n.Ob(),n.Ob()),2&t&&(n.zb(2),n.nc(" ",e.item.content," "),n.zb(3),n.cc("innerHTML",e.item.getOrigin(),n.gc),n.zb(2),n.cc("innerHTML",e.item.getLocation(),n.gc),n.zb(5),n.nc("\xa0\xa0\xa0 ",n.bc(13,5,e.item.date,"dd/MM/yyyy")," "),n.zb(3),n.nc(" ~ ",e.item.author," "))},pipes:[u.d],styles:[".content{white-space:pre-wrap;padding:20px 30px 0 50px;font-family:monospace;font-size:14px}.origin{color:#555;margin:10px 5px 50px;border-bottom:1px solid #ccc}.author{cursor:pointer}"],encapsulation:2}),t})();function f(t,e){if(1&t&&(n.Pb(0,"div",1),n.Pb(1,"div",4),n.lc(2),n.Ob(),n.Ob()),2&t){const t=n.Zb();n.zb(2),n.nc(" ",t.gags.length," results: ")}}function m(t,e){1&t&&n.Lb(0,"gag-item",5),2&t&&n.cc("item",e.$implicit)}let v=(()=>{class t{constructor(){this.loading=!0,this.gags=[],this.itemClick=new n.n,this.Initialize()}Initialize(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Eb({type:t,selectors:[["gag-list"]],inputs:{gags:"gags"},outputs:{itemClick:"itemClick"},decls:4,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-sm-12"],[3,"item",4,"ngFor","ngForOf"],[1,"col-sm-12","right","count"],[3,"item"]],template:function(t,e){1&t&&(n.kc(0,f,3,1,"div",0),n.Pb(1,"div",1),n.Pb(2,"div",2),n.kc(3,m,1,1,"gag-item",3),n.Ob(),n.Ob()),2&t&&(n.cc("ngIf",null==e.gags?null:e.gags.length),n.zb(3),n.cc("ngForOf",e.gags))},directives:[u.k,u.j,d],styles:[""],encapsulation:2}),t})(),y=(()=>{class t{constructor(){this.extraClass=""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Eb({type:t,selectors:[["mag-loading"]],inputs:{extraClass:"extraClass"},decls:1,vars:1,consts:[[1,"spinner",3,"ngClass"]],template:function(t,e){1&t&&n.Lb(0,"div",0),2&t&&n.cc("ngClass",e.extraClass)},directives:[u.i],styles:[".spinner[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#333;margin:100px auto;-webkit-animation:sk-rotateplane 1.2s ease-in-out infinite;animation:sk-rotateplane 1.2s ease-in-out infinite}.spinner.inline[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:8px}.spinner.inline[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:10px;height:10px;margin-right:5px}.spinner.small[_ngcontent-%COMP%]{height:20px;margin:0;width:50px}.spinner.white[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#fff}@-webkit-keyframes sk-rotateplane{0%{-webkit-transform:perspective(120px)}50%{-webkit-transform:perspective(120px) rotateY(180deg)}to{-webkit-transform:perspective(120px) rotateY(180deg) rotateX(180deg)}}@keyframes sk-rotateplane{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg);-webkit-transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg);-webkit-transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"]}),t})();function O(t,e){if(1&t){const t=n.Qb();n.Pb(0,"div",0),n.Pb(1,"div",7),n.Pb(2,"platypus-button",8),n.Xb("click",(function(){return n.fc(t),n.Zb().nextPage()})),n.Ob(),n.Ob(),n.Ob()}}function k(t,e){1&t&&(n.Pb(0,"div",0),n.Pb(1,"div",9),n.Lb(2,"i",10),n.lc(3,"\xa0 No results found "),n.Ob(),n.Ob())}function P(t,e){1&t&&(n.Pb(0,"div",0),n.Pb(1,"div",4),n.Lb(2,"mag-loading"),n.Ob(),n.Ob())}const w=[{path:"",component:(()=>{class t{constructor(t){this.GagsService=t,this.loading=!1,this.searchData=null,this.list=[],this.moreContent=!1,this.noResults=!1,this.page=0,this.qtt=50}ngOnInit(){}getPage(){this.GagsService.search(Object.assign(Object.assign({},this.searchData),{page:this.page,qtt:this.qtt})).subscribe(t=>{this.list=this.list.concat(t.list),0==this.list.length&&(this.noResults=!0),this.moreContent=t.hasMore,this.loading=!1})}resetSearch(){this.list=[],this.noResults=!1,this.page=0}search(t){this.loading=!0,this.resetSearch(),this.searchData=t,this.getPage()}nextPage(){this.loading=!0,this.page++,this.getPage()}}return t.\u0275fac=function(e){return new(e||t)(n.Kb(o))},t.\u0275cmp=n.Eb({type:t,selectors:[["ng-component"]],decls:11,vars:4,consts:[[1,"row"],[1,"col-xs-12","container"],[1,"col-sm-12","search"],[3,"search"],[1,"col-sm-12","result"],[3,"gags"],["class","row",4,"ngIf"],[1,"col-sm-12","right"],["type","load-more",3,"click"],[1,"col-sm-12","no-results"],[1,"fa","fa-times-circle"]],template:function(t,e){1&t&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.Pb(2,"div",0),n.Pb(3,"div",2),n.Pb(4,"search-bar",3),n.Xb("search",(function(t){return e.search(t)})),n.Ob(),n.Ob(),n.Ob(),n.Pb(5,"div",0),n.Pb(6,"div",4),n.Lb(7,"gag-list",5),n.Ob(),n.Ob(),n.kc(8,O,3,0,"div",6),n.kc(9,k,4,0,"div",6),n.kc(10,P,3,0,"div",6),n.Ob(),n.Ob()),2&t&&(n.zb(7),n.cc("gags",e.list),n.zb(1),n.cc("ngIf",e.moreContent),n.zb(1),n.cc("ngIf",e.noResults),n.zb(1),n.cc("ngIf",e.loading))},directives:[p,v,u.k,b,y],styles:[".container{width:80%;margin:20px auto}.search{border-bottom:1px solid #555}.no-results{padding:100px}"],encapsulation:2}),t})(),pathMatch:"full"}];var x=s("d2mR");let C=(()=>{class t{}return t.\u0275mod=n.Ib({type:t}),t.\u0275inj=n.Hb({factory:function(e){return new(e||t)},providers:[o],imports:[[i.d.forChild(w),x.a]]}),t})()}}]);