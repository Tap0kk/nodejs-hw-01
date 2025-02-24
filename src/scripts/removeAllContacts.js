import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        console.log('Your contacts have been cleared.');
    } catch (err) {
        console.error('An error occurred, contacts were not cleared.', err);
    }
};

removeAllContacts();
