import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form'
// import Member from './Member'
import { v4 as uuid } from 'uuid'

// setting up an example member
const initialMembersList = [
  {
    id: uuid(),
    name: 'Francus',
    email: 'francus@nastus.com',
    role: 'frontend engineer',
  },
]

// setting up initial values
const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [members, setMembers] = useState(initialMembersList)

  const [formValues, setFormValues] = useState(initialFormValues)

  // `````````````````````Stretch: ```````~~~~~~~~~~~~
  const [memberToEdit, setMemberToEdit] = useState(false)
  
  // ``````````````````````````````````````~~~~~~~~~~
  // Setting up onInputChange function

  const onInputChange = event => {
    const { name } = event.target
    const { value } = event.target
    // debugger
    setFormValues({ ...formValues, [name]: value })
    // debugger
  }

  // Setting up onSubmit function

  const onSubmit = event => {
    event.preventDefault() //prevents webpage from reloading

    if (!formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()) {
      return
    }

    const newMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    // const newMember= {...formValues, id:uuid()}

    setMembers([newMember, ...members])

    setFormValues(initialFormValues)
  }

  // function Member(props) {
  //   // const { details } = props
  // //  debugger
  //   if (!props.details) {
  //     return <h3>Working fetching your member&apos;s details...</h3>
  //   }

  //   return (
  //     <div className='member-container'>
  //       <h2>{props.details.name}</h2>
  //       <p>Email: {props.details.email}</p>
  //       <p>Role: {props.details.role}</p>
  //     </div>
  //   )
  // }

  // `````````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const editMember = member => {
  // debugger
  setMemberToEdit(true)

  setFormValues({id: member.id, name: member.name, email: member.email, role: member.role})
}

  // ````````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  return (
    <div className="App">
      <header><h1>Hi there Members!</h1> </header>

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        // Stretch````````````
        // editMember={editMember}
      // ````````````
      />

      {
        members.map(member => {
          return (
            // <Member key={member.id} details={member} />
            <div key={member.id}>
              <h2>{member.name}</h2>
              <p>Email:{member.email}</p>
              <p>Role: {member.role}</p>
              {/* trying out stretch ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              <button onClick= { () => editMember(member)}>edit</button>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            </div>
          )
          // debugger
        })
      }

    </div>
  );
}

export default App;
