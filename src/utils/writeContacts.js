import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  await fs.writeContacts(PATH_DB, JSON.stringify(updatedContacts));
};
