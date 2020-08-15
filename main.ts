input.onButtonPressed(Button.A, function () {
    hero.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    hero.change(LedSpriteProperty.Y, -1)
})
let x = 0
let nahoda = 0
let hero: game.LedSprite = null
hero = game.createSprite(0, 2)
let ball = game.createSprite(2, 2)
let enemy = game.createSprite(4, 2)
basic.forever(function () {
    basic.pause(1000)
    nahoda = randint(-25, 25)
    x = 180
    ball.move(1)
    if (hero.isTouching(ball)) {
        ball.turn(Direction.Right, x + nahoda)
    } else {
        if (enemy.isTouching(ball)) {
            ball.turn(Direction.Right, x + nahoda)
        } else {
            if (ball.isTouchingEdge()) {
                music.playMelody("- - - - - - - - ", 120)
                game.gameOver()
            }
        }
    }
    enemy.set(LedSpriteProperty.Y, ball.get(LedSpriteProperty.Y))
})
