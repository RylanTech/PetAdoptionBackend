import { Router } from 'express';
import { allPets, createPet, createView, deletePet, editPet, editPetPage, onePet } from '../controllers/petController';

const router = Router();

router.get('/', allPets);

router.get('/new', createView)

router.post('/new', createPet)

router.get('/edit/:petId', editPetPage)

router.post('/edit/:petId', editPet);

router.post('/delete/:petId', deletePet);

router.get('/:petId', onePet);

export default router;