var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var Reset=document.querySelector("#reset");
var b1=document.querySelector("b");
var p=document.querySelector("#sb");
var b2=document.querySelector("#sx");
var num=document.querySelector("input[type='number']");
var p1Score=0;
var p2Score=0;
var wining=false;
var winingScore=5;
p1.addEventListener("click",function(){
	if(!wining){
		p1Score+=1;
		b1.textContent=p1Score;
		
	}
	if(p1Score==winingScore){
		b1.classList.add("winner");
		wining=true;
	
	}

 });
p2.addEventListener("click",function(){
	if(!wining){
		p2Score+=1;
		b2.textContent=p2Score;
		
	}
	if(p2Score==winingScore){ 
		b2.classList.add("winner");
	wining=true;
		
	}
  });
Reset.addEventListener("click",function(){
		reset();
});
function reset(){
	b1.textContent=0;
		b2.textContent=0;
       wining=false;
       p1Score=0;
       p2Score=0;
       b2.classList.remove("winner");
       b1.classList.remove("winner");
       
}
num.addEventListener("change",function(){
	p.textContent=num.value;
	winingScore=Number(num.value);
	reset();
});
