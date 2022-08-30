const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//sets symbals that will be used for the effect
class Symbol{
    constructor(x_pos, y_pos, fontSize, canvasHeight){
         this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ(❁´◡`❁)';
         this.x_pos = x_pos;
         this.y_pos = y_pos;
         this.fontSize = fontSize;
         this.text = '';
         this.canvasHeight = canvasHeight 
    }
    draw(context){
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        context.fillText(this.text, this.x_pos * this.fontSize ,this.y_pos * this.fontSize);
        if(this.y_pos * this.fontSize > this.canvasHeight && Math.random() > 0.9){
            this.y_pos = 0;
        } else{
            this.y_pos += 1
        }
    }
}
//creates the effect of the symbols going down the screen
class Effect{
    constructor(canvasWidth, canvasHeight){
          this.canvasWidth = canvasWidth;
          this.canvasHeight = canvasHeight;
          this.fontSize = 25;
          this.columns = this.canvasWidth/this.fontSize;
          this.symbols = [];
          this.#initialize();
          console.log(this.symbols)
    }
    //private function
    #initialize(){
      for(let i = 0; i < this.columns; i++){
         this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
    }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 15;
const nextFrame = 1000/fps;
let timer = 0;

function animate(timeStamp){
       const deltaTime = timeStamp - lastTime;
       lastTime =timeStamp;
       if(timer > nextFrame){
       ctx.fillStyle = 'rgba(0,0,0,0.05)';
       ctx.textAlign = 'center';
       ctx.fillRect(0,0,canvas.width, canvas.height)
       ctx.fillStyle = "#0aff0a";
       ctx.font = effect.fontSize + 'px monospace';
       effect.symbols.forEach(symbol => symbol.draw(ctx))
       timer = 0;   
    } else{
        timer += deltaTime;
    }
       requestAnimationFrame(animate);
} 
//starts animation
animate(0);