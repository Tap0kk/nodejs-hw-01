import { getAllContacts } from "./getAllContacts.js";

export const countContacts = async () => {
    const count = (await getAllContacts()).length;
    return `Total ${count} contacts!`;
};

console.log(await countContacts());
