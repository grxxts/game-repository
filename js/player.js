class Player {
    constructor(ctx, width, height, image,imageLeft, gameWidth, gameHeight, keys) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        
        this.image = new Image();
        this.image.src = image;
        this.imageLeft = new Image();
        this.imageLeft.src = imageLeft;




        this.posX = 50;
        this.poxX0 = gameWidth * 0.80 - this.width;
        this.posY = gameHeight * 0.80 - this.height;
        this.posY0= gameHeight * 0.80 - this.height;
        this.vx = 1;
        this.vy = 1;
        this.gravity = 0.4;
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
      if(this.right){
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
        }else{
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
        if(this.posY <= this.posY0) {
            this.posY += this.vy;
            this.vy += this.gravity;
          } else {
            this.vy = 1;
            this.posY = this.posY0;
          }
      }

      animate(framesCounter) {
        
        if(framesCounter % 10 === 0) {
          this.framesIndex++;
    
          if(this.framesIndex > 1) this.framesIndex = 0;
        }
      }
      moveRight(){
        this.posX += 5
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
            case  this.keys.RIGHT_KEY:
              this.right = true
              this.left = false
              this.posX += 5;
              break;

            case this.keys.LEFT_KEY:
              this.left = true
              this.right = false
              this.posX -= 5;
              break;  
             
              console.log(hello);

               
             
          }
        })

      //   function keyDownHandler(event) {
      //     if(event.keyCode == 39) {
      //         rightPressed = true;
      //     }
      //     else if(event.keyCode == 37) {
      //         leftPressed = true;
      //     }
      //     if(event.keyCode == 40) {
      //       downPressed = true;
      //     }
      //     else if(event.keyCode == 38) {
      //       upPressed = true;
      //     }
      // }
      }
}