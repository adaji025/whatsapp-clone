import { createContext, useContext } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";

export const ContactsContext = createContext();

export function useContacts() {
    return useContext(ContactsContext)
}

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = UseLocalStorage('contacts', [])

    function createContacts(id, name) {
        setContacts(prevContacts => {
            return [...prevContacts, {id, name}]
        })
    }
    console.log(contacts);
  return (
    <ContactsContext.Provider value={{ contacts, createContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};
