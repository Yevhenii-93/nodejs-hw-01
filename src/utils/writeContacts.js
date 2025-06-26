import { PATH_DB } from '../constants/contacts.js';
const fs = require('node:fs/promises');

export const writeContacts = async (updatedContacts) => {
  await fs.writeContacts(PATH_DB, JSON.stringify(updatedContacts));
};
