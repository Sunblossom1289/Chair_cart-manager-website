//what we have to do-------
//show krna h real products
var products = [

    {name: " Chusion chair", headline:"Comfy chair" , price:"15000", image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: " Pink chair", headline:"Aesthetic chair" , price:"12000", image:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    {name: " Swan chair", headline:"Cool chair" , price:"21000", image:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww" },
    {name: " Blue chair", headline:" DailyUse chair" , price:"5000", image:"https://images.unsplash.com/photo-1517705008128-361805f42e86?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww" },
    {name: " Cardboard chair", headline:"Hard chair" , price:"10000", image:"https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww" },
    {name: " Ancient chair", headline:"Old times chair" , price:"13000", image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww" }
];
var popular = [
    {name: " Swan chair", headline:"Cool chair" , price:"21000", image:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww" },
    {name: " Blue chair", headline:" DailyUse chair" , price:"5000", image:"https://images.unsplash.com/photo-1517705008128-361805f42e86?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww" },
    {name: " Cardboard chair", headline:"Hard chair" , price:"10000", image:"https://plus.unsplash.com/premium_photo-1705479742826-cb265b9d6999?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww" },
    
];

var cart = [];

function addToCart(){
    document.querySelector(".products")
    .addEventListener("click" ,function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index])
            //  alert("Product Added to the Cart");
        }
       
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click" ,function(){
        document.querySelector(".cartexpnd").style.display ="block"
    var clutter ="";
    cart.forEach(function(prod, index){

        clutter +=  `<div class="flex gap-2 bg-white p-2 rounded-lg">
        <div class ="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
        <img class="w-full h-full object-cover" src="${prod.image}"/>

        </div>
        <div>
        <h3 class ="font-semibold"> ${prod.name}</h3>
        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
        </div>
        </div>`;
    })
    document.querySelector(".cartexpnd").innerHTML =clutter;
   
    });
}

function addProduct(){
var pluto ="";

products.forEach(function(product ,index){
pluto += `<div class="product w-fit rounded-xl p-2 bg-white">
<div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">

<img  class ="w-full h-full object-cover" src="${product.image}"/>
</div>
<div class="data w-full px-2 py-5">
    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
    <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
            <h3 class="font-semibold opacity-20">${product.headline}</h3>
            <h4 class="font-semibold mt-2">${product.price}</h4>
        </div>
        <button data-index ="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
        <i data-index ="${index}"
        class="add ri-add-line"></i></button>
</div>
</div>
</div>`;
})
document.querySelector(".products").innerHTML =pluto;
}

function addPopular(){
    var clutter= "";
    popular.forEach(function(product){
clutter += `  <div class="populardiv mt-5">
<h3 class="text-2xl pl-5 font-semibold">Popular</h3>
<div class="populars mt-5 flex whitespace-nowrap gap-5 overflow-auto w-full pl-5">
    <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
            </div> </div>`;
       

    });
    document.querySelector(".popular").innerHTML = clutter;
}

showCart();
addToCart();
addProduct();
addPopular();



//on click add it to the cart
//show real popular products

