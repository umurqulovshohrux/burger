const food = {
    plainBurger: {
        name: "GAMBURGER ",
        price: 10000,
        amount: 0,
        kcall: 400,

        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },

    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 600,
        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 700,
        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    }

}

const btn = [...document.querySelectorAll('.main__product-btn')]

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        // console.log(this.closest(".main__product").getAttribute('id'))
        prepare(this)
    })

}

function prepare(item) {
    const parent = item.closest(".main__product")
    const parentId = parent.getAttribute('id')
    const price = parent.querySelector(".main__product-price span ")
    const num = parent.querySelector(".main__product-num")
    const kcall = parent.querySelector(".main__product-kcall span")
    let sym = item.getAttribute("data-symbol")

    let count = food[parentId].amount

    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    food[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = food[parentId].calcSum
    kcall.innerHTML = food[parentId].kcallSum
}





// 100 

let spanNum = document.querySelector(".span__num")   
let headerDescr = document.querySelector(".header__descr")

headerDescr.addEventListener('mousemove', function scrollTimer(){
   
        random()
    
    
})


function random(){
    function calcSum(k=0){
            spanNum.innerHTML = k
            k++
            if(k<=200){
                setTimeout(() => {
                    calcSum(k)
                }, .1);
            }  else if (k>=200 && k<=500) {
                setTimeout(() => {
                    calcSum(k)
                }, 20);
            } else if (k>=500 && k<=990) {
                setTimeout(() => {
                    calcSum(k)
                }, 2);
            } else if (  k>=990 && k<=1000) {
                setTimeout(() => {
                    calcSum(k)
                }, 1000);
        }
    }
        calcSum()
    
}
random()


const receipt = document.querySelector('.receipt');
const receiptWindow = document.querySelector('.receipt__window');
const receiptWindowOut = document.querySelector('.receipt__window-out');
const receiptWindowBtn = document.querySelector('.receipt__window-btn');
const addCart = document.querySelector('.addCart');


addCart.addEventListener('click', function (){
    receipt.style.display = 'block';
    receiptWindow.style.top = '20%';
    receiptWindow.style.left = '35%';



    setTimeout(() => {
        receipt.style.opacity = 1;
    }, 100);

    let menu = "Sizning chekingiz \n\n";
    let totalPrice = 0;
    let totalKcall = 0;

    for (const key in food) {
        menu = menu + `${food[key].name} ${food[key].amount}x  ${food[key].price}= ${food[key].calcSum}\n\n`

        totalKcall = totalKcall + food[key].kcallSum
        totalPrice = totalPrice + food[key].calcSum


        }

        receiptWindowOut.innerHTML = `${menu} \n Total kcall:  ${totalKcall} calories \n Total  price: ${totalPrice} sum`
       
        
   
})

receiptWindowBtn.addEventListener('click',function (e) {
    if(e.target){
        receiptWindow.style.top = '-100%'
        setTimeout(() => {
            receipt.style.display = 'none'
            receipt.style.opacity = '0'
        }, 200);
    }
})

    


const mainProductInfo = [...document.querySelectorAll(".main__product-info")];

for (let i = 0; i < mainProductInfo.length; i++) {
    mainProductInfo[i].addEventListener("click" , function() {
        show(this)
    })
}

function show(viewImg) {
    let parent = viewImg.closest('.main__product')
    let view = document.querySelector('.view')
    let image = document.querySelector('.view img')
    let parImg = parent.querySelector('.main__product-info img')
    let viewClose = document.querySelector('.view__close') 
    console.log(image)


    view.classList.add('active') 
    let x = parImg.getAttribute('src')

    console.log(x)

    image.removeAttribute("src")

    if(parImg.hasAttribute("src")) {
        image.setAttribute("src" , `${x}`) 
    }

    view.addEventListener ('click' , function(e) {
        if(e.target == e.currentTarget ) {
            view.classList.remove('active')
        }
    })

    viewClose.addEventListener('click' , function() {
        view.classList.remove('active')
    })
}

