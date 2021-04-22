

function getinfo(){
    // config.js vajalik kus on spreadsheetId mis saab spreadsheeti URList ja API key mis saab google develeoperist
    fetch('https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/A2:E6/' + '?key=' + key + '&majorDimension=COLUMNS  ')
        .then((response) => {
        return response.json()
      })
      .then((data) => {
        imageDiv = document.getElementById("images")
        console.log(data)
        let i = 0
        for (element in data.values[0]){
            let imageElement = document.createElement("img")
            imageElement.src = data.values[0][i] 
            imageDiv.appendChild(imageElement)
            i = i + 1
        }
      });
    }
   
getinfo();