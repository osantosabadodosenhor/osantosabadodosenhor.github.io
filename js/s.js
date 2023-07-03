var d=1,I=document.getElementById("slc");
function D(){
I.style.transform="translateX(0px)";
document.body.style.backgroundColor="white";
document.body.style.color="black";
}
function N(){
I.style.transform="translateX(-30px)";
document.body.style.backgroundColor="black";
document.body.style.color="#999999";
}
document.getElementById("slc").onclick=function(){d++;if(d>1)d=0;if(d==0)N();else D();}