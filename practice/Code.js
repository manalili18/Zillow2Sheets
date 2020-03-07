
 /**
 * The event handler triggered when editing the spreadsheet.
 * @param {Event} e The onEdit event.
 */
function onEdit(e) {
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
  
  // get value from current cell
  var addr = curCell.getValue();
  Logger.log('addr: ' + addr);
  
  var adjacentData = curSheet.getRange(curRow,curCol,1,20);
  //var isBlank = false;
  
  //Logger.log('something');
  //Logger.log(adjacentData.toString());
  
  for(var i=0; i<adjacentData.length; i++){
    //for(var j=0; j<adjacentData.length; j++){
      var i_val = 'i: ' + i;
      //var j_val = 'j: ' + j;
      var data = 'data: ' + adjacentData[i][j];
      var log_str = i_val + '  ' /* + j_val */ + '  ' + data
      Logger.log(log_str);
      //Logger.log(adjacentData[i][j]);
    //}
  }
  //Logger.log(adjacentData);
 
  // only run if adjacentdata is blank
  if(/*isBlank*/false){
    curCell.setNote('Valid editable data');
  } else {
    curCell.setNote('fuck');
  }
  
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

    // anyway, I gotta go, ttyl
}

    

    

    
