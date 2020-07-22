const fetch = require('node-fetch');


let url = "http://67.227.142.183:3000/gettrafficdata"

fetch(url)
    .then(res=>res.json())
    .then(data=>{
        
        for(let i=0;i<data.length;i++){

            console.log(data[i].maxspeed)

        }
    })