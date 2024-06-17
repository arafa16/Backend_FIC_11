const {user: UserModel } = require('../models');
const bcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async(req, res, next) => {
    const { email, password} = req.body;

    const user = await UserModel.findOne({
        where: { email }
    })

    if(!user){
        return res.status(401).json({message: "invalid email/password"});
    }

    const isValid = await bcypt.compare(password, user.password);

    if(!isValid) {
        return res.status(401).json({message: "invalid email/password"});
    }

    const data = {
        id:user.id,
        email:user.email,
        shipping_address:user.shipping_address,
    }

    const token = jwt.sign(data, process.env.JWT_SECRET);

    return res.send({
        message: "login successfully",
        data: {
            token
        }
    });
}

module.exports = {
    login
}