import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const contacts = await readContacts();
        contacts.push(createFakeContact());
        await writeContacts(contacts);
        console.log('Added new one contact!');
    } catch (err) {
        console.error('Error adding contact', err);
    }
};

addOneContact();
