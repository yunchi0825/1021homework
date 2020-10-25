let x = 0
input.onButtonPressed(Button.A, function () {
    x = 8
    for (let index = 0; index < 9; index++) {
        for (let y = 0; y <= x + 1; y++) {
            led.plot(x - y, y)
            basic.pause(50)
        }
        x += -1
    }
})
