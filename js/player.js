class Player {
    constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        
        this.image = new Image();
        this.image.src = image;

        this.posX = 50;
        this.posY = gameHeight * 0.98 - this.height;
        this.vy = 1;
        // this.gravity = 0.4;
        this.gameWidth = gameWidth;
    }


    draw() {
        this.ctx.drawImage(
          this.image, 
          
          this.posX, 
          this.posY, 
          this.width, 
          this.height
          )
          
        
      }


      move() {
        if(this.posY <= this.posY0) {
            this.posY += this.vy;
            this.vy += this.gravity;
          } else {
            this.vy = 1;
            this.posY = this.posY0;
          }
      }

      setListeners() {
        document.addEventListener('keydown', (e) => {
          switch(e.keyCode) {
            case this.keys.TOP_KEY:
              if(this.posY >= this.posY0) {
                this.posY -= this.vy;
                this.vy -= 10;
              }
              break;
            case this.keys.SPACE:
              this.shoot()
          }
        })
      }
}