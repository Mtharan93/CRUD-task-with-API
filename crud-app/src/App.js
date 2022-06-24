import React, { useState } from 'react';
import AddUsers from './components/AddUsers';
import EditUsers from './components/EditUsers';
import ListUsers from './components/ListUsers';




const App = () => {
  const usersData = []

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    // console.log(id)
  }

  return (
    <div className="container">
      <div className="grid-users">
        <div className="add-users">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUsers
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add Content</h2>
              <AddUsers addUser={addUser}/>
            </div>
          )}
        </div>
        <div className="list-users">
          <h2>List of Content</h2>
          <ListUsers users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  )

}


export default App
