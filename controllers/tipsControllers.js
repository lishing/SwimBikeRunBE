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
// const { getOne } = require('../repositories/userRepository');
// const { getAllByTags } = require('../repositories/tipsRepository');

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
            console.log('controller create one', req.body)
            const tips = await tipsRepository.create(req.body);
            if (tips){
                res.status(200).json({success: true, data: tips})
            }
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

    async getAllByLiked (req, res){
        try{
            const tips = await tipsRepository.getAllByLiked();
            res.status(200).json({ tips });
        } catch (err) {
            httpResponseFormatter.formatErrorResponse(res, err)
        }
    },

    

    //delete
    async delete (req, res) {
        const tips = await tipsRepository.deleteOneByID(req.params.id);
        if (tips){
            return res.status(200).json({success: true, data: tips})
        }
    },

    // update one selected tip
    //update
    async update (req, res) {
        const tips = await tipsRepository.getOneById(req.params.id);
        if (tips){
            return res.status(200).json({success: true, data: tips})
        }
    },
    //put route
    async editOne (req, res) {
        console.log('edit one',req.body, req.params.id)
        const editedTip = req.body;
        const id = req.params.id;
        await tipsRepository.editOneByID(id, editedTip);
        return res.status(200).json({success: true, data: "editedOne"})
    },

    //update one selected tip by likes --> create a new route for liked tips
    // update liked status, a put route: '/tips/:id/editLike' --> double check
    async editLike (req, res) {
        const likedTipID = await tipsRepository.getOneById(req.params.id); //should it be req.body?
        let likedTip = likedTipID.liked
        likedTip = !likedTip //toggle the boolean
        return res.status(200).json({success: true, data: "editedLiked"})
    },
    //put route: '/tips/:id/liked --> double check 
    async updateLike (req, res) {
        // const result = req.body;
        //const resultLike = result.liked
        // console.log(resultLike) // at least put route works
        const id = req.params.id; 
        const updatedLike = await tipsRepository.editLikeByID(id);
        return res.status(200).json({success: true, data: updatedLike})
        //res.redirect(`/tips/${id}/liked`) // so that it goes back to the tip, but it shows liked
    },

    // //post route --? 
    // async editOne (req, res) {
    //     const editedTip = req.body;
    //     const id = req.params.id;
    //     await tipsRepository.updateOneSelected(id, editedTip);
    //     res.redirect('/tips')
    // },

    //users
};