import{b as i,j as s,L as r,c as n,u as d}from"./index-vww-MAHZ.js";function t({cupCakeItem:a}){const e=i(),c=()=>{e(n.addToCart(a.id))};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"cake-col",id:a.id,children:[s.jsx("img",{src:a.image,alt:a.alt_Name}),s.jsx("div",{className:"price",children:s.jsxs(r,{to:"/benzbakery-web-app/Cart",onClick:c,className:"rupees",children:[a.item,s.jsx("br",{}),"₹ ",a.price]})})]})})}function o(){const a=d(e=>e.cupCakeItems);return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"",id:"cup-cakes",children:[s.jsx("span",{className:"white"}),s.jsxs("section",{className:"product-3-cup-cakes",id:"product-3-cup-cakes",children:[s.jsxs("h1",{className:"title",children:["Our Most Popular ",s.jsx("span",{children:"Cup Cakes"})]}),s.jsx("div",{className:"cake-row",id:"main_cup_cake",children:a.map(e=>s.jsx(t,{cupCakeItem:e},e.id))})]})]})})}export{o as default};