import React , {Component}  from "react";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";
import shortid from "shortid";
import ContactList from "components/ContactList/ContactList";
// import alert from "alert";
class App extends Component {
state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ] ,
   
    filter : '' 
  }
deleteContact = (ContactId) => {
  this.setState(prevState => ({
    contacts : prevState.contacts.filter(contact => contact.id !== ContactId)
  }))
}

  formSubmitHandler = ({name , number }) => {

   const newName = {
  id: shortid.generate() , 
  name , 
  number ,
  
}

const findinList = this.state.contacts.find(
  ({ name }) =>
  newName.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  );
  
  if (findinList) {
    alert(`${findinList.name} is alredy in contact`);
    return;
  }
  
  this.setState(prevState =>({
  
   contacts : [  newName , ...prevState.contacts ] ,
  
  
  }) )
 }

changeFilter = e => {
  this.setState({filter : e.currentTarget.value})
}
getVisibleContact = e => {
  const {filter , contacts} = this.state ; 
  const normalizedFilter = filter.toLowerCase() ;
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter)) ;
}
componentDidMount() {

  const  contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts)
  console.log(contacts)
  console.log( parsedContacts)
  if(parsedContacts) {
    this.setState({contacts : parsedContacts})
  }

}
componentDidUpdate(prevState) {

if(this.state.contacts !== prevState.contacts) {
localStorage.setItem("contacts" , JSON.stringify(this.state.contacts) )

}

}
render(){
  const {  filter} = this.state ;
  




const  visibleContact = this.getVisibleContact() ;

  return(
  <>
<Form onFormSubmit = {this.formSubmitHandler}/>
<Filter value = {filter} onChangeFilter = {this.changeFilter}/>
<ContactList  contacts = { visibleContact} onDeleteContact = {this.deleteContact}/>



</>
)

}

}
export default App;