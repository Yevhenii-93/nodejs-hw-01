import { PATH_DB } from '../constants/contacts.js';
const fs = require('node:fs/promises');

export const readContacts = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });

  const contacts = JSON.parse(data);
  return contacts;
};
