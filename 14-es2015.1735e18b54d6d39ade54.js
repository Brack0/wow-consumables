(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{QW0Q:function(t,i,e){"use strict";e.r(i);var n=e("ofXK"),a=e("tyNb"),r=e("PCNd"),o=e("nqVa"),c=e("fXoL"),s=e("ZF+8"),p=e("rN5V"),b=e("MfWY"),d=e("Ooj0");function g(t,i){if(1&t&&(c.Sb(0,"div"),c.Ob(1,"app-specialization",5),c.Rb()),2&t){const t=i.$implicit;c.Bb(1),c.jc("specialization",t)}}function l(t,i){if(1&t&&(c.Sb(0,"div"),c.Ob(1,"app-material-grid",6),c.Rb()),2&t){const t=i.$implicit;c.Bb(1),c.jc("materialCategory",t)}}let u=(()=>{class t extends o.a{constructor(t,i,e){super(t,i,e),this.stateService=t,this.wowheadService=i,this.cd=e}ngOnInit(){super.ngOnInit(),this.getData()}getData(){this.stateService.getSpecializations().subscribe(t=>{this.specializations=t}),this.stateService.getMaterials().subscribe(t=>{this.materialCategories=t})}}return t.\u0275fac=function(i){return new(i||t)(c.Nb(s.a),c.Nb(p.c),c.Nb(c.h))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-overview"]],features:[c.yb],decls:8,vars:2,consts:[[1,"main-content"],[1,"h3-container"],[1,"box-border-container"],[1,"grid-container-specialization"],[4,"ngFor","ngForOf"],[3,"specialization"],[3,"materialCategory"]],template:function(t,i){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"h3"),c.yc(3,"Specializations"),c.Rb(),c.Sb(4,"div",2),c.Sb(5,"div",3),c.xc(6,g,2,1,"div",4),c.Rb(),c.Rb(),c.Rb(),c.xc(7,l,2,1,"div",4),c.Rb()),2&t&&(c.Bb(6),c.jc("ngForOf",i.specializations),c.Bb(1),c.jc("ngForOf",i.materialCategories))},directives:[n.l,b.a,d.a],styles:[".h3-container[_ngcontent-%COMP%]{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);border-radius:3px;margin:30px 5px}.h3-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:1px;height:35px;display:flex;align-items:center;justify-content:center;margin-bottom:0;border:1px solid rgba(27,31,35,.15);border-bottom:0;font-family:Roboto,Helvetica Neue,sans-serif}.h3-container[_ngcontent-%COMP%]   .grid-container-specialization[_ngcontent-%COMP%]{padding:20px 0;display:grid;grid-gap:.5rem;justify-content:center}"],changeDetection:0}),t})();e.d(i,"routes",(function(){return f})),e.d(i,"OverviewModule",(function(){return h}));const f=[{path:"",component:u}];let h=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(i){return new(i||t)},imports:[[n.c,a.d.forChild(f),r.a],a.d]}),t})()}}]);