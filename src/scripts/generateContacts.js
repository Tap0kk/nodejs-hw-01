import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();
        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }
        await writeContacts(contacts);
        console.log(`Added new ${number} contacts!`);
    } catch (err) {
        console.error('Error generating contacts!', err);
    }
};
generateContacts(5);
