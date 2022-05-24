import React , { useEffect, useState}  from "react";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";
import shortid from "shortid";
import ContactList from "components/ContactList/ContactList";
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ change state \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const INITIAL_STATE = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function App() {
 

const [contacts , setContacts] = useState([
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);
const [filter , setFilter] = useState('');


const deleteContact = (ContactId) => {
  console.log(ContactId)
  setContacts(prevContact => 
      prevContact.filter(contact => contact.id !== ContactId)
   )
 }
 
   const formSubmitHandler = ({name , number }) => {
 
    const newName = {
   id: shortid.generate() , 
   name , 
   number ,
   
 }
 
 const findinList = contacts.find(
   ({ name }) =>
   newName.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
   );
   
   if (findinList) {
     alert(`${findinList.name} is alredy in contact`);
     return;
   }
   
    setContacts( [  newName , ...contacts ] ,
   
   
   )
  }

 const changeFilter = e => {
   setFilter(e.currentTarget.value)
 }
 
 
 const getVisibleContact = e => {
  
  const normalizedFilter = filter.toLowerCase() ;
  console.log(normalizedFilter);
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter)) ;
  }
  
  const  visibleContact = getVisibleContact() ;
 useEffect(() => {
   const  contacts = localStorage.getItem('contacts');
  
   const parsedContacts = JSON.parse(contacts) ;
 
setContacts(parsedContacts) ;
  
   
 } , [])
 
 

 useEffect(() => {
   if(contacts !== setContacts) {
     localStorage.setItem("contacts" , JSON.stringify(contacts) )
 }} , [contacts])


 return(
  <>
<Form onFormSubmit = {formSubmitHandler}/>
<Filter value = {filter} onChangeFilter = {changeFilter}/>
<ContactList  contacts = { visibleContact} onDeleteContact = {deleteContact}/>



</>
)










}




 
  






 

