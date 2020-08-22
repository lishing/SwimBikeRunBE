const db = require('../db');
const { ObjectID } = require('mongodb');

module.exports = {
    //create one entry
    async create(data) {
        try {
            const {insertedCount} = await db.tips.insertOne(data);
            if (!insertedCount) throw new Error('fail to add');
            return true;
        } catch (err) {
            throw new Error(`Due to ${err.message}, you can't insert this item ${JSON.stringify}`)
        }
    },

    //get all tips
    getAll(){
        return db.tips.find().toArray();
    },

    //view one selected tip by modal view
    async getOneById(id){
        const result = await db.tips.findOne(
            {
                "_id": ObjectID(id)
            }
        );
        return result;
    },

    //get all by category "training"
    async getAllByTags(tag, searchedValue){
        let matchedResultsArray = []
        let results = null;
        if (searchedValue === tag){
            result = await db.tips.getAllByTags(
                {"tag" : searchedValue}
            )
        };
        matchedResultsArray.push(result);
        return matchedResultsArray
    },

    //update one
    update(id, body) {
        return db.tips.updateOne(
            {
                "_id":ObjectID(id)
            },
            {
                $set: body
            },
        );
    },

    //delete one
    deleteOneByID(id) {
        return db.tips.deleteOne(
            {
                "_id": ObjectID(id)
            }
        )
    }




}