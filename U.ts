// Add your code here
//%icon=""
//%color=#FF4500
//%block="Screen Selection"
namespace screenselection {
    let rv = true; // Global variable
    let selectedPlayer = 1; // Variable to track selected player option (1 = Player 1, 2 = Player 2)
    let color = 6
    let hit = 0
    export class screenselection { }
//%block="set up selection"
    export function ss(): void {
        scene.createRenderable(10, function (target, camera) {
            if (hit === 0) {
            target.print("1 Player", 6, 96, 1);
            target.print("2 Player", 106, 96, 1);
            target.print("Press A to start", 32, 56, 1);

            let textwidth = "1 Player".length * 6.5;
            let textheight = 8;
            let padding = 3;

            // Change the selection box based on the selected player
            if (selectedPlayer === 1) {
                if (rv === true) {
                    target.drawRect(6 - padding, 96 - padding, textwidth + (1.5 * padding), textheight + (1.7 * padding), color);
                }
            } else if (selectedPlayer === 2) {
                if (rv === true) {
                    target.drawRect(106 - padding, 96 - padding, textwidth + (1.5 * padding), textheight + (1.7 * padding), color);
                }
            }
            }
        });

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            rv = false; // Confirm the selection
        });

        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            // Toggle player selection when right is pressed
            if (selectedPlayer === 1) {
                selectedPlayer = 2; // Switch to Player 2
            } else {
                selectedPlayer = 1; // Switch to Player 1
            }
        });
        controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
            if (selectedPlayer === 2) {
                selectedPlayer = 1
            } else {
                selectedPlayer  = 2
            }
        })
        return undefined;
    }
    //%block="set selection color to $c"
    //%c.shadow="colorindexpicker"
    export function color2(c: number): void {
color = c
    }
    //%block="set up selection Orientated"
    export function ssss(): void {
        scene.createRenderable(10, function (target, camera) {
            if (hit === 0) {
            target.print("1 Player", 60, 80, 1);
            target.print("2 Player", 60, 96, 1);
            target.print("Press A to start", 32, 56, 1);

            let textwidth = "1 Player".length * 6.5;
            let textheight = 8;
            let padding = 3;

            // Change the selection box based on the selected player
            if (selectedPlayer === 1) {
                if (rv === true) {
                    target.drawRect(60 - padding, 80 - padding, textwidth + (1.5 * padding), textheight + (1.7 * padding), color);
                }
            } else if (selectedPlayer === 2) {
                if (rv === true) {
                    target.drawRect(60 - padding, 96 - padding, textwidth + (1.5 * padding), textheight + (1.7 * padding), color);
                }
            }
            }
        });

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            rv = false; // Confirm the selection
        });

        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            // Toggle player selection when right is pressed
            if (selectedPlayer === 1) {
                selectedPlayer = 2; // Switch to Player 2
            } else {
                selectedPlayer = 1; // Switch to Player 1
            }
        });
        controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
            if (selectedPlayer === 2) {
                selectedPlayer = 1;
            } else {
                selectedPlayer = 2;
            }
        })
    }
    //%block="on Player 1 selected"
    export function on(handler: () => void) {
        forever(function() {
if (rv == false && selectedPlayer === 1 && hit === 0) {
    hit = 1
    handler();
}
        })
    }
    //%block="on Player 2 selected"
    export function off(handler: () => void) {
        forever(function() {
        if (rv == false && selectedPlayer == 2 && hit === 0) {
            hit = 1
            handler();
        }
        })
    }
}
