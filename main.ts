let Topf: game.LedSprite = null
let Wasser: game.LedSprite = null
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Topf.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Topf.change(LedSpriteProperty.X, 1)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        game.setScore(0)
        game.setLife(10)
        basic.showString("LOS!")
        Topf = game.createSprite(2, 5)
        for (let index = 0; index < 9999; index++) {
            basic.pause(500)
            Wasser = game.createSprite(randint(0, 5), 0)
            basic.pause(200)
            Wasser.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
            Wasser.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
            Wasser.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
            Wasser.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
            if (Wasser.isTouching(Topf)) {
                game.addScore(1)
            } else {
                game.removeLife(1)
            }
            Wasser.set(LedSpriteProperty.Y, 1)
            Wasser.delete()
        }
    }
})
basic.forever(function () {
    if (game.score() == 50) {
        basic.showString("Du hast gewonnen")
        basic.showString("Drücke auf den reset Knopf ")
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . . . . #
            . . . . #
            `)
        game.gameOver()
    }
})
