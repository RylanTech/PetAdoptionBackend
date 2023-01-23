"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petController_1 = require("../controllers/petController");
const router = (0, express_1.Router)();
router.get('/', petController_1.allPets);
router.get('/new', petController_1.createView);
// router.post('/new', createJob)
// router.get('/edit/:jobId', editJobPage)
// router.post('/edit/:jobId', editJob);
// router.post('/delete/:jobId', deleteJob);
// router.get('/:jobId', oneJob);
exports.default = router;
