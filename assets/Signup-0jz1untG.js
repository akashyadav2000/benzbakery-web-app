import{r as i,j as s,L as v}from"./index-8OeZea17.js";import{F as a}from"./index.es-6e6TgpR2.js";import{a as m,b as u}from"./index-lBxZdI6z.js";function S(){const[n,p]=i.useState(!0),[r,g]=i.useState(!0),[e,x]=i.useState({username:"",email:"",mobileNumber:"",address:"",password:"",confirmPassword:""}),l=()=>{p(!n)},o=()=>{g(!r)},h=()=>{const t=document.getElementById("uname").value,y=document.getElementById("email").value,b=document.getElementById("mobile").value,w=document.getElementById("address").value,d=document.getElementById("pass").value,f=document.getElementById("cpass").value,c={username:/^[A-Za-z]+$/.test(t)?"":"Name should only contain alphabets",email:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)?"":"Invalid email address",mobileNumber:/^\d{10,}$/.test(b)?"":"Mobile number should contain at least 10 digits",address:w.replace(/\s/g,"").length>=10?"":"Address should contain at least 10 characters",password:/^(?=.*[A-Za-z0-9])(?=.*[@#$%^&+=])[A-Za-z0-9@#$%^&+=]{8,}$/.test(d)?"":"Password should be 8 characters long with at least 1 special character and 1 number",confirmPassword:d===f?"":"Passwords do not match"};return x(c),Object.values(c).every(E=>E==="")},j=()=>{h()&&console.log("Signup successful!")},N=t=>{t.preventDefault()};return s.jsx(s.Fragment,{children:s.jsx("form",{onClick:N,children:s.jsxs("div",{className:"signup-container",children:[s.jsx("div",{className:"signup-image-container",children:s.jsx("img",{src:"./Images/Login_Background.jpg",alt:"Signup_Background"})}),s.jsx("div",{className:"signup-form-container",id:"signup_form_container",children:s.jsxs("div",{className:"signup-user-details",children:[s.jsx("div",{className:"signup-title",children:"REGISTRATION"}),s.jsx("br",{}),s.jsx("span",{className:"signup-details",children:"User Name"}),s.jsx("input",{type:"text",id:"uname",placeholder:"Enter your name",required:"",style:{textTransform:"none"},className:"signup-text-box"}),s.jsx("p",{className:"signup-error-messages",children:e.username}),s.jsx("span",{className:"signup-details",children:"Email"}),s.jsx("input",{type:"email",id:"email",placeholder:"Enter your email",required:"",style:{textTransform:"none"},className:"signup-text-box"}),s.jsx("p",{className:"signup-error-messages",children:e.email}),s.jsx("span",{className:"signup-details",children:"Mobile Number"}),s.jsx("input",{type:"number",id:"mobile",placeholder:"Enter your number",required:"",className:"signup-text-box"}),s.jsx("p",{className:"signup-error-messages",children:e.mobileNumber}),s.jsx("span",{className:"signup-details",children:"Address"}),s.jsx("input",{type:"text",id:"address",placeholder:"Enter your address",required:"",className:"signup-text-box"}),s.jsx("p",{className:"signup-error-messages",children:e.address}),s.jsx("span",{className:"signup-details",children:"Password"}),s.jsx("input",{type:n?"password":"text",id:"pass",placeholder:"Password",required:"",style:{textTransform:"none"},className:"signup-text-box"}),n?s.jsx(a,{className:"signup-password-eye",icon:m,onClick:l}):s.jsx(a,{className:"signup-password-eye",icon:u,onClick:l}),s.jsx("p",{className:"signup-error-messages",children:e.password}),s.jsx("span",{className:"signup-details",children:"Confirm Password"}),s.jsx("input",{type:r?"password":"text",id:"cpass",placeholder:"Confirm Password",required:"",style:{textTransform:"none"},className:"signup-text-box"}),r?s.jsx(a,{className:"signup-password-eye",icon:m,onClick:o}):s.jsx(a,{className:"signup-password-eye",icon:u,onClick:o}),s.jsx("p",{className:"signup-error-messages",children:e.confirmPassword}),s.jsx("button",{id:"signup_btn",className:"signup-btn",onClick:j,children:"Sign Up"}),s.jsxs(v,{to:"/benzbakery-web-app/Login",className:"login-line",children:["Have an account already ?",s.jsx("span",{className:"login-link",children:"log in"})]})]})})]})})})}export{S as default};
