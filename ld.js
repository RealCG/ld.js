ld = function(page, getTitle) {
    if (page == undefined) return;
    if (getTitle == undefined) getTitle = true;
    
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function() { 
        if (req.readyState == 4 && req.status == 200) {
            if (getTitle) {
                var startTitle = req.responseText.indexOf('<title>') + 7;
                var endTitle = req.responseText.indexOf('</title>');
                document.getElementsByTagName('title')[0].innerHTML = req.responseText.substring(startTitle, endTitle);
            }
            
            var startBody = req.responseText.indexOf('<body>') + 6;
            var endBody = req.responseText.indexOf('</body>');
            document.body.innerHTML = req.responseText.substring(startBody, endBody);
        }
    }
    
    req.open("GET", page, true);
    req.send(null);
}

l = function(file) {
    if (file == undefined) return;
    
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function() { 
        if (req.readyState == 4 && req.status == 200) {
            document.body.innerHTML = req.responseText;
        }
    }
    
    req.open("GET", file, true);
    req.send(null);
}