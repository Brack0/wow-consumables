(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"De/G":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fXoL"),a=i("ofXK");function r(t,e){if(1&t&&(n.Rb(0,"div",5),n.wc(1),n.Qb()),2&t){const t=n.dc();n.Bb(1),n.yc("x",t.wantedNumber/t.craftNumber,"")}}function c(t,e){if(1&t&&(n.Rb(0,"div",5),n.wc(1),n.ec(2,"number"),n.Qb()),2&t){const t=n.dc();n.Bb(1),n.xc(n.fc(2,1,t.craftNumber,".0-1"))}}let o=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-material"]],inputs:{material:"material",wantedNumber:"wantedNumber",craftNumber:"craftNumber"},decls:7,vars:4,consts:[[1,"material"],[1,"icon-number"],[1,"itemRef",3,"href"],["class","number",4,"ngIf"],[1,"name"],[1,"number"]],template:function(t,e){1&t&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Nb(2,"a",2),n.vc(3,r,2,1,"div",3),n.vc(4,c,3,4,"div",3),n.Qb(),n.Rb(5,"div",4),n.wc(6),n.Qb(),n.Qb()),2&t&&(n.Bb(2),n.kc("href","https://www.wowhead.com/item=",e.material.idMaterial,"",n.qc),n.Bb(1),n.ic("ngIf",e.wantedNumber>0),n.Bb(1),n.ic("ngIf",e.wantedNumber<0),n.Bb(2),n.xc(e.material.name))},directives:[a.k],pipes:[a.d],styles:[".material[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;height:100px}.material[_ngcontent-%COMP%]   .icon-number[_ngcontent-%COMP%]{height:68px;width:68px;margin:auto;text-align:center;position:relative}.material[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:32px;color:#fff;z-index:1;position:absolute;vertical-align:middle;top:16px;left:0;right:0;bottom:0;pointer-events:none;text-shadow:2px 0 0 #000,-2px 0 0 #000,0 2px 0 #000,0 -2px 0 #000,1px 1px #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000}.material[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Verdana,Open Sans,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:12px}"],changeDetection:0}),t})()},MfWY:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("fXoL");let a=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-specialization"]],inputs:{specialization:"specialization"},decls:4,vars:2,consts:[[1,"specialization"],[1,"icon",3,"src"],[1,"name"]],template:function(t,e){1&t&&(n.Rb(0,"div",0),n.Nb(1,"img",1),n.Rb(2,"div",2),n.wc(3),n.Qb(),n.Qb()),2&t&&(n.Bb(1),n.jc("src",e.specialization.icon,n.qc),n.Bb(2),n.xc(e.specialization.name))},styles:[".specialization[_ngcontent-%COMP%]{display:grid;grid-template-columns:20px 1fr;margin:0 auto}.specialization[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;text-align:left;height:22px;width:50px;font-variant:small-caps;font-family:Verdana,Open Sans,Arial,Helvetica Neue,Helvetica,sans-serif;letter-spacing:-1px}.specialization[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{vertical-align:middle;height:18px}"],changeDetection:0}),t})()},Ooj0:function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i("fXoL"),a=i("ofXK"),r=i("De/G");function c(t,e){if(1&t&&(n.Rb(0,"div"),n.Nb(1,"app-material",6),n.Qb()),2&t){const t=e.$implicit;n.Bb(1),n.ic("material",t.component)("wantedNumber",-1)("craftNumber",t.amount)}}function o(t,e){if(1&t&&(n.Rb(0,"div",4),n.vc(1,c,2,3,"div",5),n.Qb()),2&t){const t=n.dc();n.Bb(1),n.ic("ngForOf",t.materialCategory.requiredMaterialArray)}}function s(t,e){if(1&t&&(n.Rb(0,"div"),n.Nb(1,"app-material",8),n.Qb()),2&t){const t=e.$implicit;n.Bb(1),n.ic("material",t)}}function l(t,e){if(1&t&&(n.Rb(0,"div",7),n.vc(1,s,2,1,"div",5),n.Qb()),2&t){const t=n.dc();n.Bb(1),n.ic("ngForOf",t.materialCategory.materialArray)}}let p=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["app-material-grid"]],inputs:{materialCategory:"materialCategory"},decls:6,vars:3,consts:[[1,"h3-container"],[1,"box-border-container"],["class","grid-container-required-material",4,"ngIf"],["class","grid-container-material",4,"ngIf"],[1,"grid-container-required-material"],[4,"ngFor","ngForOf"],[3,"material","wantedNumber","craftNumber"],[1,"grid-container-material"],[3,"material"]],template:function(t,e){1&t&&(n.Rb(0,"div",0),n.Rb(1,"h3"),n.wc(2),n.Qb(),n.Rb(3,"div",1),n.vc(4,o,2,1,"div",2),n.vc(5,l,2,1,"div",3),n.Qb(),n.Qb()),2&t&&(n.Bb(2),n.xc(e.materialCategory.category),n.Bb(2),n.ic("ngIf",e.materialCategory.requiredMaterialArray),n.Bb(1),n.ic("ngIf",e.materialCategory.materialArray))},directives:[a.k,a.j,r.a],styles:[".h3-container[_ngcontent-%COMP%]{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);border-radius:3px;margin:30px 5px}.h3-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:1px;height:35px;display:flex;align-items:center;justify-content:center;margin-bottom:0;border:1px solid rgba(27,31,35,.15);border-bottom:0;font-family:Roboto,Helvetica Neue,sans-serif}.h3-container[_ngcontent-%COMP%]   .grid-container-material[_ngcontent-%COMP%], .h3-container[_ngcontent-%COMP%]   .grid-container-required-material[_ngcontent-%COMP%]{padding:20px 0;display:grid;grid-template-columns:repeat(auto-fit,100px);grid-gap:3em;justify-content:space-evenly}"],changeDetection:0}),t})()},RwbQ:function(t,e,i){"use strict";var n=i("fXoL"),a=i("ZF+8");let r=(()=>{class t{constructor(t,e){this.stateService=t,this.cd=e,this.tabIndex=0}ngOnInit(){this.initFirstTab()}callRefreshWowTooltip(){this.tabInit[this.tabIndex]||(this.stateService.callRefreshWowTooltip(),this.tabInit[this.tabIndex]=!0)}initFirstTab(){this.stateService.callRefreshWowTooltip(),this.tabInit=[!0]}getRequiredMaterial(t){this.stateService.getRequiredMaterial(t).subscribe(t=>{this.requiredMaterials=t,this.stateService.callRefreshWowTooltip(),this.cd.markForCheck()})}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(a.a),n.Mb(n.h))},t.\u0275dir=n.Hb({type:t}),t})();i.d(e,"a",(function(){return r}))}}]);