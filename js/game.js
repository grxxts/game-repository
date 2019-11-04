const Game = {
    canvas: undefined,
    ctx: undefined,
    width : undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    playerKeys: {
        TOP_KEY: 38,
        RIGHT_KEY: 39,
        LEFT_KEY: 37
    },




    init: function() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width =  window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        


        this.start();
    },

    start: function() {
        this.reset()
        this.interval = setInterval(() => {
            this.framesCounter++;

            this.drawAll();
            this.moveAll();
           
            this.generateObstacles();


        }, 1000/this.fps)
    },


    reset: function() {
        this.background = new Background(this.ctx, this.width , this.height)
        this.player = new Player(this.ctx, 90, 70, "img/pig-right-move.png", "img/pig-left-move.png", this.width, this.height, this.playerKeys);
        this.obstacles = [];
        // this.ctx, 50, 150, 'img/player.png', this.width,this.height, this.playerKeys
    },



    clear: function() {

    },


    drawAll: function(){
        this.background.draw();
        this.player.draw(this.framesCounter);
        this.obstacles.forEach(obstacle => obstacle.draw());
        
    },


    moveAll: function() {
        this.player.move();
        
    },

    generateObstacles: function() {

        // me genera 8 elementos en el array Whaaaaat??


        if(this.obstacles.length <= 5){
       for (i = 0; i <= 5; i++) {
           if(i === 0) {
            this.obstacles.push(new Obstacle(this.ctx, 35, 45, this.width, this.height, this.width * 0.3, this.height * 0.4))
           } else if (i === 1) {
            this.obstacles.push(new Obstacle(this.ctx, 35, 45, this.width, this.height, this.width * 0.5, this.height * 0.4))
           } else if ( i === 2) {
            this.obstacles.push(new Obstacle(this.ctx, 35, 45, this.width, this.height, this.width * 0.3, this.height * 0.4))
           } else if ( i === 3) {
            this.obstacles.push(new Obstacle(this.ctx, 35, 45, this.width, this.height, this.width * 0.2, this.height * 0.4))
        } else if ( i === 4) {
            this.obstacles.push(new Obstacle(this.ctx, 35, 45, this.width, this.height, this.width * 0.1, this.height * 0.6))
           } else 
            this.obstacles.push(new Obstacle(this.ctx, 135, 45, this.width, this.height, this.width * 0.5, this.height * 0.1))
           
       } }
       
    },
 

    // colisiones por hacer 

    // isCollision: function() {
    //     // colisiones genéricas
    //     // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    //     return this.obstacles.some(obs => (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY ))
    //   },

}





