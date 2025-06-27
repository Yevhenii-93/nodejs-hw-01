import { PATH_DB } from '../constants/contacts.js';
// import { readContacts } from '../utils/readContacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  fs.unlink(PATH_DB);

  //   const contacts = await readContacts();
  //   fs.unlink(contacts);
};

removeLastContact();
