chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.shiftH){
        chrome.tabs.getSelected(null, function(tab){
            chrome.tabs.getAllInWindow(tab.windowId, function(tabs){
                var maxIndex = tabs.length - 1;
                if(tab.index === 0){
                    chrome.tabs.move(tab.id, {index : maxIndex});
                }else{
                    chrome.tabs.move(tab.id, {index : tab.index - 1});
                }
            });
        });
    }
    if(request.shiftL){
        chrome.tabs.getSelected(null, function(tab){
            chrome.tabs.getAllInWindow(tab.windowId, function(tabs){
                var maxIndex = tabs.length - 1;
                if(tab.index === maxIndex){
                    chrome.tabs.move(tab.id, {index : 0});
                }else{
                    chrome.tabs.move(tab.id, {index : tab.index + 1});
                }
            });
        });
    }
    return true;
});
