var d=1,I=document.getElementById("i");
D();
function D(){
I.src="img/s.png";
document.body.style.backgroundColor="white";
document.body.style.color="black";
}
function N(){
I.src="img/l.png";
document.body.style.backgroundColor="black";
document.body.style.color="#999999";
}
document.getElementById("i").onclick=function(){d++;if(d>1)d=0;if(d==0)N();else D();}