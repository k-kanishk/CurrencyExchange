const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";


const dropdowns=document.querySelectorAll("select");

const btn=document.querySelector("button");
const f=document.querySelector(".fselect");
const t=document.querySelector(".tselect");

for( let eg  of dropdowns){
   
    for(code in countryList){
        let newoption =document.createElement("option");
        newoption.innerText=code;

        eg.append(newoption);
    }


    eg.addEventListener("change", (evt) => {
       updateflag(evt.target);
       });
}


const updateflag= (element)=>{
   
let code=element.value;

let country=countryList[code];

let newsrc=`https://flagsapi.com/${country}/flat/64.png`;
let par=element.parentElement;
let img=par.querySelector(".img1");
console.log(img.src);
img.src=newsrc;
};




btn.addEventListener("click", async (evt)=>{
       evt.preventDefault();
 let amount=document.querySelector("input");
// let ip=amount.input;
let val=amount.value;

const fc=f.value;
const tc=t.value;

const URL = `${BASE_URL}/${fc.toLowerCase()}/${tc.toLowerCase()}.json`;
let response = await fetch(URL);
console.log(response);
});