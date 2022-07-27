let bod = document.querySelector('body');
bod.addEventListener("keydown",keys); 
let but =document.querySelector('button');
let x=(window.innerWidth/2-100);
let y=(window.innerHeight-30);
let i=0;let j=0;
let speedX=20;
let mas=[];
but.style.left=x+'px';
but.style.top=y+'px';

function keys(ev){
    switch (ev.key){
        case 'ArrowLeft':{moveXY('l');break;}
        case 'ArrowRight':{moveXY('r');break;}
        case ' ':{         start(++j); break;}
    }
}
function start(jj){
    let bn=creatBut(x);
    bod.appendChild(bn);
    mas[jj]={b:bn,i:jj};
    i=setInterval(movY,100,mas[jj]); 
    
}
function movY(obj){
    let poz = obj.b.style.top.slice(0,obj.b.style.top.toString().length-2);
    obj.b.style.top = Number(poz)-10+'px';
    if (poz<10){
        clearInterval(obj.i);
        obj.b.remove();
    }
}

function moveXY(lr){
     if (lr=='r' && window.innerWidth-240>x) {x+=speedX;}
     if (lr=='l' && 0<x) {x-=speedX;} 
     but.style.left=x+'px';
}
function creatBut(tx){
    let newBut = document.createElement('button');
    newBut.style.cssText=`position:absolute;border-radius:50%;background:red;`;
    newBut.style.left=(tx+100)+'px';
    newBut.style.top=(y-10)+'px';
    return newBut;
}
