Topf: game.LedSprite = None
Wasser: game.LedSprite = None

def on_button_a():
    Topf.change(LedSpriteProperty.X, -1)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    Topf.change(LedSpriteProperty.X, 1)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_gesture_shake():
    global Wasser
    Wasser = game.create_sprite(randint(1, 5), 0)
    basic.pause(300)
    Wasser.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
    Wasser.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
    Wasser.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
    Wasser.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
    if Wasser.is_touching(Topf):
        game.add_score(1)
    else:
        game.remove_life(1)
    Wasser.set(LedSpriteProperty.Y, 0)
    Wasser.delete()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    global Topf
    if game.score() == 50:
        basic.show_string("Du hast gewonnen!")
    if input.button_is_pressed(Button.AB):
        game.set_score(0)
        game.set_life(10)
        basic.show_string("LOS!")
        Topf = game.create_sprite(2, 5)
basic.forever(on_forever)
