class Obstacle {
    constructor(image) {
        this.image = image
        this.x = width
        this.y = (Math.random() * height) / 2
        this.width = 50
        this.height = 50 
    }

    draw() {
        this.x--
        image(this.image, this.x, this.y, this.width, this.height)
    }

    collision(playerInfo) {
        let obstacleX = this.x + this.width / 2
        let obstacleY = this.y + this.height / 2

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2

        if (dist(obstacleX, obstacleY, playerX, playerY) > this.width / 2) {
            return false
        } else {
            playerInfo.score += 100
            document.querySelector("h2 span").innerText = playerInfo.score
            return true
        }
    }
}



