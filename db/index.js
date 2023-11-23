import fs from 'fs/promises';
import { nanoid } from 'nanoid';
import path from 'path';

const contactsPath = path.resolve('db', 'contacts.json');

const updateContact = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

export const getContactById = async (id) => {
  const contacts = await getAllContacts();
  const result = contacts.find(item => item.id === id);
  return result || null;
}

export const addContact = async (data) => {
  const contacts = await getAllContacts();
  const newContact = {
    id: nanoid(),
    ...data
  };
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
}

export const updateContactById = async (id, data) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { ...contacts[index], ...data };
  await updateContact(contacts);
  return contacts[index];

}

export const removeById = async (id) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContact(contacts);
  return result;
}