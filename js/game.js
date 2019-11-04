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


        }, 1000/this.fps)
    },


    reset: function() {
        this.background = new Background(this.ctx, this.width , this.height)
        this.player = new Player(this.ctx, 90, 70, "img/pig-right-move.png", "img/pig-left-move.png", this.width, this.height, this.playerKeys);
        // this.ctx, 50, 150, 'img/player.png', this.width,this.height, this.playerKeys
    },



    clear: function() {

    },


    drawAll: function(){
        this.background.draw();
        this.player.draw(this.framesCounter);
        
    },


    moveAll: function() {
        this.player.move();
        
    }
 


}





