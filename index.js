const express=require('express');
const path = require('path');
const PORT=process.env.PORT ||2800;
const app=express();

app.use(express.static("build"));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})