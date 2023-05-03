let variable2 = 0
let variable1 = 0
input.onGesture(Gesture.LogoUp, function () {
    variable2 = 5
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable2)
})
input.onButtonPressed(Button.A, function () {
    variable2 = 2
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable2)
})
input.onGesture(Gesture.TiltRight, function () {
    variable2 = 6
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable2)
})
input.onGesture(Gesture.TiltLeft, function () {
    variable2 = 7
    basic.showNumber(0)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable2)
})
input.onButtonPressed(Button.AB, function () {
    variable2 = 4
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable2)
})
input.onButtonPressed(Button.B, function () {
    variable2 = 3
    basic.showNumber(variable2)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable2)
})
