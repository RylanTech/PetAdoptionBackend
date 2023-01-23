"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.editPet = exports.editPetPage = exports.createPet = exports.createView = exports.onePet = exports.allPets = exports.defaultPet = void 0;
const pets_1 = require("../models/pets");
const defaultPet = (req, res, next) => {
    res.redirect('/pets');
};
exports.defaultPet = defaultPet;
const allPets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let petData = yield pets_1.Pet.findAll();
    res.render('allPets', { petData });
});
exports.allPets = allPets;
const onePet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.petId;
    let PetItem = yield pets_1.Pet.findByPk(itemId);
    if (PetItem) {
        res.render('PetDetails', { foundPet: PetItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found' });
    }
});
exports.onePet = onePet;
const createView = (req, res, next) => {
    res.render('addPet');
};
exports.createView = createView;
const createPet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newPet = req.body;
    yield pets_1.Pet.create(newPet);
    res.redirect('/allPets');
});
exports.createPet = createPet;
const editPetPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.petId;
    let PetItem = yield pets_1.Pet.findOne({
        where: { petId: itemId }
    });
    if (PetItem) {
        res.render('editPet', { foundPet: PetItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found' });
    }
});
exports.editPetPage = editPetPage;
const editPet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.petId;
    let updatedItem = req.body;
    let [updated] = yield pets_1.Pet.update(updatedItem, {
        where: { petId: itemId }
    });
    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
});
exports.editPet = editPet;
const deletePet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.petId;
    let deleted = yield pets_1.Pet.destroy({
        where: { petId: itemId }
    });
    if (deleted) {
        res.redirect('/pets');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find item' });
    }
});
exports.deletePet = deletePet;
