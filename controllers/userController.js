const UserModel = require("../models/users")
const SignUpJoi = require('..validations/signupjoi')

const SignUp = async(req,res) => {
    const date = req.body
    console.log(data);
    const isJoiValidated = await SignUpJoi.validation(data)

    const  toSave = new UserModel(data)
    await toSave.save()
    res.status(200).send("Added successfully");
}
module.exports = {SignUp}