basic.forever(function () {
    if (input.lightLevel() < 50) {
        led.enable(true)
        led.setBrightness(255)
        basic.showIcon(IconNames.Yes)
    } else {
        led.enable(false)
        led.setBrightness(0)
    }
})
