
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
