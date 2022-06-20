class bonus {
    constructor(ctx, canvasSizeW, canvasSizeH) {
        this.ctx = ctx
        this.canvasSize = { w: canvasSizeW, h: canvasSizeH }
        this.bonusSize = { w: 30, h: 30 }
        this.bonusPos = { x: undefined, y: 0 }
        this.bonusSpeedX = undefined
        this.bonusScore = 20
        this.randomStartX = Math.floor(Math.random() * 10)

        this.bonusImage = 'images/gary.png'
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.bonusImage

        this.bonusPos.x = Math.floor(Math.random(this.bonusPos.x) * this.canvasSize.w - this.playerSizeW / 2) - this.crazyEnemySize.w / 2
        if (this.bonusPos.x <= 0) {
            this.bonusPos.x = this.bonusPos.x + this.bonusSize.w + this.bonusSize.w
        }

        this.bonusSpeedX = Math.floor(Math.random() * 20)
        if (this.bonusSpeedX < 10) {
            return this.bonusSpeedX = Math.floor(Math.random() * 20)
        }
    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.bonusSize, this.bonusPos.x, this.bonusPos.y)

        this.move()
    }

    move() {
        this.bonusPos.y += 10
        if (this.bonusPos.x >= this.canvasSize.w - this.crazyEnemySize.w || this.crazyEnemyPos.x < 0) {
            this.turnAround()
        }

        if (this.randomStartX < 5) {
            return this.crazyEnemyPos.x += this.crazyEnemySpeedX
        } else if (this.randomStartX >= 5) {
            return this.crazyEnemyPos.x -= this.crazyEnemySpeedX
        }
    }

    turnAround() {
        this.crazyEnemySpeedX *= -2
    }
}