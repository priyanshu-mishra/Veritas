async function getKeyWords(title) {
    const url = "https://api.monkeylearn.com/v3/extractors/ex_YCya9nrn/extract/";

    const options = {
        method: "POST",
        headers: {
            'Authorization': 'Token 817013dbeb508e1c7eef9995ad9cacc76b0d2ea4',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            'data': [title]
        })
    };

    myStr = ""

    await fetch(url, options)
    .then( res => res.json() )
    .then( data => data[0]["extractions"].forEach( x => (myStr += x["parsed_value"] + ' ') ) );

    return myStr.trim();
}

async function getLink(query, party){
    searchID = '';
    switch (party){
      case -2: // Left
        searchID = "001353002542932097746:svp8c0cxzfo";
        break;
      case -1: // Left-Center
        searchID = "001353002542932097746:oygeymvug1r";
        break;
      case 0: // Center
        searchID = "001353002542932097746:6yewk3wo5u3";
        break;
      case 1: // Right-Center
        searchID = "001353002542932097746:n7uanglivao";
        break;
      case 2: // Right
        searchID = "001353002542932097746:our9mmmupxd";
        break;
    }
    // searchID = '001353002542932097746:cgjtax3tiny';
    const url = 'https://customsearch.googleapis.com/customsearch/v1?cx=' + searchID + '&num=1' + '&q=' + query + '&key=AIzaSyDZzIr9PtE9BSMGsv3saKrVWfdmnHr6dTg';
  
    const options = {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    };
  
    theLink = ""
  
    await fetch(url, options)
    .then( res => res.json() )
    .then(data => (theLink = data["items"][0].link));
  
    return theLink;
}
  
  
function openWindow(party){
    // This just gets the h1 header => gets the keywords => getlink => open it in new tab
    getKeyWords(document.getElementsByTagName('h1')[0].innerText)
    .then(keyWords => getLink(keyWords, party))
    .then(x => window.open(x))
}