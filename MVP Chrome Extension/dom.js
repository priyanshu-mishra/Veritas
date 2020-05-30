chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action == "getDOM") {
    // sendResponse({dom: document.getElementsByTagName('h1')[0].innerText});


    // Intersect title with the other (h1, h2, h3)s and then take the largest intersection
    title = document.getElementsByTagName('title')[0].innerHTML.split(' ').map( s => s.toLowerCase() );
    result = [];
    
    for (i of [1,2,3]){
      for (tag of document.getElementsByTagName('h' + i)) {
        l = tag.innerHTML.split(' ').map( s => s.toLowerCase() );
        maybeResult = [];
        for (word of title){
          if (l.includes(word)){
            maybeResult.push(word);
          }
        }
        
        if (maybeResult.length > result.length){
          result=maybeResult;
        }
      }
    }

    sendResponse({dom: result.join(' ')});
  }
  else
    sendResponse({}); // Send nothing..
 });