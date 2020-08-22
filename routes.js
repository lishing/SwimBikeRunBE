const userController = require('./controllers/userController');
const tipsController = require('./controllers/tipsController');
const sessionController = require('./controllers/sessionController')

module.exports = app => {

    app.post('/sessions', sessionController.create);
    // app.get('/sessions/new', sessionController.newForm);
    app.delete('/sessions', sessionController.destroy);

    // Tips
    // View all tips
    app.get('/tips', tipsController.getAll);

    // View information of one selected tip on click - modal
    app.get('/tips/:id', tipsController.viewOneSelected);

    // View information of selected category
    app.get('/tips/')

    // add one tip
    app.create('/tips/new', tipController.createOne);

    // Update description of selected tip
    app.put('/likedtips/:id', tipController.updateOneSelected)

    // Delete selected tip
    app.delete('/tips/:id', tipController.delete);


    // // USERS
    // // Register a new user
    // app.post('/register', userController.create);

    // // View all users
    // app.get('/users', userController.getAll);

    // // View all one user
    // app.get('/users', userController.findOne); 

    // // Update user profile - bio details
    // app.put('/users/:id', userController.update);

    // // Add tip to favourites 
    // app.put('/users/tips/:id', userController.addFavtip);

    // // Delete user profile
    // app.delete('/users/:id', userController.delete);


    
    
}