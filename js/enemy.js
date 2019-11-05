class Enemy {
    constructor(ctx, width,height,image,imageLeft,  gamesWidth, gamesHeight, posX, posY) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.gamesWidth = gamesWidth;
        this.gamesHeight = gamesHeight;

        this.image = new Image();
        this.image.src = image;
        this.imageLeft = new Image();
        this.imageLeft.src = imageLeft;

        this.posX = posX;
        this.posY = posY;

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

    move(){

    }


    animate(framesCounter) {
        if (framesCounter % 10 === 0) {
            this.framesIndex++;

            if (this.framesIndex > 1) this.framesIndex = 0; 
        }
    }

}

