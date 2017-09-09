var Player = {Energy:4, Cardsinhand:8, Cardsindeck:48, Health:100}; 
var Player2 = {Energy:4, Cardsinhand:8, Cardsindeck:48, Health:100}; 

var Player = function(Energy, Cardsinhand, Cardsindeck, Health){
this.Energy = Energy;
this.Cardsinhand = Cardsinhand;
this.Cardsindeck = Cardsindeck;
this.Health = Health;
this.update = function(){

}
};
var player = new Player()
var player2 = new player ()
draw = function (){
	player.update();
	player2.update();
};