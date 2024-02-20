"use strict";(self.webpackChunkreact_driver=self.webpackChunkreact_driver||[]).push([[144],{16:(n,e,r)=>{r.d(e,{c:()=>m});var a,o=r(60);function t(){return t=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},t.apply(this,arguments)}function l(n,e){let{title:r,titleId:l,...i}=n;return o.createElement("svg",t({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":l},i),r?o.createElement("title",{id:l},r):null,a||(a=o.createElement("path",{d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:.8,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}const i=o.forwardRef(l);r.p;var s,c=r(312);const d=r(360).cp.li(s||(s=(0,c.c)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  width: 274px;\n  height: 440px;\n\n  .catalogCarImg {\n    border-radius: 14px;\n    height: 268px;\n    object-fit: cover;\n    margin-bottom: 14px;\n  }\n  .catalogCarInfo {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .catalogCarModel {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: var(--primery-color-black);\n    &.blueText {\n      color: var(--primery-color-blue);\n    }\n  }\n  .catalogCarPrice {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: var(--primery-color-black);\n  }\n  .catalogCarDesc {\n    display: block;\n    font-family: var(--font-family);\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    color: rgba(18, 20, 23, 0.5);\n  }\n  .catalogCarBtn {\n    border-radius: 12px;\n    padding: 12px 0px;\n    width: 274px;\n    height: 44px;\n    background-color: var(--primery-color-blue);\n    color: var(--primery-color-white);\n    font-family: var(--font-family);\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 143%;\n    transition: all 0.35s;\n  }\n  .catalogCarBtn:hover {\n    background-color: var(--secondary-color-blue);\n  }\n  .catalogFavoriteBtn {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    background-color: transparent;\n  }\n  .catalogFavoriteIcon {\n    stroke: var(--primery-color-white);\n    fill: transparent;\n    transition: stroke 0.35s, fill 0.35s;\n    &.active {\n      stroke: var(--primery-color-blue);\n      fill: var(--primery-color-blue);\n    }\n  }\n  .catalogFavoriteIcon:hover {\n    stroke: var(--primery-color-blue);\n  }\n"])));var p=r(496);const m=n=>{let{advert:e,favorites:r,handleClickFavorites:a,handleOpenModal:o}=n;return(0,p.jsxs)(d,{className:"catalogItem",children:[(0,p.jsx)("button",{className:"catalogFavoriteBtn ".concat(r.some((n=>n.id===e.id))?"active":""),onClick:()=>a(e),children:(0,p.jsx)(i,{className:"catalogFavoriteIcon ".concat(r.some((n=>n.id===e.id))?"active":"")})}),(0,p.jsxs)("div",{className:"catalogCarInfo",children:[(0,p.jsx)("img",{className:"catalogCarImg",src:e.photoLink||e.img,alt:"".concat(e.make," ").concat(e.model,",").concat(e.year)}),(0,p.jsxs)("div",{className:"wrapper",children:[(0,p.jsxs)("p",{className:"catalogCarModel",children:[e.make,"\xa0",(0,p.jsx)("span",{className:"catalogCarModel blueText",children:e.model}),",",e.year]}),(0,p.jsx)("p",{className:"catalogCarPrice",children:e.rentalPrice})]}),(0,p.jsxs)("p",{className:"catalogCarDesc",children:[e.address.split(" ").slice(3,5).join(" | ").replace(/,/g,"")," ","| ",e.rentalCompany," | ",e.type," | ",e.model," |"," ",e.id," | ",e.functionalities.slice(0,1)]})]}),(0,p.jsx)("button",{onClick:()=>o(e),className:"catalogCarBtn",children:"Learn more"})]},e.id)}},18:(n,e,r)=>{r.d(e,{c:()=>h});var a,o=r(60),t=r(312);const l=r(360).cp.div(a||(a=(0,t.c)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n\n  .modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    z-index: 1001;\n    border-radius: 24px;\n    max-width: 541px;\n    padding: 40px;\n  }\n\n  .close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n    font-size: 20px;\n    color: #666;\n  }\n\n  .close:hover {\n    color: #000;\n  }\n\n  .modalCarImg {\n    border-radius: 14px;\n    width: 461px;\n    height: 248px;\n    margin-bottom: 14px;\n    object-fit: cover;\n  }\n  .modalCarName {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 133%;\n    color: var(--primery-color-black);\n    margin-bottom: 8px;\n    &.color {\n      color: var(--primery-color-blue);\n    }\n  }\n  .modalCarText {\n    font-family: var(--font-family);\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    color: rgba(18, 20, 23, 0.5);\n    margin-bottom: 14px;\n  }\n  .modalCarDescription {\n    font-family: var(--font-family);\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 143%;\n    color: var(--primery-color-black);\n  }\n  .modalCarSubtitle {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 143%;\n    color: var(--primery-color-black);\n    margin-bottom: 8px;\n  }\n  .carModalList {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .carModalItem {\n    border-radius: 35px;\n    padding: 7px 14px;\n    font-family: var(--font-family);\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    color: var(--secondary-color-black);\n    background: #f9f9f9;\n  }\n  .wrapperSection {\n    margin-bottom: 24px;\n    width: 461px;\n  }\n  .difColor {\n    color: var(--primery-color-blue);\n  }\n  .closeButton {\n    position: absolute;\n    background-color: transparent;\n    top: 16px;\n    right: 16px;\n  }\n  .closeImg {\n    stroke: var(--primery-color-black);\n    transition: all 0.3s;\n    &:hover {\n      stroke: var(--primery-color-blue);\n    }\n  }\n  .modalBtnRent {\n    border-radius: 12px;\n    padding: 12px 50px;\n    font-family: var(--font-family);\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 143%;\n    color: var(--primery-color-white);\n    background: var(--primery-color-blue);\n    transition: all 0.3s;\n    &:hover {\n      background: var(--secondary-color-blue);\n    }\n  }\n"])));var i,s;function c(){return c=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},c.apply(this,arguments)}function d(n,e){let{title:r,titleId:a,...t}=n;return o.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},t),r?o.createElement("title",{id:a},r):null,i||(i=o.createElement("path",{d:"M18 6L6 18",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),s||(s=o.createElement("path",{d:"M6 6L18 18",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})))}const p=o.forwardRef(d);r.p;var m=r(496);const h=n=>{let{isOpen:e,onClose:r,advert:a}=n;const t=()=>{r&&r()},i=n=>{27===n.keyCode&&t()};if((0,o.useEffect)((()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}))),!a)return;const s=a.rentalConditions.split("\n").map(((n,e)=>{const r=n.split(": ");return 2===r.length&&"Minimum age"===r[0]?(0,m.jsxs)("li",{className:"carModalItem",children:[(0,m.jsxs)("span",{children:[r[0],":"]}),(0,m.jsx)("span",{className:"difColor",children:r[1]})]},e):(0,m.jsx)("li",{className:"carModalItem",children:n},e)}));return e?(0,m.jsx)(l,{onClick:n=>{n.target===n.currentTarget&&t()},children:(0,m.jsxs)("div",{className:"modal",children:[(0,m.jsx)("button",{className:"closeButton",onClick:t,children:(0,m.jsx)(p,{className:"closeImg"})}),a&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("img",{className:"modalCarImg",src:a.photoLink||a.img,alt:""}),(0,m.jsxs)("div",{className:"wrapperSection",children:[(0,m.jsxs)("p",{className:"modalCarName",children:[a.make,"\xa0",(0,m.jsx)("span",{className:"modalCarName color",children:a.model}),",",a.year]}),(0,m.jsxs)("p",{className:"modalCarText",children:[a.address.split(" ").slice(3,5).join(" | ").replace(/,/g,""),"| Id: ",a.id," | Year: ",a.year," | Type: ",a.type," ",(0,m.jsx)("br",{}),"Fuel Consumption: ",a.fuelConsumption," | Engine Size:"," ",a.engineSize]}),(0,m.jsx)("p",{className:"modalCarDescription",children:a.description})]}),(0,m.jsxs)("div",{className:"wrapperSection",children:[(0,m.jsx)("p",{className:"modalCarSubtitle",children:"Accessories and functionalities:"}),(0,m.jsxs)("p",{className:"modalCarText",children:[a.accessories.join(" | ")," ",(0,m.jsx)("br",{}),a.functionalities.join(" | ")]})]}),(0,m.jsxs)("div",{className:"wrapperSection",children:[(0,m.jsx)("p",{className:"modalCarSubtitle",children:"Rental Conditions: "}),(0,m.jsxs)("ul",{className:"carModalList",children:[s,(0,m.jsxs)("li",{className:"carModalItem",children:["Millage:",(0,m.jsx)("span",{className:"difColor",children:a.mileage.toLocaleString().replace(/\s/g,",")})]}),(0,m.jsxs)("li",{className:"carModalItem",children:["Price:",(0,m.jsx)("span",{className:"difColor",children:a.rentalPrice})]})]})]}),(0,m.jsx)("button",{className:"modalBtnRent",children:(0,m.jsx)("a",{href:"tel:+380730000000",children:"Rental car"})})]})]})}):null}},763:(n,e,r)=>{r.r(e),r.d(e,{default:()=>y});var a,o,t=r(60),l=r(312),i=r(360);const s=i.cp.div(a||(a=(0,l.c)(["\n  .loadMoreBtn {\n    border-radius: 12px;\n    padding: 14px 44px;\n    background: var(--primery-color-blue);\n    font-family: var(--font-family);\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 143%;\n    color: var(--primery-color-white);\n    transition: all 0.35s;\n  }\n  .loadMoreBtn:hover {\n    background-color: var(--secondary-color-blue);\n  }\n  .wrap {\n    display: flex;\n    justify-content: center;\n  }\n"]))),c=i.cp.ul(o||(o=(0,l.c)(["\n  display: grid;\n  justify-items: center;\n  padding: 0px 40px;\n  grid-template-columns: repeat(4, 1fr);\n  column-gap: 29px;\n  row-gap: 50px;\n  margin-bottom: 20px;\n"])));var d,p=r(972),m=r(992),h=r(676),x=r(18),f=r(404);const g=i.cp.div(d||(d=(0,l.c)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n  .searchPanelList {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n    gap: 18px;\n    margin-bottom: 50px;\n  }\n\n  .searchPanelLabel {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 129%;\n    color: var(--primery-color-gray);\n    margin-bottom: 8px;\n  }\n  .searchPanelBtn {\n    border-radius: 12px;\n    padding: 14px 44px;\n    width: 136px;\n    height: 48px;\n    background: var(--primery-color-blue);\n    font-family: var(--font-family);\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 143%;\n    color: var(--primery-color-white);\n    transition: all 0.35s;\n  }\n  .searchPanelBtn:hover {\n    background-color: var(--secondary-color-blue);\n  }\n  .searchSelectInput {\n    cursor: pointer;\n    border-radius: 14px;\n    padding: 14px 18px;\n    width: 224px;\n    height: 48px;\n    border: none;\n    background: var(--secondary-color-gray);\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: var(--primery-color-gray);\n    &::-webkit-scrollbar {\n      width: 7px;\n      background-color: var(--primery-color-white);\n    }\n\n    &::-webkit-scrollbar-thumb {\n      border-radius: 10px;\n      background-color: var(--primery-color-blue);\n    }\n\n    &::-webkit-scrollbar-track {\n      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n      border-radius: 10px;\n      background-color: var(--primery-color-white);\n    }\n  }\n  .searchPanelInput {\n    border: none;\n    border-right: 1px solid rgba(1, 1, 1, 0.2);\n    border-radius: 14px 0 0 14px;\n    padding: 0px 24px;\n    width: 160px;\n    height: 48px;\n    background: var(--secondary-color-gray);\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    &.right {\n      border: none;\n      border-radius: 0 14px 14px 0;\n    }\n  }\n  .rowInput {\n    display: flex;\n  }\n  .searchOption {\n    font-family: var(--font-family);\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 150%;\n    color: var(--primery-color-black);\n  }\n"])));var u=r(496);const b=n=>{let{carsModel:e,selectedCar:r,handleSelectChange:a,handleSearch:o}=n;return(0,u.jsx)(g,{children:(0,u.jsxs)("ul",{className:"searchPanelList",children:[(0,u.jsxs)("li",{className:"searchPanelItem",children:[(0,u.jsx)("label",{className:"searchPanelLabel",htmlFor:"car-model",children:"Car brand"}),(0,u.jsxs)("select",{className:"searchSelectInput",name:"cars",id:"car-model",onChange:a,value:r,children:[(0,u.jsx)("option",{className:"searchOption",value:"",children:"All"}),[...e].sort(((n,e)=>n.localeCompare(e))).map(((n,e)=>(0,u.jsx)("option",{className:"searchOption",value:n,children:n},e)))]})]}),(0,u.jsxs)("li",{className:"searchPanelItem",children:[(0,u.jsx)("label",{className:"searchPanelLabel",htmlFor:"rent-price",children:"Price/ 1 hour"}),(0,u.jsx)("select",{className:"searchSelectInput",name:"price",id:"rent-price",children:(0,u.jsx)("option",{value:"",children:"To $"})})]}),(0,u.jsxs)("li",{className:"searchPanelItem",children:[(0,u.jsx)("label",{className:"searchPanelLabel",htmlFor:"pet-select",children:"\u0421ar mileage / km"}),(0,u.jsxs)("div",{className:"rowInput",children:[(0,u.jsx)("input",{className:"searchPanelInput",type:"text",placeholder:"From",name:"carMillageFrom"}),(0,u.jsx)("input",{className:"searchPanelInput right",type:"text",placeholder:"To",name:"carMillageTo"})]})]}),(0,u.jsx)("li",{className:"searchPanelItem",children:(0,u.jsx)("button",{className:"searchPanelBtn",onClick:o,children:"Search"})})]})})};var v=r(16);const y=()=>{const n=(0,m.w1)(f.Ks),e=(0,m.w1)(f.AN),r=(0,m.w1)(f.i8),a=(0,m.w1)(f.Ke),o=(0,m.w1)(f.ks),l=(0,m.w1)(f.wp),[i,d]=(0,t.useState)(!1),[g,y]=(0,t.useState)(""),[j,w]=(0,t.useState)(1),k=(0,m.OY)();(0,t.useEffect)((()=>{0===n.length&&k((0,h.C8)(j))}),[k,j,n.length]);const C=n=>{d(n),document.body.classList.add("modal-open")},N=n=>{const e=l.some((e=>e.id===n.id));k(e?(0,h.S_)(n.id):(0,h.yw)(n))},L=null!==n&&n.filter((n=>n.make.toLowerCase().includes(o.toLowerCase().trim())));return(0,u.jsxs)(s,{children:[(0,u.jsx)(b,{carsModel:a,selectedCar:g,handleSelectChange:n=>{y(n.target.value)},handleSearch:()=>{k((0,h.cr)(g)),d(!1)}}),e?(0,u.jsx)(p.c,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c,{children:[L&&L.map((n=>(0,u.jsx)(v.c,{advert:n,favorites:l,handleClickFavorites:N,handleOpenModal:C},n.id)))," "]}),L.length>11?(0,u.jsx)("div",{className:"wrap",children:(0,u.jsx)("button",{className:"loadMoreBtn",onClick:()=>{w(j+1),k((0,h.C8)(j+1))},children:"LOAD MORE"})}):""]}),(0,u.jsx)(x.c,{isOpen:i,onClose:()=>{d(!1),document.body.classList.remove("modal-open")},advert:i}),r&&(0,u.jsx)("p",{children:r.message})]})}},404:(n,e,r)=>{r.d(e,{AN:()=>o,Ke:()=>i,Ks:()=>a,i8:()=>t,ks:()=>l,wp:()=>s});const a=n=>n.advertsStore.advertsData,o=n=>n.advertsStore.isLoading,t=n=>n.advertsStore.error,l=n=>n.advertsStore.filter,i=n=>n.advertsStore.carsModel,s=n=>n.advertsStore.favorites}}]);
//# sourceMappingURL=144.4865013e.chunk.js.map