let _distance_cm = 0
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    _distance_cm = Brickcell.getDistance(DigitalPin.P12, DigitalPin.P13)
    serial.writeLine("" + (_distance_cm))
    basic.showNumber(_distance_cm)
    basic.pause(2000)
})
