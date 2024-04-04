const mongoose = require("mongoose")

 mongoose.connect("mongodb+srv://arakash7025:akash2004@cluster0.hj9vyqw.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")

 .then(()=>{
        console.log("DB connected")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema

const EmployeeSchema = new mongoSchema({
 ename:String,
 eage:Number,
 eposition:String,
 esalary:Number
})


var empolyeeModel = mongoose.model("empolyee",EmployeeSchema)

module.exports = empolyeeModel