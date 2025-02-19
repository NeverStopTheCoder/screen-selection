// Add your code here
//%block="Custom Selection"
//%icon=""
//%color=#BF3502
//%advanced=true
namespace customselection {
        let rv = true; // Global variable
        let selectedPlayer = 1; // Variable to track selected player option (1 = Player 1, 2 = Player 2)
        let color = 6
        let hit = 0
    //%block="set up Custom selection as Custom 1 $s and Custom 2 $s2"
    export function ss(s: string, s2: string): void {
        scene.createRenderable(10, function (target, camera) {
            if (hit === 0) {
                target.print(s, 6, 96, 1);
                target.print(s2, 106, 96, 1);
                target.print("Press A to start", 32, 56, 1);

                let textwidth = s.length + s.length + 10;
                let textwidth2 = s2.length + s2.length + 10;
                let textheight = 8;
                let padding = 3;

                // Change the selection box based on the selected player
                if (selectedPlayer === 1) {
                    if (rv === true) {
                        target.drawRect(6 - padding, 96 - padding, textwidth + (1.3 * s.length * padding), textheight + (1.7 * padding), color);
                    }
                } else if (selectedPlayer === 2) {
                    if (rv === true) {
                        target.drawRect(106 - padding, 96 - padding, textwidth2 + (1.3 * s2.length * padding), textheight + (1.7 * padding), color);
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
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            if (selectedPlayer === 2) {
                selectedPlayer = 1
            } else {
                selectedPlayer = 2
            }
        })
        return undefined;
    }
        //%block="Set up Orientated custom selection as Custom 1 $s and Custom 2 $s2 Custom 3 $s3"
        export function cs(s: string, s2: string, s3: string): void {
            scene.createRenderable(10, function (target, camera) {
                if (hit === 0) {
                target.print(s, 60, 70, 1);
                target.print(s2, 60, 86, 1);
                target.print("Press A to start", 32, 46, 1);
                target.print(s3, 60, 101, 1)

                let textwidth = s.length + s.length + 10;
                let textwidth2 = s2.length + s2.length + 10;
                let textwidth3 = s3.length + s3.length + 10;
                let textheight = 8;
                let padding = 3;

                // Change the selection box based on the selected player
                if (selectedPlayer === 1) {
                    if (rv === true && textwidth < 1) {
                        target.drawRect(60 - padding, 70 - padding, textwidth + (1.5 - s.length * padding), textheight + (1.7 * padding), color);
                    } else if (rv === true && textwidth > 1) {
                        target.drawRect(60 - padding, 70 - padding, textwidth + (5 + s.length * padding), textheight + (1.7 * padding), color);
                    }
                } else if (selectedPlayer === 2) {
                    if (rv === true && textwidth2 < 1) {
                        target.drawRect(60 - padding, 86 - padding, textwidth2 + (1.5 - s2.length * padding), textheight + (1.7 * padding), color);
                    } else if (rv === true && textwidth2 > 1) {
                        target.drawRect(60 - padding, 86 - padding, textwidth2 + (5 + s2.length * padding), textheight + (1.7 * padding), color);
                    }
                } else if (selectedPlayer === 3) {
                    if (rv === true && textwidth3 < 1) {
                        target.drawRect(60 - padding, 101 - padding, textwidth3 + (1.5 - s3.length * padding), textheight + (1.7 * padding), color)
                    } else if (rv === true && textwidth3 > 1) {
                        target.drawRect(60 - padding, 101 - padding, textwidth3 + (5 + s3.length * padding), textheight + (1.7 * padding), color)
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
                } else if (selectedPlayer === 2) {
                    selectedPlayer = 3; // Switch to Player 1
                } else {
                    selectedPlayer = 1
                }
            });
            controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
                // Toggle player selection when right is pressed
                if (selectedPlayer === 1) {
                    selectedPlayer = 3
                } else if (selectedPlayer === 2) {
                    selectedPlayer = 1
                } else if (selectedPlayer === 1) {
                    selectedPlayer = 2
                } else {
                    selectedPlayer = 2
                }
            })
        }
        //%block="Set custome selection color to $colorinput"
        //%colorinput.shadow="colorindexpicker"
        export function cc(colorinput: number):  void {
            color = colorinput
        }
        //%block="on custom 1 Pressed"
        export function on(handler: () => void) {
            forever(function() {
            if (rv == false && selectedPlayer === 1 && hit === 0) {
                // Handle 1 Player selection logic
                hit = 1;
                handler();
        }
        })
        }
        //%block="on custom 2 Pressed"
        export function off(handler: () => void) {
            forever(function() {
                if (rv == false && selectedPlayer === 2 && hit === 0) {
                    //Handle 2 Player selection logic
                    hit = 1
                    handler();
            }
            })
        }
    //%block="on custom 3 Pressed"
    export function onoff(handler: () => void) {
        forever(function () {
            if (rv == false && selectedPlayer === 3 && hit === 0) {
                //Handle 2 Player selection logic
                hit = 1
                handler();
            }
        })
    }
}