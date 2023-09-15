function toggleMode() {
  let html = document.documentElement 
  html.classList.toggle('light')
} 

var hamburguer = document.getElementById("hamburguer");
var menu = document.getElementById("menu");

hamburguer.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

//carrosel quem somos

const img = [
  {'id': '1', 'url': './img/1.svg'},
  {'id': '2', 'url': './img/2.svg'},
  {'id': '3', 'url': './img/3.svg'},
];

const pai = document.querySelector('.container-items');

if(pai == null){
      
  const passos = [
    {'id': '1', 'url': './img/p1 (1).svg'},
    {'id': '2', 'url': '/img/p1 (2).svg'},
    {'id': '3', 'url': './img/p1 (3).svg'},
    {'id': '4', 'url': './img/p1 (4).svg'},
    {'id': '5', 'url': './img/p1 (5).svg'},
    {'id': '6', 'url': './img/p1 (6).svg'},
    {'id': '7', 'url': './img/p1 (7).svg'},

  ];

  const passosArduino = [
    {'id': '1', 'url': './img/p2 (1).svg'},
    {'id': '2', 'url': '/img/p2 (2).svg'},
    {'id': '3', 'url': './img/p2 (3).svg'},
    {'id': '4', 'url': './img/p2 (4).svg'},
    {'id': '5', 'url': './img/p2 (5).svg'},
    {'id': '6', 'url': './img/p2 (6).svg'},
    {'id': '7', 'url': './img/p2 (7).svg'},

  ];

  const pai1 = document.querySelector('.container-items-p');
  const pai2 = document.querySelector('.container-items-p2');

  if(pai1 == null){
    for (const imagem of passosArduino){
      pai2.innerHTML +=  `
      <div class='item-p'>
          <img src='${imagem.url}'>
      </div>
      `
    }
    const botao1 = document.querySelectorAll('.action-button-p');
      let itemsP = document.querySelectorAll('.item-p')
      for(const btn of botao1){
        btn.addEventListener('click', function(){

            if(btn.id == 'next'){

                pai2.appendChild(itemsP[0]);
                itemsP = document.querySelectorAll('.item-p');
            }else{
                const lastItemP = itemsP[itemsP.length - 1];
                console.log(lastItemP)
                pai2.insertBefore(lastItemP, itemsP[0]);
                itemsP = document.querySelectorAll('.item-p');

            }
        })
      }
  }else{
    for (const imagem of passos){
      pai1.innerHTML +=  `
      <div class='item-p'>
          <img src='${imagem.url}'>
      </div>
      `
    }
      const botao1 = document.querySelectorAll('.action-button-p');
    let itemsP = document.querySelectorAll('.item-p')
    for(const btn of botao1){
      btn.addEventListener('click', function(){

          if(btn.id == 'next'){

              pai1.appendChild(itemsP[0]);
              itemsP = document.querySelectorAll('.item-p');
          }else{
              const lastItemP = itemsP[itemsP.length - 1];
              console.log(lastItemP)
              pai1.insertBefore(lastItemP, itemsP[0]);
              itemsP = document.querySelectorAll('.item-p');

          }
      })
    }
  
  }

  

  

  }else{
      
    for (const imagem of img){
      pai.innerHTML +=  `
      <div class='item'>
          <img src='${imagem.url}'>
      </div>
      `
    }

    const botao = document.querySelectorAll('.action-button');
    let items = document.querySelectorAll('.item')
    for(const btn of botao){
      btn.addEventListener('click', function(){

          if(btn.id == 'next'){

              pai.appendChild(items[0]);
              items = document.querySelectorAll('.item');
          }else{
              const lastItem = items[items.length - 1];
              console.log(lastItem)
              pai.insertBefore(lastItem, items[0]);
              items = document.querySelectorAll('.item');

          }
      })
    }

    }

    //carrosel passo a passo
