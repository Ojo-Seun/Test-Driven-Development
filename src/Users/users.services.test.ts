import User from "./users.services"

const user = new User()
describe.skip("users.services", () => {
  it("getAllUsers() --> should return '[]'", () => {
    expect(user.getAllUsers()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 0, name: "Seun", age: 20 }),
      ])
    )
  })

  it("createUser() --> should return 'User created'", () => {
    expect(user.createUser({ id: 1, name: "Ojo", age: 30 })).toBe(
      "User created"
    )
  })

  it("createUser()", () => {
    expect(user.createUser({ id: 1, name: "Ojo", age: 30 })).toBe(
      "User name already exist"
    )
  })
})
