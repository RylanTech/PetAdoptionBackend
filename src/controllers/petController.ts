import { RequestHandler } from "express";
import { Pet } from "../models/pets";


export const defaultPet: RequestHandler = (req, res, next) => {
    res.redirect('/pets');
}

export const allPets: RequestHandler = async (req, res, next) => {
    let petData: Pet[] = await Pet.findAll();
    res.render('allPets', { petData });
}

export const onePet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let PetItem: Pet | null = await Pet.findByPk(itemId);

    if (PetItem) {
        res.render('PetDetails', { foundPet: PetItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found' });
    }
}

export const createView: RequestHandler = (req, res, next) => {
    res.render('addPet')
};

export const createPet: RequestHandler = async (req, res, next) => {
    let newPet: Pet = req.body;
    await Pet.create(newPet);
    res.redirect('/allPets');
}

export const editPetPage: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let PetItem: Pet | null = await Pet.findOne({
        where: { petId: itemId }
    });

    if (PetItem) {
        res.render('editPet', { foundPet: PetItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found' });
    }
}

export const editPet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;
    let updatedItem: Pet = req.body;

    let [updated] = await Pet.update(updatedItem, {
        where: { petId: itemId }
    });

    if (updated === 1) {
        res.redirect('/pets');
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
}

export const deletePet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.petId;

    let deleted = await Pet.destroy({
        where: { petId: itemId }
    });

    if (deleted) {
        res.redirect('/pets')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find item' });
    }
}