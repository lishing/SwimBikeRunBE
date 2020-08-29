// viewall
// viewOneSelected
// delete 
// updateOneSelected
// createOne
// getAllByTags

const tipsRepository = require('../repositories/tipsRepository');
const httpResponseFormatter = require('../formatters/httpResponse');
const InvalidTagError = require('../exceptions/InvalidTagError');
const db = require('../db');
const { getOne } = require('../repositories/userRepository');
const { getAllByTags } = require('../repositories/tipsRepository');

module.exports = {
    //tips
    //create One with form
    getForm(req, res){
        console.log('get form route')
        res.send('/tips/new');
    },
    
    //get and view all
    async getAll (req, res){
        const tips = await tipsRepository.getAll();
        res.send(tips);
    },
    
    // create and post
    async createOne (req,res){
        try {
            //did not use tips at all --> ask
            const tips = await tipsRepository.create(req.body);
            return res.redirect('/tips');
        } catch (err) {
            console.log('error', err);
        }
    },

    //view one selected
    async viewOneSelected(req,res){
        try{
            //console.log('view one by id')
            const result = req.params.id
            const tips = await tipsRepository.getOneById(result);
            res.status(200).json({ tips });
        } catch (err) {
            console.log('error', err);
            httpResponseFormatter.formatErrorResponse(res, err)
        }
    },

    //view selected tips by tags - need to check but how?
    async getAllByTags (req, res){
        try{
            console.log(req.params)
            const tagName = req.params.tagName
            if(!isNaN(tagName)){
                throw new InvalidTagError(tagName)
            }
            const tips = await tipsRepository.getMany(tagName);
            res.status(200).json({ tips });
        } catch (err) {
            httpResponseFormatter.formatErrorResponse(res, err)
        }
    },

    //delete
    async delete (req, res) {
        const tips = await tipsRepository.deleteOneByID(req.params.id);
        return res.redirect('/tips')
    },

    // update one selected tip
    //update
    async update (req, res) {
        const tips = await tipsRepository.getOneById(req.params.id);
        res.send(tips)
    },
    //put route
    async editOne (req, res) {
        const editedTip = req.body;
        const id = req.params.id;
        await tipsRepository.editOneByID(id, editedTip);
        res.redirect('/tips')
    },

    //update one selected tip by likes --> ask

    // //post route
    // async editOne (req, res) {
    //     const editedTip = req.body;
    //     const id = req.params.id;
    //     await tipsRepository.updateOneSelected(id, editedTip);
    //     res.redirect('/tips')
    // },

    //users
};