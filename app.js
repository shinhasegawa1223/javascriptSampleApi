const express = require('express')

//expressを実施させるために指定
const app = express()

//portを指定
const port = 3005

let booklog ={}

//sample data
let booklits =[
    {
      "name": "John",
      "text": "Hello, world!"
    },
    {
      "name": "Emily",
      "text": "Nice to meet you!"
    },
    {
      "name": "David",
      "text": "How are you doing?"
    }
  ]
  

//Jsonを使用できるようにする
app.use(express.json())



//post method
app.post('/booklog', (req, res) => {
     booklog = req.body

    //booklog.name , blook.text  is null
    if(!(booklog.name && booklog.text)){
        return res.json({
            "OK":false,
            "error":"invalid parameter"
        })
    }

    //booklog.name , blook.text  is not null
    res.json({
        "OK":true,
        "booklog": booklog
    })
})

//get booklists
app.get('/getbooklists', (req, res) => {
    res.json({
        "OK":true,
        "booklists":
            booklits
        
    })
})

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})




