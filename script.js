let watches = [

{
name:"Rolex Daytona",
brand:"Rolex",
price:22000,
image:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Rolex-Daytona.jpg",
history:[18000,20000,21000,22000]
},

{
name:"Patek Philippe Nautilus",
brand:"Patek Philippe",
price:95000,
image:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Patek_Philippe_Nautilus.jpg",
history:[85000,88000,91000,95000]
}

]

function render(){

let html=""

watches.forEach((watch,i)=>{

html+=`

<div class="card">

<h3>${watch.name}</h3>

<img src="${watch.image}" width="200">

<p>Brand: ${watch.brand}</p>

<p>Market Value: €${watch.price}</p>

<button onclick="buy(${i})">Place Bid</button>

</div>

`

})

document.getElementById("market").innerHTML = html

}

function buy(i){

let bid = prompt("Enter your bid")

if(bid > watches[i].price){

watches[i].price = bid

render()

}

}

render()
