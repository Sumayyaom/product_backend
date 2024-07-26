const { response } = require('express');
const ProductModel = require('../models/products');
const ProductJoi = require('../validations/ProductJoi');

exports.addProduct = async(req,res) => {
    const data = req.body;
    console.log("Hai",data);
    await ProductJoi.validateAsync(data);
    const saveData = new ProductModel(data);
    if(!saveData) throw new Error (400,'Insert all data'); //Error first condition
    await saveData.save();
    response.status(201).send({message : 'Data saved Successfully'})
}

exports.getAllProducts = async(req,res) => {
    
    const allData = await ProductModel.find({})
    response.status(200).send({data:allData, message : 'Querry ok'})
}

exports.getProductById = async(req,res) => {
    
    const id = req.params.id
    const data = await ProductModel.findById({id})
    response.status(200).send({data:data, message : 'Querry ok'})
}

exports.DeleteProducts = async(req,res) => {
    
    const id = req.params.id
    const data = await ProductModel.findByIdAndDelete({id})
    response.status(200).send({data:data, message : 'Querry ok'})
}

exports.updateProducts = async(req,res) => {
    
    const id = req.params.id
    const newData = req.body
    const checkData = new ProductModel(newData)
    const data = await ProductModel.findByIdAndUpdate({id})
    response.status(200).send({data:data, message : 'Querry ok'})
}
