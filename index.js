import express, { json } from "express";

const app = express();


app.use(express.json());

const userData = {
    json:{username: "alice", age: 25, email: "alice@example.com"},
    josn:{username: "bob", age: 30, email: "bob@example.com"},
    json:{username: "charlie", age: 28, email: "charlie@example.com"},
}


app.get("/user" ,  (req , res) => {
    const user = req.query.user

    if(!user){
        return res.status(400).json({message: 
            "username cannot be empty"
        })
    }

    if(userData[user]){
        return res.status(200).json({message:
             "user found",data: userData[user]
        })
    } else {
        return res.status(404).json({message: 
            "user not found"
        })
    }
});

app.listen("5010" , (req , res) => {
    console.log("running on port 5010")
})