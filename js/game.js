const Game = {
    canvas: undefined,
    ctx: undefined,
    width : undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,




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


        }, 1000/this.fps)
    },


    reset: function() {
        this.background = new Background(this.ctx, this.width , this.height)
        this.player = new Player(this.ctx, this.width * 0.20, this.height * 0.20, "img/pig prueba.png", this.width, this.height, this.keys);
    },



    clear: function() {

    },


    drawAll: function(){
        this.background.draw();
        this.player.draw();
    },


    moveAll: function() {
        
    }
 


}





