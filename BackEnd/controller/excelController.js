const entry = require("../model/entry");
const mongoose = require('mongoose');

async function listAll(req,res){
    const data = await entry.find();
    res.send(data);
}

async function add(req,res){
    const newEntry = new entry(req.body);
    try{
        await newEntry.save();
        res.json({test:'Added'});
    }catch(err){
        console.log(err);
        res.json({test: 'Not added'});
    }
}

async function deleteOne(req,res){
    try{
        const id = new mongoose.Types.ObjectId(req.params.id);
        const deletion = await entry.deleteOne({_id: id});
        if(deletion.deletedCount < 1){
            throw new Error("Not deleted");
        }
        res.json({test:'Deleted'});
    }catch(err){
        res.json({test:'Not Deleted'});
    }
}

async function updateOne(req,res){
    try{
        const id = new mongoose.Types.ObjectId(req.params.id);
        const update = await entry.updateOne({_id: id},req.body);
        res.send(update);
    }catch(err){
        res.send(err);
    }
}

module.exports = {
    listAll,
    add,
    deleteOne,
    updateOne
}