const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    playerKeys: {
        TOP_KEY: 38,
        RIGHT_KEY: 39,
        LEFT_KEY: 37
    },




    init: function () {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;



        this.start();
    },

    start: function () {
        this.reset()
        this.interval = setInterval(() => {
            this.framesCounter++;

            this.drawAll();
            this.moveAll();
            if (this.isCollision()) {
                this.inPLatform()
            } else {
                this.player.posY0 = 400
            }
            this.generateObstacles();
            if(this.framesCounter%300==0)this.generateEnemies();
            
            // this.inPLatform();

        }, 1000 / this.fps)
    },


    reset: function () {
        this.background = new Background(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, 90, 70, "img/pig-right-move.png", "img/pig-left-move.png", this.width, this.height, this.playerKeys);
        this.obstacles = [];
        this.enemies = [];
        

    },



    clear: function() {

    },


    drawAll: function() {
        this.background.draw();
        this.player.draw(this.framesCounter);
        // this.enemy.draw(this.framesCounter);
        this.obstacles.forEach(obstacle => obstacle.draw());
        this.enemies.forEach(enemy => enemy.draw(this.framesCounter));

    },


    moveAll: function () {
        this.player.move();


    },

    generateEnemies: function() {
        if(this.enemies.length<8){

            this.enemies.push(new Enemy(this.ctx, 60, 100, "img/butcher-png.png", 
            // "img/butcher-left.svg",
             this.width, this.height, 60,100));
        }
        // console.log(this.enemies);

    },

    generateObstacles: function () {

        // me genera 8 elementos en el array Whaaaaat??


        if (this.obstacles.length <= 5) {
            for (i = 0; i <= 5; i++) {
                if (i === 0) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 25, this.width, this.height, this.width * 0.8, this.height * 0.5))
                } else if (i === 1) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 25, this.width, this.height, this.width * 0.5, this.height * 0.5))
                } else if (i === 2) {
                    this.obstacles.push(new Obstacle(this.ctx, 80, 25, this.width, this.height, this.width * 0.35, this.height * 0.6))
                } else if (i === 3) {
                    // this.obstacles.push(new Obstacle(this.ctx, 100, 25, this.width, this.height, this.width * 0.2, this.height * 0.5))
                } else if (i === 4) {
                    this.obstacles.push(new Obstacle(this.ctx, 10, 25, this.width, this.height, this.width * 0.1, this.height * 0.5))
                } else
                    this.obstacles.push(new Obstacle(this.ctx, 100, 25, this.width, this.height, this.width * 0.5, this.height * 0.5))

            }
        }

    },
    gameOver: function () {
        clearInterval(this.interval)
    },

    isCollision: function () {
        // colisiones genéricas
        // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
        return this.obstacles.some(obstacle => (this.player.posX + this.player.width > obstacle.posX && obstacle.posX + obstacle.width > this.player.posX && this.player.posY + this.player.height > obstacle.posY && obstacle.posY + obstacle.height > this.player.posY))
    },





    inPLatform: function () {
        this.obstacles.forEach((obstacle) => {
            if (this.player.posX + this.player.width > obstacle.posX && this.player.posX < obstacle.posX + obstacle.width && this.player.posY < obstacle.posY - 65) {

                this.player.posY0 = obstacle.posY - 65;
                console.log(this.player.posY0)

            }


        })
        //     if(this.player.posX + this.player.width > this.obstacles[2].posX && this.player.posX < this.obstacles[2].posX + this.obstacles[2].width && this.player.posY < this.obstacles[2].posY){

        //         this.player.posY0 = 240
        //        console.log(this.player.posY0)
        //     } else {
        //         this.player.posY0 = 400
        //     }
        //    }
    }
}





