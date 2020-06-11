const cnv = document.querySelector('.canvas');
const ctx = cnv.getContext('2d');
const scale = 10;
const rows = cnv.height / scale;
const columns = cnv.width / scale;

let snake;

(function setup(){
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();
    
    window.setInterval(() => {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if(snake.eat(fruit)){
            fruit.pickLocation();
        }
    }, 175);
})()

window.addEventListener('keydown', e => {
    const direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
})

function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    
    this.draw = function(){
        ctx.fillStyle = "yellow";

        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function(){
        for(let i=0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total - 1] = {
            x: this.x,
            y: this.y
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > cnv.width){
            this.x = 0;
        } else if(this.y > cnv.height){
            this.y = 0;
        } else if(this.x < 0){
            this.x = cnv.width;
        } else if(this.y < 0){
            this.y = cnv.height;
        }
    }

    this.changeDirection = function(direction){
        if(direction == 'Up'){
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
        } else if(direction == 'Right'){
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
        } else if(direction == 'Down'){
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
        } else if(direction == 'Left'){
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
        }
    }

    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
            return true;
        }
        return false;
    }
}

function Fruit(){
    this.x;
    this.y;

    this.pickLocation = function(){
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}