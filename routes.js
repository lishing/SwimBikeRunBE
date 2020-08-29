const tipsController = require('./controllers/tipsControllers');
//const sessionController = require('./controllers/sessionControllers')

module.exports = app => {

    //app.post('/sessions', sessionController.create);
    // app.get('/sessions/new', sessionController.newForm);
    //app.delete('/sessions', sessionController.destroy);

    // Tips, need to fix routes
    // View all tips
    app.get('/tips', tipsController.getAll);

    // View information of one selected tip on click - modal
    app.get('/tips/:id', tipsController.viewOneSelected);

    // View information of selected category
    app.get('/tips/tags/:tagName', tipsController.getAllByTags)

    // create one tip
    //get create form
    app.get('/tips/new', tipsController.getForm)
    app.post('/tips', tipsController.createOne);
    
    // Delete selected tip
    app.delete('/tips/:id', tipsController.delete);

    // Update description of selected tip
    app.get('/tips/:id/edit', tipsController.update);
    app.put('/tips/:id', tipsController.editOne);

    // // IGNORE FIRST : USERS
    // // Register a new user
    // app.post('/register', userController.create);

    // // get all users
    // app.get('/users', userController.getAll);

    // // View all one user
    // app.get('/users', userController.findOne); 

    // // Update user profile - bio details
    // app.put('/users/:id', userController.update);

    // // Add tip to favourites 
    // app.put('/users/tips/:id', userController.addFavtip);

    // // Delete user profile
    // app.delete('/users/:id', userController.delete);

    app.get('*', (req,res) =>{
        res.status(404).json({message: 'No such route'})
    })
}