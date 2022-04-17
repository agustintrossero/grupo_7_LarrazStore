const fs = require('fs');

const User = {
    fileName: './database/users.json',

//Devuelve todos los usuarios en formato de JavaScript.
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

//Se encarga de asignar el ID a los usuarios que se registran en nuestra DB.
    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){
        return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function () {
        return this.getData();
    },

//Devuelve el primer usuario que coincide con el ID que estamos buscando.
    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

//Devuelve el primer usuario encontrado por el campom que queremos.
    findByField: function(field,text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

//Retorna el usuario que se crea mediante la funcion. 
    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

//Devuelve true si el usuario fue eliminado con exito. 
    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true
    }

}

module.exports = User;
