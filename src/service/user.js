class User{
    constructor(){
        this.users = new Map();
        this.id = 0;
    }

    getAllUsers(){
        return this.users;
    }

    getUser(){
        return this.users.get(Number(id));
    }

    createUsers(user){
        console.log('user ----> ',user);
        this.id +=1;
        this.users.set(this.id, { ...user, id: this.id});
        return this.users.get(this.id);
    }

    updateUsers(id, role){
        const user = this.users.get(Number(id));
        this.users.set(Number(id), {...user, role});
        return this.users.get(Number(id));
    }

    deleteUsers(id){
        this.users.delete(Number(id));
        return id;
    }
}

export default new User();