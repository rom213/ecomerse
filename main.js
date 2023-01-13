let ropa= [ {
  id: '1',
  name: 'Hoodies',
  price: 14.00,
  image: './featured1.png',
  category: 'hoodies',
  quantity: 10
},
{
  id: '2',
  name: 'Shirts',
  price: 24.00,
  image: './featured3.png',
  category: 'shirts',
  quantity: 15
},
{
  id: '3',
  name: 'Sweatshirts',
  price: 10.00,
  image: './featured2.png',
  category: 'sweatshirts',
  quantity: 20
}
]
let n=0;
let cars={}
const events1=document.querySelector('.btn1');
const events2=document.querySelector('.btn2')
const events3=document.querySelector('.btn3');
const events4=document.querySelector('.btn4');
const cuerda=document.querySelector('.cuerda')
const carro=document.querySelector('.carri')
const cont= document.querySelector('.carro')
const cerrar=document.querySelector('.x')
const $fixy = document.querySelectorAll('.fixed')
const gancho=document.querySelector('.gancho')
const contentcar=document.querySelector('.contentcar')
const cardi=document.querySelector('.contdiscoadd')
const total=document.querySelector(".compras")
const ciclo=document.querySelector(".ciclo")
const valor=document.querySelector(".total")



ciclo.addEventListener("click",function(){
  document.body.classList.toggle("dark")
})


function contabilidad(){
const arr=Object.values(cars)
console.log("roma");
if(arr.length){
  let conta=0
  arr.forEach(function({amount,price}){
   console.log("roma");
  })
}

}


{
function prenda(i){
  let html='';
  cuerda.innerHTML=html
  html+=`
  <div class="gancho">
      <img class='imagen' src="${ropa[i].image}" alt="">
      <div id="${ropa[i].id}"><div class="circle f" id="${ropa[i].id}"><div class="h f" id="${ropa[i].id}"><svg class="f" id="${ropa[i].id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="f" id="${ropa[i].id}" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></i></div></div></div>
      <div class="etiqueta">
          <div class="prest">
              <b class='price'>$${ropa[i].price}.00</b>
              <div class="linea"></div>
              <div class="stock">Stock:${ropa[i].quantity}</div>
          </div>
          <b class="prenda">${ropa[i].name}</b>
      </div>
  </div>
  `
  cuerda.innerHTML=html
}
}
{
function codigo(){  
  let html='';
  n++
  ropa.forEach(function({id,name,price,image,category,quantity}){
    html+=`
    <div class="gancho">
        <img class='imagen' src="${image}" alt="">
        <div class="etiqueta">
            <div class="prest">
                <b class='price'>$${price}.00</b>
                <div class="linea"></div>
                <div class="stock">Stock: ${quantity}</div>
                <div id="${id}"><div class="circle f" id="${id}"><div class="h f" id="${id}"><svg class="f" id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path class="f" id="${id}" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></i></div></div></div>

            </div>
            <b class="prenda">${name}</b>
        </div>
    </div>
    `
  })
if(n===1){
  cuerda.innerHTML=html;
}else{
  html='';
  cuerda.innerHTML=html
  n=0
}

}
codigo()
}

{
  function funcion() {
    const scrollY = window.pageYOffset
    $fixy.forEach(current => {
      const sectionHeight = current.offsetHeight,
        sectTop = current.offsetTop - 58

      if (scrollY > sectTop && scrollY <= sectTop + sectionHeight) {
        document.querySelector('.fixed').classList.remove('fixed1')
      } else {
        document.querySelector('.fixed').classList.add('fixed1')
      }
    })
  }
  window.addEventListener('scroll', funcion)
}



function logo(){
  const arrayc=Object.values(cars)
  if (!arrayc.length){
    contentcar.innerHTML=`
    <div>
        <img src="./empty-cart.png" alt="">
    </div>
    `;
  }
}
function printshitscard(){
  let html="";
  const arrayc=Object.values(cars)
  if (!arrayc.length){
    let html=`
    <div>
        <img src="./empty-cart.png" alt="">
    </div>
    `;
    contentcar.innerHTML=html
    let z=0,f=0;
    total.innerHTML=`<b>${f}</b>`
    valor.innerHTML=`<span class="todo">Valor a pagar</span>
                    <div>$${z}.00</div>`
    return
  }
  
  const arraycard=Object.values(cars);
  let z=0,f=0;
  arraycard.forEach(function({id,name,price,image,acount,quantity}){
    f+=acount
    z+=acount*price
    total.innerHTML=`<b>${f}</b>`
    valor.innerHTML=`<span class="todo">Valor a pagar</span>
                    <div>$${z}.00</div>`
    html+=`
    <div class="gancho1">
    <img class='imagen1' src="${image}" alt="">
    <div class="etiqueta1">
            <div class="prest">
                <b class="prenda">${name}</b>
                <b class='price'>$${price}.00</b>
            <div class="linea"></div>
            </div>
            <div>
                <div class="stock stock1">Amount:${acount}</div><br>
                    <div class="iconos">
                        <div class="poin" id="${id}"><i class="j fa-solid fa-minus"></i></div>
                        <div class="poin" id="${id}"><i class="j fa-solid fa-plus"></i></div>
                    </div>
            </div>
    </div>
    <div class="poin2" id="${id}"><i class='t bx bx-trash bx-md'></i></div>
</div>
    `
  })
contentcar.innerHTML=html;

}
  events1.addEventListener("click",function(){
    codigo()
  });

  events2.addEventListener("click",function(){
  let i=0
  prenda(i)
  });
  events3.addEventListener("click",function(){
    let i=1
    prenda(i)
  });
  events4.addEventListener("click",function(){
    let i=2
    prenda(i)
  });

  carro.addEventListener('click',function() {
   cont.classList.toggle('carro__ocul')
  })
cerrar.addEventListener('click',function(){
  cont.classList.toggle('carro__ocul')
})

cuerda.addEventListener('click',function(e){
  if(e.target.classList.contains('f')){
    const id=e.target.parentElement.id;
    let findropa=ropa.find(function(shir){
      return shir.id===id
    })
    
    if(cars[id]){
      if (cars[id].acount<cars[id].quantity) {
        cars[id].acount++
      }else{
        alert("No Tenemos mas en stock")
      }
    }else{
      cars[id]={
        ...findropa,
        acount:1
      }
    }
    printshitscard()
  };
})

contentcar.addEventListener("click",function(e){
  
  if(e.target.classList.contains("bx-trash")){
    const id=e.target.parentElement.id
    if(confirm("Seguro quieres ELIMINAR tu seleccion del carrito")){
    delete cars[id];
    }
  };
if(e.target.classList.contains("fa-minus")){
    const id=e.target.parentElement.id
    cars[id].acount--
    if(cars[id].acount===0){
      delete cars[id]
}
    
};
if(e.target.classList.contains("fa-plus")){
  const id=e.target.parentElement.id
  if (cars[id].acount<cars[id].quantity) {
    cars[id].acount++
  }else{
    alert("no tenemos mas en stock")
  }
};
logo()
printshitscard()

})

cardi.addEventListener("click",function(e){
  if(e.target.classList.contains('card')){
    const id=e.target.parentElement.id;
    let findropa=ropa.find(function(shir){
      return shir.id===id
    })

      if(cars[id]){
        if (cars[id].acount<cars[id].quantity) {
        cars[id].acount++
        }else{
          alert("No tenemos mas en stock")
        }
      }else{
        cars[id]={
        ...findropa,
        acount:1
      }
      }
    
    printshitscard()
  };

})

logo();

