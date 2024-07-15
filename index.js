

// my frist trying code :


// let btnGroup =  document.querySelectorAll(".btn-danger")
// console.log(btnGroup);
// let productsContainer = document.querySelector(".products-container");
// let productsContainerChild = document.querySelectorAll(".children");



// productsContainerChild.forEach(child => {
    // child.classList.remove("clear");

// access all btns:
// btnGroup.forEach(btn => {
// btn.addEventListener("click", function(e){

//     btnGroup.forEach(btn => {
//         btn.classList.remove("active");
//         e.target.classList.add("active");
//     } ) 

// if(e.target.id === productsContainer.dataset.all){
//     productsContainerChild.forEach(child => {
//         // child.classList.remove("clear");
//         child.classList.add("clear");
        // document.querySelector(".clear").style.position = "absolute";
//         console.log("all");
//      })


//     }
//      else{
//  productsContainerChild.forEach(child => {
   
    
//             child.classList.remove("clear");
            
//             if(e.target.id === child.dataset.s){
//                 child.classList.add("clear");
//                 console.log(child);
//             } })
//      }


//     }) })

    
    // search :
//     let searchInput = document.querySelector(".search-input");
    
//     let searchBtn = document.querySelector(".btn-success");
//     console.log(searchInput);
//     let searchInputValue = searchInput.value;
//     console.log(searchBtn);
    
//     let regex1 = /(skirt|skirts)/ig;
//     let regex2 = /(watch|watches)/ig;
//     let regex3 = /(top|tops)/ig;
  

// searchBtn.addEventListener("click", function(e){
//     let searchInputValue = searchInput.value;
//     console.log(searchInputValue);
//     console.log(searchInputValue.match(regex1));
//     if (regex1.test(searchInputValue) === true) {
//         btnGroup.forEach(btn => {
//             btn.classList.remove("active");
//             document.getElementById("skirt").classList.add("active");
//         } ) 
//         productsContainerChild.forEach(child => {
//             child.classList.remove("clear");
//             console.log(document.getElementById("skirts"));
//             document.getElementById("skirts").classList.add("clear");
//          })
//     }
//     if (regex2.test(searchInputValue) === true) {
//         btnGroup.forEach(btn => {
//             btn.classList.remove("active");
//             document.getElementById("watch").classList.add("active");
//         } ) 
//         productsContainerChild.forEach(child => {
//             child.classList.remove("clear");
//             console.log(document.getElementById("watches"));
//             document.getElementById("watches").classList.add("clear");
//          })
//     }
//     if (regex3.test(searchInputValue) === true) {
//         btnGroup.forEach(btn => {
//             btn.classList.remove("active");
//             document.getElementById("top").classList.add("active");
//         } ) 
//         productsContainerChild.forEach(child => {
//             child.classList.remove("clear");
//             console.log(document.getElementById("tops"));
//             document.getElementById("Tops").classList.add("clear");
//          })
//     }
    
//     searchInput.value = ""
// })




// let hh = document.querySelector(".card-title").textContent;
// console.log(typeof hh);



// =================================================================






// the second professional code :\



// creating products by js

let classesToAdd = [ 'd-flex', 'justify-content-center', 'flex-row','flex-wrap' , 'gap-5' ];

let mainSection =  document.querySelector(".my-products__container");
mainSection.classList.add(...classesToAdd);

let products = {
    // Array of objects in ana  Array :

    data : [
        {
            productName : "Belted shirt dress",
            category : "Dresses" ,
            price : "EGP 2199.00" ,
            image : "74132062229875001af8fb7691aeb9efc6c17f59.jpg"
        } , 
        {
            productName : "Strappy viscose dress",
            category : "Dresses" ,
            price : "EGP 899.00" ,
            image : "1d0e7bf4feaf1ea54e56cabae418e75c0881b90e.jpg"
        } , 
        {
            productName : "Buckle-detail shoes",
            category : "shoes" ,
            price : "EGP 699.00" ,
            image : "6d9a1f3e8ca028099564fce6348324cc47358e69.webp"
        } , 
        {
            productName : "Ribbed T-shirt",
            category : "T-shirts" ,
            price : "EGP 399.00" ,
            image : "8af5ecbe5405ebf60fe4703d4585a6862428e87f.webp"
        } , 
        {
            productName : "Linen t-shirt",
            category : "T-shirts" ,
            price : "EGP 1199.00" ,
            image : "98032cc1515b72110d378a996362bf3ac18dfb93.webp"
        } , 
        {
            productName : "shoes platform espadrilles",
            category : "shoes" ,
            price : "EGP 2799.00" ,
            image : "4c4502f0725ef5065f197be668957509721e472a.jpg"
        } , 
        {
            productName : "Mini skirt",
            category : "skirts" ,
            price : "EGP 499.00" ,
            image : "69bcc2eb26c2f7774840ae8d476895ea3a3f40aa.jpg"
        } , 
        {
            productName : "A-line skirt",
            category : "skirts" ,
            price : "EGP 699.00" ,
            image : "Skirts designes for Girls.jpeg"
        } , 
        {
            productName : "Knee-length skirt",
            category : "skirts" ,
            price : "EGP 799.00" ,
            image : "054ee14ea3266eb801f5a94a438d1b1ac637fba8.webp"
        } , 
        {
            productName : "Balloon-sleeved dress",
            category : "Dresses" ,
            price : "EGP 3299.00" ,
            image : "6ecf07039aa07140644d84e306e618fc75979b6b.jpg"
            
            
        } 
    ]
}


products.data.forEach(product => {
    // main card
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("hide");
    card.classList.add(product.category);
    card.style.width = "18rem"
  
    mainSection.appendChild(card);

//  product image:
let image = document.createElement("img");
image.src = "images" + "/" + product.image ; 
image.classList.add("card-img-top");
card.appendChild(image)

// create name and price :
let div = document.createElement("div"); 
div.style.textAlign = "center"
card.appendChild(div);
let h5 = document.createElement("h5");
h5.classList.add("card-title"); 
h5.innerText = product.productName ;
div.appendChild(h5);

//  price :

let price = document.createElement("p"); 
price.innerText = product.price ;
div.appendChild(price);

});

//  add active class to buttons :

window.onload = () =>{
    filterProducts('all');
}

function filterProducts(value) {
    let buttons = document.querySelectorAll(".btn-danger")
    buttons.forEach(button => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }

let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    if (value == "all") {
        card.classList.remove("hide" )
    }
    else{
        if (card.classList.contains(value)) {
            card.classList.remove("hide")
        }else{
            card.classList.add("hide") 
        }
    }
});




        
     





        
    });

    
    // let cards = document.querySelectorAll(".card");
 
       

   
}



let searchInput = document.querySelector(".search-input"); 
let searchInputbtn = document.querySelector(".btn-success"); 
console.log(searchInput);
searchInputbtn.addEventListener('click' , ()=>{


    let titles = document.querySelectorAll(".card-title");
    let cards = document.querySelectorAll(".card");
    titles.forEach((title, index) => {
        if (title.innerText.includes(searchInput.value)) {
            cards[index].classList.remove("hide");
            console.log(title.innerText);
        }
        else{
            cards[index].classList.add("hide");

        }
       
       
    });
})
// let inputValue = searchInput.value;
// function search() {
//     let titles = document.querySelectorAll(".card-title");
//     let cards = document.querySelectorAll(".card");
//     titles.forEach((title, index) => {
//         if (title.innerText.contains(searchInput.value())) {
//             cards[index].classList.remove("hide");
//         }
//         else{
//             cards[index].classList.add("hide");
//         }
       
       
//     });
// }
   

