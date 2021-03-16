new Vue({
     el:'#app',
     data:{
       playerHealth:100,monsterHealth:100,
       isRunning:false,turns:[]
     },
     methods:{
     	startGame:function() {
     		this.isRunning = true;  this.playerHealth=100; 
     		this.monsterHealth=100; this.turns=[];
     	},
        attack:function(){
        	var damage = this.calculate(3,10);
        	this.monsterHealth -= damage;
        	this.turns.unshift({ isPlayer:true,text:'Player attacks monster for ' + damage});
        	if(this.checkWin()) { return; }
        	damage = this.calculate(5,12);
            this.playerHealth -= damage;
            this.turns.unshift({ isPlayer:false,text:'Monster attacks Player for ' + damage});
        	this.checkWin();
        },
     	specialAttack:function(){
     	    var damage = this.calculate(7,12);
        	this.monsterHealth -= damage;
        	this.turns.unshift({ isPlayer:true, text:'Player attacks hard  monster for ' + damage});
        	if(this.checkWin()) { return; }
        	damage = this.calculate(6,12);
            this.playerHealth -= damage;
            this.turns.unshift({ isPlayer:false, text:'Monster attacks hard Player for ' + damage});
        	this.checkWin();
     	},
     	heal:function() {
     	   if(this.playerHealth>=100){
     	   	this.playerHealth=100;
     	   }
     	   this.playerHealth += 12;
     	   this.turns.unshift({ isPlayer:true,text:'Player heals for 12'});
     	   var damage = this.calculate(5,10);
           this.playerHealth -= damage;
           this.turns.unshift({ isPlayer:false,text:'Monster attacks Player for ' + damage});
     	},
     	giveUp:function(){ this.isRunning = false; },
     	calculate:function(min,max){ return Math.max(Math.floor(Math.random()*max) + 1,min);},
     	checkWin(){
     		if(this.monsterHealth <= 0)
     		 {    if(confirm('You Won! New Game?')) { this.startGame();} 
     		      else { this.isRunning=false;}     
     		  return true;
     		 }
     		 else if(this.playerHealth <= 0)
     		 	{  if(confirm('You Lost! New Game?')){ this.startGame(); }
                   else{ this.isRunning = false; }
     		 	   return true;
     		 	}
              return false;
     	}
     }
    });