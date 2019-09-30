alert("Welkom bij de game")
var name = prompt("Wat is je naam?");
 
var choice1 = prompt("Hallo "+name+" kies deur 1 of deur 2");
 
confirm("je kiest: "+choice1);
 

if(choice1.toLowerCase().trim() == "deur 1")
{
  confirm("Je gaat deur 1 in");
 

   var choice2 = prompt("Je vind achter deur 1 een sleutel wil je die oppakken ja of nee?");
 
  if(choice2.toLowerCase().trim() == "ja"){
    confirm("Je pakt de sleutel op!");
    confirm("Je bent vrij!");
  }
 
  if(choice2.toLowerCase().trim() == "nee")
    confirm("Je pakt de sleutel niet op!");
    confirm("Je komt er achter dat een man je volgde in deze reis!");
    confirm("Je kijkt om en daar staat een man met een mes!")
    confirm("Je hebt het niet overleefd...(Game over)")
  }
 


else if (choice1.toLowerCase().trim() == "deur 2")
{
  confirm("Je gaat deur 2 in!");
 

   var choice3 = prompt("Je ziet een slapende man op de grond kies het volgende: wakker maken of laten liggen");
 
  if(choice3.toLowerCase().trim() == "wakker maken"){
    confirm("Je maakt de man wakker");
    confirm("De man word boos wakker en vermoord je");
  }
 
  else if(choice3.toLowerCase().trim() == "laten liggen"){
    confirm("Je hebt de man laten slapen");
    confirm("Je komt weg en hebt de game uitgespeeld!");
  }
 
}