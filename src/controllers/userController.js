const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/users.JSON'); 
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8')); 



const controller = {
    index: (req, res) => {
        res.render ('users/index' , {users})
    },

    detail: (req, res) => {
        let user = users.find (el => el.id == req.params.id)
        res.render ('users/detail' , {user})
    },
    login: (req,res) =>{
        res.render("users/login")
    },

    registerView: (req, res) => {
        res.render ('users/register')
    },
    register: (req, res) => {
        res.send("Viaje por POSTTTTTTTTT")
        

        const newUser = req.body
        newUser.id = Date.now()
        newUser.avatar = "/images/avatars/" + req.file.filename
        users.push(newUser)
        fs.writeFileSync(userFilePath, JSON.stringify(users))

        console.log(newUser)

        
        /*
        let {username , name , surname , email , avatar , password} = req.body
        let id = Date.now()
        let userObj = new userObj (id , username , name , surname , email , avatar , password)
        
        if (users == '') {
            users = []
        } 
        if (req.file !== undefined) {
            userObj.avatar = "/images/avatars/" + req.file.filename
        } else {
        userObj.avatar = ''
        }
        users.push (userObj)
        let newUser = JSON.stringify (users)
        fs.writeFileSync (userFilePath , newUser)
        
        res.render ('users/index' , {users})
        */
       

    },
    editView: (req, res) => {
        let user = users.find (el => el.id == req.params.id)
        res.render ('users/edit' , {user})
    },
    edit: (req, res) => {
        for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
        let userAvatar = users[i].avatar
        let {username , name , surname , email, password} = req.body
        let id = users[i].id
        users[i] = {id , username , name , surname , email , password}
        if (req.file !== undefined) {
            users[i].avatar = "/images/avatars/" + req.file.filename
        } else {
        users[i].avatar = userAvatar
        }
        }
    }
    let editedUser = JSON.stringify (users)
    fs.writeFileSync (userFilePath , editedUser)
    res.render ('users/index' , {users})
    },
    deleteView: (req, res) => {
        let user = users.find (el => el.id == req.params.id)
        res.render ('users/delete' , {user})
    },
    delete: (req, res) => {
        let deletedUser = users.filter (el => el.id != req.params.id)
        let newUsers = JSON.stringify (deletedUser)
        fs.appendFileSync (userFilePath , newUsers)
        res.render ('users/index' , {users : deletedUser})
    }
}

module.exports = controller