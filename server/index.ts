import express from "express" 

const app = express();
const PORT = process.env.PORT || 80;

app.get("/healthcheck", (req, res): any => {
   
   return res.json({
      message : "hello thiru"
    })
})

app.listen(PORT, () => {
    console.log(`server start running at ${PORT}`)
});