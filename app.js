

function getinfo(){
    // config.js vajalik kus on spreadsheetId mis saab spreadsheeti URList ja API key mis saab google develeoperist
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '?key=' + key)
        .then((response) => {
            console.log('app.js is connected');
        return response.json()
      })
      .then((data) => {
        console.log(data)
                
               
    
      });
    }
   
getinfo();