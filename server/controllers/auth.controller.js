const User = require("../models/usuario.model");

const controller = {};

controller.register = async(req, res, next)=>{
    try {
        const { username, email, password }= req.body;
        const user = await User.findOne({ $or:[{username: username}, {correo: email}] });
        if(user){
            return res.status(409).json({ error: "User already exists!"})
        }
        const newUser = new User({
            username: username, 
            correo: email, 
            contrasenia: password
        });
        await newUser.save();
        return res.status(201).json({ message: "User registered" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.findOneById = async(req, res, next)=>{
    try {
        const {id}= req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({ error: "User not found"});
        };
        return res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.updateUser = async(req, res, next)=>{
    try {
        const { id }= req.params;
        const { username, password, picture, desc} = req.body;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({ error: "User not found"})
        };
        const updatedUser = await User.findByIdAndUpdate( id, {
            username: username,
            contrasenia: password,
            profile_pic: picture,
            desc: desc
        }, {new: true});
        if(!updatedUser){
            return res.status(500).json({ error: "User not updated"})
        }
        return res.status(200).json({ message: "User updated", user: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

controller.changeReputation= async(req, res, next)=>{
    try {
        const { id }= req.params;
        const {reputacion} = req.body;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({ error: "User not found"})
        };
        user.reputacion += reputacion;
        const updatedUser = await user.save();
        if(!updatedUser){
            return res.status(500).json({ error: "User not updated"})
        }
        return res.status(200).json({ message: "User reputation updated", user: updatedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

module.exports = controller;