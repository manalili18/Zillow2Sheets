

 /**
 * The event handler triggered when editing the spreadsheet.
 * @param {Event} e The onEdit event.
 */
function onEditInstallable(e) {
    // Set a comment on the edited cell to indicate when it was changed.
    //Logger.log('something happened')

    var curSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var curCell = e.range;
    var curRow = curCell.getRow();
    var curCol = curCell.getColumn();

    //range.setNote('Col num: ' + range.getColumn());

    // Leave if not in first column
    // TODO fix bug! if selected a large range, it will not return
    if(curCol != 1) return;

    var titleCell = curSheet.getRange(1,2);
    var curTitle = titleCell.getValue();
    var titles = [];

    // get the top row info
    while(curTitle) {
        titles[titles.length] = curTitle;
        titleCell = titleCell.offset(0,1);
        curTitle = titleCell.getValue();
    }
    
    Logger.log('titles: ' + titles.toString());

    // get value from current cell
    var url = curCell.getValue();

    var houseDetails = zillowScraper(url);
    







    // TODO populate row with houseDetails
    // TODO only populate row if it has a heading
    var editCell = curCell.offset(0,1);
    for(var i=0; i<20; i++){

        // skip if cell contains text
        if(editCell.getValue()) {
            editCell = editCell.offset(0,1);
            continue;
        }

        var propertyName = '';
        propertyName = curSheet.getRange(1,i+2).getValue();

        // stop filling out the page when you run out of titles
        if(!propertyName) break;

        // TODO fill cell with details from zillowScraper
        editCell.setValue(propertyName);

        // go to next cell to the right
        editCell = editCell.offset(0,1);

    }
    

    /*
    var adjacentData = curSheet.getRange(curRow,curCol,1,20);
    //var isBlank = false;

    //Logger.log('something');
    //Logger.log(adjacentData.toString());
    
    // this is to check for data, probs will delete later

    for(var i=0; i<adjacentData.length; i++){
    //for(var j=0; j<adjacentData.length; j++){
        var i_val = 'i: ' + i;
        //var j_val = 'j: ' + j;
        var data = 'data: ' + adjacentData[i][j];
        var log_str = i_val + '  '  + j_val + '  ' + data
        Logger.log(log_str);
      //Logger.log(adjacentData[i][j]);
    //}
    }
    //Logger.log(adjacentData);

    // only run if adjacentdata is blank
    if(false){
    curCell.setNote('Valid editable data');
    } else {
    curCell.setNote('fuck');
    }
    */

}

function splitAddr(addr) {
    
    /* 
     * example API call
     * we want to return an array with this addr and citystatezip info
     *
     * https://www.zillow.com/webservice/GetSearchResults.htm
     *  ?zws-id=<ZWSID>
     *  &address=2114+Bigelow+Ave
     *  &citystatezip=Seattle%2C+WA
     */

    var split_i = addr.indexOf(',');
    var len = addr.length;
    
    var address = addr.substring(0,split_i);
    var citystatezip = addr.substring(split_i+1,len);

    // TODO probably should throuw error here, but i just want code lmao
    // to clarify, throuw error if the data isnt in the right format
    // in otherwords, validate with regex probably
    // if regex doesnt match, then you can throw error, probably most accurate
    // way to exit without doing something weird.

    return [address.trim(),citystatezip.trim()]

}

// TODO
function zillowScraper(theURL,titles) {
    
    /* 
     * example API call
     * we want to return an array with this addr and citystatezip info
     *
     * https://www.zillow.com/webservice/GetSearchResults.htm
     *  ?zws-id=<ZWSID>
     *  &address=2114+Bigelow+Ave
     *  &citystatezip=Seattle%2C+WA
     */

    // URL formatting
    var webpage;

    try {
        webpage = UrlFetchApp.fetch(theURL).getContentText();
    } catch(e) {
        Logger.log('oops, something happened with the url');
    }

    // TODO list
    // URL dump from api
    // scrape for details url
    // url dump from that details page
    // scrape for relevant details from sheets using keywords
    var results_dict;

}



/**
 *
 * The only way to learn to code is to copy and paste from stackoverflow.
 * The following function should handle http requests the way I want it to.
 * TODO learn how to use this. Maybe just use a synchronous req instead.
 * This is unavailable on google sheets, they have their own builtin tool
 * 
 * Source: https://stackoverflow.com/questions/247483/http-get-request-in-javascript
 * Date Accessed: 2020 Mar 07
 *
 */
/*
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
} 

function httpGet(theUrl) {
    var xmlHttp = new HttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;

    
} */
