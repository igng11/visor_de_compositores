// Chopin//
imgs=['/img/chopin_1.jpg',
    '/img/chopin_2.jpg',
    '/img/chopin_3.jpg'
    ]
indx=[];

let i='0';
const boton= document.getElementById('chopi');
const visor=document.querySelector('.contenedor');
boton.addEventListener('click', ()=>{
  visor.style.visibility='visible';
  $('#chopin_1')[0].src = imgs[i];
  $('#chopin_1').addClass('chopin');
})

const botderecha= document.getElementById('derecha');
botderecha.addEventListener('click', ()=>{
    if (i<=1){
        ++i;
    }else{
        i=0;
    }
    $('#chopin_1')[0].src = imgs[i];
    // chopin_1.src=imgs[i];
})

//Liszt
imgs_l=[
    '/img/liszt_1.jpg',
    '/img/liszt_2.jpg',
    '/img/liszt_3.jpg'
];
index=[];

let k='0';

const boton_l= document.getElementById('liszt');
boton_l.addEventListener('click', ()=>{
    visor.style.visibility='visible';
    $('#chopin_1')[0].src = imgs_l[k];
    $('#chopin_1').removeClass('chopin');
    $('#chopin_1').addClass('liszt');
    $('#derecha').attr('id', 'derecha_l');
})

const derecha_li= document.getElementById('derecha');
derecha_li.addEventListener('click', ()=>{
    if (k<=1){
        ++k;
    }else{
        k=0;
    }
    chopin_1.src=imgs_l[k];
})