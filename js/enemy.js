class Enemy {
    constructor(ctx, width, height, image, imageLeft, gameWidth, gameHeight, posX, posY) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.image = new Image();
        this.image.src = image;
        this.imageLeft = new Image();
        this.imageLeft.src = imageLeft;

        this.posX = 15;
        this.posY = 450;
        this.vx = 5;
        this.vy = 0;


        this.frames = 2;
        this.framesIndex = 0;
        this.right = true
        this.left = false

    }

    draw(framesCounter) {

        if (this.right) {
            this.ctx.drawImage(
                this.image,
                this.framesIndex * Math.floor(this.image.width / this.frames),
                0,
                Math.floor(this.image.width / this.frames),
                this.image.height,
                this.posX,
                this.posY,
                this.width,
                this.height
            )
            this.animate(framesCounter);

        } else {
            this.ctx.drawImage(
                this.imageLeft,
                this.framesIndex * Math.floor(this.image.width / this.frames),
                0,
                Math.floor(this.image.width / this.frames),
                this.image.height,
                this.posX,
                this.posY,
                this.width,
                this.height
            )
            this.animate(framesCounter);
        }

    }



    move() {
      this.posX += this.vx
     
      if (this.posX > 900){
          this.vx *= -1
      }
      if (this.posX <= 0){
          this.vx *= -1
      }
      return this.vx
    }

   


    animate(framesCounter) {
        if (framesCounter % 10 === 0) {
            this.framesIndex++;
            if (this.framesIndex > 1) this.framesIndex = 0;
        }
    }

}

