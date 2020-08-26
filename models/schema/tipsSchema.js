// module.exports = {
//     type: 'object',
//     properties: {
//         title:{
//             type: 'string'
//         },
//         description: {
//             type: 'string'
//         },
//         tags: {
//             type: 'string'
//         }
//     }
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipsSchema = new Schema(
    {
        title:{
            type: 'string'
        },
        description: {
            type: 'string'
        },
        tags: {
            type: 'string'
        }
    },
);

module.exports = mongoose.model('tips', TipsSchema) ;