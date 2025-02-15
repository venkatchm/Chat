import express from "express" 

const app = express();

app.get("/healthcheck", (req, res): any => {
   
   return res.json({
      message : "hello thiru"
    })
})

app.listen(3000, () => {
    console.log("server start running at 3000")
});