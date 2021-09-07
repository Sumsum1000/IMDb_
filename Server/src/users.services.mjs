import { User } from "./db/User.model.mjs";
import mongo from 'mongodb';
const { ObjectId } = mongo;

export function getUsers() {
    return User.find();
}

export async function deleteUser(userId) {
    return User.findOneAndDelete({_id: ObjectId(userId)});
}

export async function editUser(id, newUser) {
    return User.findOneAndUpdate(
        {_id: ObjectId(id)},
        newUser
    );
}

export async function getUserID(id) {
    return User.findOne({_id: ObjectId(id)});
}


// export async function getUser(email) {
//     return User.findOne({email: email});
// }

export async function signup(email, username, password) {
    const newUser = new User({email, username, password});
    const user = await User.findOne({email, password});

    console.log(user);

    if (user){
        return false;
    }else{
    return newUser.save();
    }
}

export async function login(email, password) {
        const user = await User.findOne({email, password});
        return (user);
    }

