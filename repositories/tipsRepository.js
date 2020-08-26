const db = require('../db');
const tips = require('../models/schema/tipsSchema')
const { ObjectID } = require('mongodb');

module.exports = {
    //create one entry
    async create(data) {
        try {
            const newTip = new tips({
                _id: mongoose.Types.ObjectId(),
                title: data.title,
                tags: data.tags,
                description: data.description,
            });
            await newTip.save();
            return newTip;
            // const {insertedCount} = await tips.insertOne(data);
            // if (!insertedCount) throw new Error('fail to add');
            // return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you can't insert this item ${JSON.stringify}`)
        }
    },
    
    //get all tips
    getAll(){
        const result = tips.find();
        return result;
    },

    //view one selected tip by modal view
    // async getOneById(id){
    //     const result = await tips.findOne(
    //         {
    //             "_id": ObjectID(id)
    //         }
    //     );
    //     return result;
    // },

    //get all by tags, double check
    // async getAllByTags(searchedValue){
    //     const result = await tips.find({
    //         "tags" : { $regex: searchedValue }
    //     })
    // },

    // async getAllByTags(tag, searchedValue){
    //     let matchedResultsArray = []
    //     let results = null;
    //     if (searchedValue === tag){
    //         result = await db.tips.getAllByTags(
    //             {"tag" : searchedValue}
    //         )
    //     };
    //     matchedResultsArray.push(result);
    //     return matchedResultsArray
    // },

    //update one
    // update(id, body) {
    //     return db.tips.updateOne(
    //         {
    //             "_id":ObjectID(id)
    //         },
    //         {
    //             $set: body
    //         },
    //     );
    // },

    //delete one
    // deleteOneByID(id) {
    //     return db.tips.deleteOne(
    //         {
    //             "_id": ObjectID(id)
    //         }
    //     )
    // }
}