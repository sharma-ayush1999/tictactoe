function players(){
	console.log('players called');
	var radios = document.getElementsByName('select');
	console.log(radios.length);
	for (var i = 0; i < 2; i++) {
		if(radios[i].checked){
			var open = document.getElementById('ask');
			open.style.display="none";
			var btn = document.getElementById('play');
			btn.style.display = "none";
			var playgamenow = document.getElementById('playgamenow');
			playgamenow.style.display = "block";	
			opt();
		}
	}
	
}
	function opt(){
		var radios = document.getElementsByName('select');
		var value1 = document.getElementById('radio1').value;
		var value2 = document.getElementById('radio2').value;
		for (var i = 0; i < 2; i++) {
		if(radios[0].checked){
			document.getElementById('rounds').innerHTML = "Player1\t=\t"+ value1  + "\t" + "<br>" + "Player2\t=\tO";
		}
		else
			document.getElementById('rounds').innerHTML = "Player1\t=\t"+ value2 + "\t" + "<br>" + "Player2\t=\tX";
		}
	}
function selection(){
	console.log('selection called');
	var open = document.getElementById('ask');
	open.style.display="block";
}

var over= "X";
function getblock1() {
    var b1 = document.getElementById("one");
    var b2 = document.getElementById("two");
    var b3 = document.getElementById("three");
    var b4 = document.getElementById("four");
    var b5 = document.getElementById("five");
    var b6 = document.getElementById("six");
    var b7 = document.getElementById("seven");
    var b8 = document.getElementById("eight");
    var b9 = document.getElementById("nine");
    
    b1.value="";
    b2.value="";
    b3.value="";
    b4.value="";
    b5.value="";
    b6.value="";
    b7.value="";
    b8.value="";
    b9.value="";
    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
    b6.disabled=false;
    b7.disabled=false;
    b8.disabled=false;
    b9.disabled=false;
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";
    }
    function check(){
    var b1 = document.getElementById("one");
    var b2 = document.getElementById("two");
    var b3 = document.getElementById("three");
    var b4 = document.getElementById("four");
    var b5 = document.getElementById("five");
    var b6 = document.getElementById("six");
    var b7 = document.getElementById("seven");
    var b8 = document.getElementById("eight");
    var b9 = document.getElementById("nine");

    b1.disabled=true;
    b2.disabled=true;
    b3.disabled=true;
    b4.disabled=true;
    b5.disabled=true;
    b6.disabled=true;
    b7.disabled=true;
    b8.disabled=true;
    b9.disabled=true;
    }
function getblock() {
    getblock1(); 
    players();
    document.getElementById('addnew').innerHTML = "";
    document.getElementById('rounds').innerHTML = "";
    document.getElementById('playgamenow').style.display = "none";
    document.getElementById('play').style.display = "block";
}
function popup(getwinner) {
	check();
	setTimeout(function(){
      	popuptext = document.getElementById("text");
      	popuptext.innerHTML = getwinner + " wins.";
      	var para = document.createElement("P");
      	para.innerHTML = getwinner + " wins the round.";
      	document.getElementById("addnew").appendChild(para);
      	var pop = document.getElementById("popup");
      	var overlay = document.getElementById("sumr");
      	pop.style.visibility = "visible";
      	overlay.style.visibility ="visible";
      	
      	players();
      }
      	, 400);
}
function end() {
    var b1 = document.getElementById("one").value;
    var b2 = document.getElementById("two").value;
    var b3 = document.getElementById("three").value;
    var b4 = document.getElementById("four").value;
    var b5 = document.getElementById("five").value;
    var b6 = document.getElementById("six").value;
    var b7 = document.getElementById("seven").value;
    var b8 = document.getElementById("eight").value;
    var b9 = document.getElementById("nine").value;
    
    if (((b1=="X") || (b1=="O")) && ((b1 == b2) && (b2 == b3))) {
        popup(b1);
    }
    
    else if (((b1=="X") || (b1=="O")) && ((b1 == b4) && (b4 == b7))){
         popup(b1);
    }
    
    else if (((b9=="X") || (b9=="O")) && ((b9 == b8) && (b8 == b7))){
         popup(b9);
    }
    
    else if (((b9=="X") || (b9=="O")) && ((b9 == b6) && (b6 == b3))){
       popup(b9);
    }
    
    else if (((b4=="X") || (b4=="O")) && ((b4 == b5) && (b5 == b6))){
       popup(b4);
    }
    
    else if (((b2=="X") || (b2=="O")) && ((b2 == b5) && (b5 == b8))){
       popup(b2);
    }
    
    else if (((b1=="X") || (b1=="O")) && ((b1 == b5) && (b5== b9))){
       popup(b1);
    }
    
    else if (((b7=="X") || (b7=="O")) && ((b7 == b5) && (b5 == b3))){
       popup(b7);
    }
 }  	

 function tie(){
 	var tie = document.getElementById('text');
 	tie.innerHTML = "It's a Tie";
 	var pop = document.getElementById("popup");
  	var overlay = document.getElementById("sumr");
 	pop.style.visibility = "visible";
    overlay.style.visibility ="visible";
   	document.getElementById('rounds').style.display ="none";
 }

 function set(x, over) {
     if (x==1) {
     var button = document.getElementById("one");
     button.value = over;
     button.disabled=true;
     }
     else if (x==2) {
     var button = document.getElementById("two");
     button.value = over;
     button.disabled=true;
     }
     else if (x==3) {
     var button = document.getElementById("three");
     button.value = over;
     button.disabled=true;
     }
     else if (x==4) {
     var button = document.getElementById("four");
     button.value = over;
     button.disabled=true;
     }
     else if (x==5) {
     var button = document.getElementById("five");
     button.value = over;
     button.disabled=true;
     }
     else if (x==6) {
     var button = document.getElementById("six");
     button.value = over;
     button.disabled=true;
     }
     else if (x==7) {
     var button = document.getElementById("seven");
     button.value = over;
     button.disabled=true;
     }
     else if (x==8) {
     var button = document.getElementById("eight");
     button.value = over;
     button.disabled=true;
     }
     else if (x==9) {
     var button = document.getElementById("nine");
     button.value = over;
     button.disabled=true;
     }
     end();
     }

    function game(button) {
    if (over=="X") {
    over="O";
    set(button, over);
    }
    else if (over=="O") {
    over="X";
    set(button, over);
    }
    }