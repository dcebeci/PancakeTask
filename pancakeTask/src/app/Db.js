//json ile veri çekildi
let data = fetch ("https://dummyjson.com/products")
.then(response=>response.json())
.then(veri=>console.log(veri));