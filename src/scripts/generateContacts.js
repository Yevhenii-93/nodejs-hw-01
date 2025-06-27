import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  const updatedContacts = [...existingContacts, ...newContacts];
  await writeContacts(updatedContacts);
  const existingContacts = await readContacts();
  console.log(`${number} контакт(ів) успішно згенеровано та додано.`);
};

generateContacts(5);
