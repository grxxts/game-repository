class Player {
  constructor(ctx, width, height, image, imageLeft, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = image;
    this.imageLeft = new Image();
    this.imageLeft.src = imageLeft;




    this.posX = 15;
    this.posxEnd = gameWidth * 1 - this.width;
    this.posX0 = gameWidth * 0.07 - this.width;
    this.posY = gameHeight * 0.80 - this.height;
    this.posY0 = gameHeight * 0.80 - this.height;
    this.vx = 0;
    this.vy = 0;
    this.gravity = 0.3;
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.frames = 2;
    this.framesIndex = 0;
    this.keys = keys;
    this.setListeners();
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
    this.vy = 1;
    this.posY -= this.posY0

    if (this.posY <= this.posY0) {
      this.posY += this.vy;
      this.vy += this.gravity;
    } 


    if (this.right) {
      //this.posX = this.posX0 + 5;
      console.log("right")
    }
    
    if (this.left) {
      //this.posX = this.posxEnd;
      console.log("left")
    }


  }



  animate(framesCounter) {

    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 1) this.framesIndex = 0;
    }
  }



  setListeners() {

    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case this.keys.TOP_KEY:

          if (this.posY >= this.posY0) {
            this.posY -= this.vy;
            this.vy -= 12;

     
          }
            break;

        case this.keys.RIGHT_KEY:

          this.right = true
          this.left = false
          this.posX += 8;
          break;

        case this.keys.LEFT_KEY:
          this.left = true
          this.right = false
          this.posX -= 8;
          break;





      }
    })


  }
}