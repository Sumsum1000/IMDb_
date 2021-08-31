import express from 'express';
import { getUsers } from './users.services.mjs';
import { getUser } from './users.services.mjs';
import { addUser } from './users.services.mjs';
import { editUser } from './users.services.mjs';
import { deleteUser } from './users.services.mjs';

export const usersRouter = express.Router();


usersRouter.get('/', async (req, res) => {
    res.send(await getUsers());
});

usersRouter.get('/:id', async (req, res) => {
    res.send(await getUser(req.params.id));
});


usersRouter.post('/', async (req, res) => {
    res.send(await addUser(req.body));
});

// Update single product from the list
usersRouter.put('/:id', async (req, res) => {
    res.send(await editUser(req.params.id, req.body))
});

// Delete single product from the list
usersRouter.delete('/:id', async (req, res) => {
    res.send(await deleteUser(req.params.id));
});
