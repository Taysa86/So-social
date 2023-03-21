const router = require('express').Router();


// pulls from thought conrollers
const {
    getAllThoughts,
    getSingleThought,
    createNewThought,
    deleteThought,
    addNewReaction,
    deleteReaction,

} = require('../../controllers/thoughtController');

//get, post, delete routes
router.route('/').get(getAllThoughts).post(createNewThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addNewReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;