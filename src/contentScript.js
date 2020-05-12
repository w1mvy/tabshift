window.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key ==  "H") {
                chrome.runtime.sendMessage({shiftH: true},
                                             function(response) {
                    // nothing todo
                });
    } else if (event.ctrlKey && event.key ==  "L") {
                chrome.runtime.sendMessage({shiftL: true},
                                             function(response) {
                    // nothing todo
                });
    }
}, false);
