screen=document.getElementById("my_screen");

function clearscreen(){
	screen.value ='';	
}

function addtoscreen(input){
	s_v=screen.value
	if (s_v==="No, Operands"|| s_v==="An Error Ocurred!"||s_v===''){
		screen.value ='';
		screen.style.color="black"
		screen.style.fontSize="50px";
	}
	screen.value+=input;
}

function DelRec(){
	screen.value=screen.value.toString().slice(0,-1)
	
}

function calculate(){
	screen.style.color="black"
	screen.style.fontSize="50px";
	sc=document.getElementById("my_screen");
	screen_value=sc.value
	if ( screen_value.trim()===''){
		screen.value="No, Operands"
		screen.style.fontSize="30px";
		screen.style.color="red"
	}
	else{
	
	try{
		screen.value=eval(screen.value)
	}
	catch{
		screen.value="An Error Ocurred!"
		screen.style.fontSize="30px";
		screen.style.color="red"
	}
	}
	
}

calc=document.getElementById("equals");
calc.addEventListener("click",calculate)

// Clear
AC=document.getElementById("AC");
AC.addEventListener("click",clearscreen)

// Delete
DE=document.getElementById("DE");
DE.addEventListener("click",DelRec)

fullstop=document.getElementById(".");
full=fullstop.value
fullstop.addEventListener("click",function(){
addtoscreen(full)})

devide=document.getElementById("/")
de=devide.value
devide.addEventListener("click",function(){
addtoscreen(de)})

// Numbers
a7=document.getElementById("7")
a77=a7.value
a7.addEventListener("click",function(){
addtoscreen(a77)})

a8=document.getElementById("8")
a88=a8.value
a8.addEventListener("click",function(){
addtoscreen(a88)})

a9=document.getElementById("9")
a99=a9.value
a9.addEventListener("click",function(){
addtoscreen(a99)})

a4=document.getElementById("4")
a44=a4.value
a4.addEventListener("click",function(){
addtoscreen(a44)})

a5=document.getElementById("5")
a55=a5.value
a5.addEventListener("click",function(){
addtoscreen(a55)})

a6=document.getElementById("6")
a66=a6.value
a6.addEventListener("click",function(){
addtoscreen(a66)})

a1=document.getElementById("1")
a11=a1.value
a1.addEventListener("click",function(){
addtoscreen(a11)})

a2=document.getElementById("2")
a22=a2.value
a2.addEventListener("click",function(){
addtoscreen(a22)})

a3=document.getElementById("3")
a33=a3.value
a3.addEventListener("click",function(){
addtoscreen(a33)})

a0=document.getElementById("0")
a50=a0.value
a0.addEventListener("click",function(){
addtoscreen(a50)})

// Binary Operators
adi=document.getElementById("addittion")
ad2=adi.value
adi.addEventListener("click",function(){
addtoscreen(ad2)})

sub=document.getElementById("sub")
sub2=sub.value
sub.addEventListener("click",function(){
addtoscreen(sub2)})

m=document.getElementById("multi")
m2=m.value
m.addEventListener("click",function(){
addtoscreen(m2)})

// Unary operators
function increament(){
	current_value=parseInt(screen.value);
	screen.value=current_value+1
}
increament_operator=document.getElementById("increament")
increament_operator.addEventListener("click",function(){
increament()})

function decreament(){
	current_value=parseInt(screen.value);
	screen.value=current_value-1
}
decreament_operator=document.getElementById("decreament")
decreament_operator.addEventListener("click",function(){
decreament()})