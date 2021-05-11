Class Ctx {

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
  }
  
  setColor(color) {
    ctx.fillStyle = color;
  }
  
  createBox(w, h, x, y) {
    console.log("comming soon!")
  }

}

Class Canvas {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = new Ctx(this.canvas);
  }
  
   size(width, height) {
     this.canvas.width = width;
     this.canvas.height = height;
   }
  
}

module.exports = { Canvas }
