radio.onReceivedString(function (receivedString) {
    if (receivedString == "startstop") {
        if (goingForward == 0) {
            goingForward = 1
            cuteBot.motors(50, 50)
            basic.showIcon(IconNames.Yes)
        } else {
            goingForward = 0
            cuteBot.stopcar()
            basic.showIcon(IconNames.No)
        }
    } else if (receivedString == "") {
    	
    } else if ("" == "") {
    	
    }
})
let goingForward = 0
cuteBot.stopcar()
radio.setGroup(0)
goingForward = 0
basic.showIcon(IconNames.No)
