// viewall
// viewOneSelected
// delete 
// updateOneSelected
// createOne
// getAllByTags

const tipsRepository = require('../repositories/tipsRepository');
const db = require('../db');
const { getOne } = require('../repositories/userRepository');
const { getAllByTags } = require('../repositories/tipsRepository');

module.exports = {
    //tips
    
    //get and view all
    async getAll (req, res){
        const tips = await tipsRepository.getAll();
        console.log('line19', tips)
        res.send(tips);
    },
    //create One
    getForm(req, res){
        res.render('/new');
    },
    async createOne (req,res){
        try {
            const tips = await tipsRepository.create(req.body);
            return res.redirect('/');
        } catch (err) {
            console.log('error', err);
        }
    },

    //view one selected
    async viewOneSelected(req,res){
        try{
            const logs = await tipsRepository.getOne(req.params.id);
            res.render(`tips/${req.params.id}`, { logs });
        } catch (err) {
            console.log('error', err);
        }
    },

    //view selected tips by tags - need to check but how?
    // async getAllByTags (req, res){
    //     try{
    //         const logs = await logRepository.getMany(req.params.body);
    //         res.render(`/${tags}`, { logs });
    //     } catch (err) {
    //         console.log('error', err);
    //     }
    // },
    
    // update one selected tip
    //get route
    // async update (req, res) {
    //     const tips = await tipsRepository.getOne(req.params.id);
    //     res.render('/edit', {tips})
    // },
    // //post route
    // async editOne (req, res) {
    //     const editedTip = req.body;
    //     const id = req.params.id;
    //     await tipsRepository.updateOneSelected(id, editedTip);
    //     res.redirect('/')
    // },

    // //delete
    // async delete (req, res) {
    //     const tips = await tipsRepository.delete(req.params.id);
    //     return res.redirect('/')
    // }
    
    //users
};