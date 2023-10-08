import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.static("Scripts"));

// {   //creating a date object and get current day, date, month //
//     var date = new Date();
//     var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
//     var day = days[date.getDay()];
//     var month = months[date.getMonth()];
//     var dateOfMonth = date.getDate();
// }

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        MyDay_List: MyDay_ListItems,
    });
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

var MyDay_ListItems = ["iwwtem 1...this is a check to see if the extra content (the content outside the width of the li gets wrap up and shown line or a scroll bar appears or it just get cut out,...my bad this long text just fall a little short to test the functionallity but now as i have increased it a lot . i think it will work )", "item 2", "item 3"];