(function() {
    chrome.app.runtime.onLaunched.addListener(start);
    chrome.runtime.onInstalled.addListener(start);

    function start() {
        chrome.app.window.create('window.html',
            {
                'bounds': {
                    'width': 1024,
                    'height': 768
                },
                id: 'whatsapp'
            },
            onWindowCreated
        );
    }

    function onWindowCreated(appWin) {
        //nothing for now 
    }

}());