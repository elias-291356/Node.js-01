import fs from "fs/promises";
import detectEncoding from "detect-file-encoding-and-language"



const contactsPath = './db/contacts.json';
const listContacts = async () => {
  try {
    const { encoding } = await detectEncoding(contactsPath)
    const allContacts = await fs.readFile(contactsPath, encoding)
    console.log(allContacts)

  } catch (error) {
    console.log('error', error.message)
  }

}
listContacts()


const getContactById = (contactId) => {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.

}

const removeContact = (contactId) => {
  // ...твій код. Повертає об'єкт => видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

const addContact = (name, email, phone) => {
  // ...твій код. Повертає об'єкт доданого контакту. 

}
// addContact()