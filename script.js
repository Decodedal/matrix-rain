const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol{
    constructor(x_pos, y_pos, fontSize, canvasHeight){
         this.characters = '😂🤣❤😍🎶🎂🐱‍🐉🤢🎁🍕🍔🌭🍟🥓🍿🍞🥐🥨🧀🍗🥩🍠🥟🥠';
         this.x_pos = x_pos;
         this.y_pos = y_pos;
         this.fontSize = fontSize;
         this.text = '';
         this.canvasHeight = canvasHeight 
    }
    draw(context){
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        context.fillStyle = "#0aff0a";
        context.fillText(this.text, this.x_pos * this.fontSize ,this.y_pos * this.fontSize);
        if(this.y * this.fontSize > this.canvasHeight){
            this.y = 0;
        } else{
            this.y += 1
        }
    }
}

class Effect{
    constructor(canvasWidth, canvasHeight){
          this.canvasWidth = canvasWidth;
          this.canvasHeight = canvasHeight;
          this.fontSize = 25;
          this.columns = this.canvasWidth/this.fontSize;
          this.symbols = [];
    }
    #initialize(){
      for(let i = 0; i < this.columns.length; i++){
         this.symbols[i] = new Symbol
      }
    }
}

function animate(){

}