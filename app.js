

async function getinfo(){
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
            imageElement.classList.add("mySlides")
            imageElement.style.display = "none"
            imageDiv.appendChild(imageElement)
            i = i + 1   
        }
        document.getElementById("contact_et").innerHTML = 
        "<h4>" + data.values[1][0] + "</h4>" +
        "<p>" + data.values[1][1] + "</p>"+
        "<p>" + data.values[1][2] + "</p>"

        document.getElementById("contact_en").innerHTML = 
        "<h4>" + data.values[2][0] + "</h4>" +
        "<p>" + data.values[2][1] + "</p>"+
        "<p>" + data.values[2][2] + "</p>"
        
        document.getElementById("open_hrs_et").innerHTML = 
        "<h4>" + data.values[3][0] + "</h4>" +
        "<p>" + data.values[3][1] + "</p>"

        document.getElementById("open_hrs_en").innerHTML = 
        "<h4>" + data.values[4][0] + "</h4>" +
        "<p>" + data.values[4][1] + "</p>"
       
        var e
        var myIndex = 0;
        carousel();
        function carousel(){
        var x = document.getElementsByClassName("mySlides")
        for (e = 0; e < x.length; e++) {
          x[e].style.display = "none"
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 4000);
        }
       
      });
    }
    getinfo()


  



