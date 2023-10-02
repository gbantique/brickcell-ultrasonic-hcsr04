serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeLine("" + (Brickcell.getDistance(DigitalPin.P12, DigitalPin.P13)))
    basic.pause(2000)
})
