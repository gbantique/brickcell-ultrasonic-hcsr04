//% color="#FFBF00" icon="\uf12e" weight=70
namespace Brickcell {

    /**
    * Get Ultrasonic Distance using HC-SR04 in centimeter.
    */
    //% block="Get distance on echoPin:$echoPin by trigPin:$trigPin"
    //% blockId=brickcell_ultrasonic-hcsr04_get_distance
    //% subcategory="ultrasonic hcsr04"
    export function getDistance(trigPin: DigitalPin, echoPin: DigitalPin): number {
        let _distance_cm;

        pins.setPull(echoPin, PinPullMode.PullNone); // Set echoPin as input with no pull-up/down

        pins.digitalWritePin(trigPin, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trigPin, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trigPin, 0)
        _distance_cm = Math.idiv(pins.pulseIn(echoPin, PulseValue.High), 58)
        basic.showNumber(_distance_cm);
        
        return _distance_cm;
    }

}