function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
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
    score: 0,
    hasAcorn: false,
    imgGameOver: new Image(),
    imgWin: new Image(),
    realGO: false,






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
            this.clear();
            console.log(this.player.posY0);

            this.framesCounter++;

            this.drawAll();
            this.moveAll();
            if (this.isCollision()) {
                this.inPLatform()
            } 
            
            else {
                this.player.posY0 = 480
            }
            // if (this.isCollisionWinner()) {
            //     this.inPLatformWinner()
            // } else {
            //     this.player.posY0 = 480
            // }
            if(this.framesCounter % 100 === 0) this.score++;
            if(this.isCollisionWinner() && this.hasAcorn){
                this.ctx.drawImage(this.imgWin, 0, 0 , this.width, this.height)
                clearInterval(this.interval)
                this.win.play()
                setTimeout(function(){alert("you have saved yourself from being eaten")}, 500
                )

            }
                
           
            if (this.framesCounter % 300 == 0) this.generateEnemies();
            if (this.framesCounter % 5 == 0) this.generateCoin();
            if (this.isCollisionCoin()) this.Winner
            // this.inPLatform();
            if (this.isCollisionButcher()) {
                console.log("muerto")
            }
            if (this.isCollisionCoin()) {
                this.hasAcorn = true
                console.log(this.hasAcorn)
            }
            if (this.isCollisionButcher()) this.gameOver()


        }, 1000 / this.fps)
    },


    reset: function () {
        this.background = new Background(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, 90, 70, "img/pig-right-move.png", "img/pig-left-move.png", this.width, this.height, this.playerKeys);
        this.coins = [];
        // this.winner = [];
        this.enemies = [];
        this.winners = [];
        this.obstacles = [];
        this.generateObstacles();
        this.generateCoin();
        this.generateWinner();
        ScoreBoard.init(this.ctx, this.score)
        console.log(this.coins)
        this.win = new Audio("audio/Ta Da-SoundBible.com-1884170640.wav")



    },



    clear: function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },


    drawAll: function () {
        this.imgGameOver.src = "img/Web 1920 – 3.png"
        this.imgWin.src = "img/Web 1920 – 4.png"
        this.background.draw();
        this.player.draw(this.framesCounter);
        if (!this.hasAcorn) {
            this.coins.forEach(coin => coin.draw());

        }

        this.obstacles.forEach(obstacle => obstacle.draw());
        this.winners.forEach(winner => winner.draw());
        ScoreBoard.draw(this.score)

        this.enemies.forEach(enemy => enemy.draw(this.framesCounter));

    },


    moveAll: function () {
        this.player.move();
        this.enemies.forEach(enemy => enemy.move())

    },

    generateCoin: function () {
        if (this.coins.length < 1) {
            this.coins.push(new Coin(this.ctx, "img/acorn-custom.png", 50, randomIntFromInterval(100, 1200), randomIntFromInterval(300, 600)-150));

        }

    },

    generateEnemies: function () {
        if (this.enemies.length < 4) {

            this.enemies.push(new Enemy(this.ctx, 60, 100, "img/butcher-png.png",
                // "img/butcher-left.svg",
                this.width, this.height, 60, 100));
        }
        // console.log(this.enemies);

    },

    generateObstacles: function (){

        if (this.obstacles.length <= 10) {
            for (i = 0; i <= 10; i++) {
                if (i === 0) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 0.5, this.width, this.height, this.width * 0.01, this.height * 0.5))
                } else if (i === 1) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 0.5, this.width, this.height, this.width * 0.12, this.height * 0.32))
                } else if (i === 2) {
                    this.obstacles.push(new Obstacle(this.ctx, 80, 0.5, this.width, this.height, this.width * 0.20, this.height * 0.6))
                } else if (i === 3) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 0.5, this.width, this.height, this.width * 0.32, this.height * 0.5))
                } else if (i === 4) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 0.5, this.width, this.height, this.width * 0.46, this.height * 0.32))
                } else if (i === 5) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 0.5, this.width, this.height, this.width * 0.58, this.height * 0.6))
                } else if (i === 6) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 0.5, this.width, this.height, this.width * 0.70, this.height * 0.5))
                } else if (i === 7) {
                    this.obstacles.push(new Obstacle(this.ctx, 100, 0.5, this.width, this.height, this.width * 0.82, this.height * 0.32))
                } else if (i === 8) {
                    this.obstacles.push(new Obstacle(this.ctx, 70, 0.5, this.width, this.height, this.width * 0.94, this.height * 0.6))

                } else
                    this.obstacles.push(new Obstacle(this.ctx, 100, 0.5, this.width, this.height, this.width * 1, this.height * 0.6))

            }
        }
    

    },

    generateWinner: function () {

        if (this.winners.length <= 1) {
         this.winners.push(new Winner(this.ctx, 20, 20, this.width, this.height, this.width * 0.93, this.height * 0.1));


        }

    },


    gameOver: function () {
        this.ctx.drawImage(this.imgGameOver, 0, 0 , this.width, this.height);
        this.realGO = true
        if (this.realGO = true){
        clearInterval(this.interval)}

    },

    // Winner: function () {
    //     if (this.hasAcorn = true && this.player) {
    //         clearInterval(this.interval)
    //     }

    // },

    isCollision: function () {
        // colisiones genéricas
        // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )

        return this.obstacles.some(obstacle => (this.player.posX + this.player.width > obstacle.posX && obstacle.posX + obstacle.width > this.player.posX && this.player.posY + this.player.height > obstacle.posY && obstacle.posY + obstacle.height > this.player.posY))
    },

    isCollisionButcher: function () {
        return this.enemies.some(enemy => (this.player.posX + this.player.width > enemy.posX && enemy.posX + enemy.width > this.player.posX && this.player.posY + this.player.height > enemy.posY && enemy.posY + enemy.height > this.player.posY))

    },

    isCollisionCoin: function () {
        // return this.coins.some(coin => (this.player.posX + this.player.width > coin.posX && coin.posX + coin.width > this.player.posX && this.player.posY + this.player.height > coin.posY && coin.posY + coin.height > this.player.posY))
        return this.coins.some(coin => this.player.posX + this.player.width > coin.posX && this.player.posY < coin.posY && this.player.posX < coin.posX + 50)
    },

    isCollisionWinner: function () {
        return this.winners.some(winner => (this.player.posX + this.player.width > winner.posX && winner.posX + winner.width > this.player.posX && this.player.posY + this.player.height > winner.posY && winner.posY + winner.height > this.player.posY))
    },





    inPLatform: function () {
        this.obstacles.forEach((obstacle) => {
            if (this.player.posX + 40 > obstacle.posX && this.player.posX - this.player.width / 2 < obstacle.posX + obstacle.width && this.player.posY < obstacle.posY - 65) {

                this.player.posY0 = obstacle.posY - 65;
            }
        })

    },


    inPLatformWinner: function () {
       
        this.winners.forEach((winner) => {
            if (this.player.posX + 40 > winner.posX && this.player.posX - this.player.width / 2 < winner.posX + winner.width && this.player.posY < winner.posY - 65) {
                this.player.posY0 = winner.posY - 65;
        
            }
        })
    }
    
};





