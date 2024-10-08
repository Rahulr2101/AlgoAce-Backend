const express = require('express');
const router = express.Router();
const { createProblems, getProblemById, getAllProblems,deleteProblem,getProblemByTag } = require('../controllers/problems');

router.post('/create', createProblems);
router.get('/get/:id', getProblemById);
router.get('/all', getAllProblems);
router.get('/:tag',getProblemByTag)
router.delete('/:id', deleteProblem);

module.exports = router;