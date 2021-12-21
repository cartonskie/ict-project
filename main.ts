basic.forever(function () {
    if (input.temperature() < 20) {
        basic.showString("verhoog de temperatuur!")
    } else {
        if (input.temperature() > 30) {
            music.playMelody("C5 B C5 B C5 B C5 B ", 120)
            basic.showString("verlaag de temperatuur!")
        } else {
            basic.showString("de temperatuur is goed!")
        }
    }
})
