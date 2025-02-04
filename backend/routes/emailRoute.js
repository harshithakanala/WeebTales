import express from 'express';
import { subscribeEmail, getSubscribedEmails, deleteEmail } from '../controllers/emailController.js';
import adminAuth from '../middleware/adminAuth.js';

const emailRouter = express.Router();

// Route for subscribing to email
emailRouter.post('/subscribe', subscribeEmail);

// Route for getting all subscribed emails
emailRouter.get('/emails', getSubscribedEmails);

// Route for deleting a subscribed email by ID
emailRouter.delete('/email/:id',adminAuth, deleteEmail);

export default emailRouter;
