import React, { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContanct/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import EditContacts from "./components/EditContacts/EditContacts";

function App() {
  let [contacts, setContacts] = useState([]);
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);
  function handleNewContact(newContact) {
    let newContacts = [newContact, ...contacts];
    setContacts(newContacts);
  }
  function handleDeleteContact(id) {
    let newContacts = contacts.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setContacts(newContacts);
  }
  function handleEditIndex(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEditedContact(newContact) {
    let newContacts = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContacts);
    setIsEdit(false);
  }

  return (
    <div>
      <AddContact handleNewContact={handleNewContact} />
      {isEdit ? (
        <EditContacts
          editContact={editContact}
          handleSaveEditedContact={handleSaveEditedContact}
        />
      ) : null}
      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
}

export default App;
