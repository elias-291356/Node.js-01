// import yargs from 'yargs';
import { program } from 'commander';
import * as  contactService from './db/index.js';




const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactService.getAllContacts();
      return console.table(allContacts);
    case 'getById':
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);
    case 'add':
      const newContact = await contactService.addContact(data);
      return console.log(newContact);
    case 'updateById':
      const updateContact = await contactService.updateContactById(id, data);
      return console.log(updateContact)
    case 'removeById':
      const removeById = await contactService.removeById(id);
      return console.log(removeById);
    default:
      console.log("Unknown action");
  }
}

program
  .option('-a,--action <type>')
  .option('-i,--id <type>')
  .option('-n,--name <type>')
  .option('-e,--email <type>')
  .option('-p,--phone <type>')

program.parse();

const options = program.opts();
invokeAction(options)


// const { argv } = yargs(process.argv.slice(2));
// invokeAction(argv)