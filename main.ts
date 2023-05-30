input.onButtonPressed(Button.A, function () {
    _throw = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (_throw == 1) {
        radio.sendNumber(5)
        basic.showIcon(IconNames.Diamond)
        _throw = 0
    }
})
let _throw = 0
radio.setGroup(1)
_throw = 0
basic.showString("Readt")
