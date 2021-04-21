

function getinfo(){
    // config.js vajalik kus on spreadsheetId mis saab spreadsheeti URList ja API key mis saab google develeoperist
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/A1:B2' + '?key=' + key)
        .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
                
               
    
      });
    }
   
getinfo();