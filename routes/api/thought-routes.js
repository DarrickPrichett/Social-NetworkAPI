const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// .api/thoughts/:thoughtId/friends/:friendId
router
  .route('/:')
// // /api/thoughts/<thoughtId>
// router.route('/:thoughtId').post(addThought);

// // /api/thoughts/<thoughtId>/<thoughtId>
// router
//   .route('/:thoughtId/:thoughtId')
//   .put(addReply)
//   .delete(removeThought);

// // /api/thoughts/<thoughtId>/<thoughtId>/<reactionId>
// router.route('/:thoughtId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
