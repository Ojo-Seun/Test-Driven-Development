import { usersTypes, userTypes } from "../utils/typesDecleration"

class User {
  users: usersTypes
  constructor() {
    this.users = [{ id: 0, name: "Seun", age: 20 }]
  }
  getAllUsers() {
    return this.users
  }

  private findById(user: userTypes) {
    return this.users.find((x) => x.id === user.id)
  }

  createUser(data: userTypes) {
    if (this.findById(data)) {
      return "User name already exist"
    }

    this.users.push(data)
    return "User created"
  }
}

export default User
