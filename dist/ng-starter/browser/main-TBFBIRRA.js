import{a as r,b as n,c as p,d as i,e as d,f as C,g as y,h as m,i as c,j as g}from"./chunk-N4ELNHEQ.js";var a=class o{constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=n({type:o,selectors:[["app-full-layout"]],decls:1,vars:0,template:function(t,h){t&1&&i(0,"router-outlet")},dependencies:[m],encapsulation:2})};var M=[{path:"home",loadChildren:()=>import("./chunk-VSG435KX.js").then(o=>o.PagesModule)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"home",pathMatch:"full"}];var v=[{path:"",component:a,children:M}],s=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=p({type:o});static \u0275inj=r({imports:[c.forRoot(v),c]})};var l=class o{title="ngStarter";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=n({type:o,selectors:[["app-root"]],decls:1,vars:0,template:function(t,h){t&1&&i(0,"router-outlet")},dependencies:[m]})};var u=class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=p({type:o,bootstrap:[l]});static \u0275inj=r({providers:[y()],imports:[C,s,g]})};d().bootstrapModule(u,{ngZoneEventCoalescing:!0}).catch(o=>console.error(o));