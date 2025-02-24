import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length > 0) {
            contacts.pop();
            await writeContacts(contacts);
            console.log('Last contact deleted');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (err) {
        console.error('An error occurred.', err);
    }
};

removeLastContact();
