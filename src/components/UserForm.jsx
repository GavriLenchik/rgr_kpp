import { Component, React } from 'react';
import { useState } from 'react';

const UserForm = ({
      state = {
        currentStep: 1,
        username: '',
        email:  '',
        password: '', 
      }
    }) => {
      let register = false;
      const [value, setValue] = useState('');

      // Устанавливает текущее значение input в переменную value при любом изменении в input
    const handleChange = (e) => {
      setValue(e.target.value);  
    }
   
    const handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = state;
      register = true;
      alert(`Ласкаво просимо, ${value}!`)
    }
     
  const sendButton = () =>{
  
      return (
          <button className={'btn btn-success btn-lg btn-send'}>Надіслати</button>      
      )
    
  };
 
 {    
  if (register == true) {
    return null
  } 
  return (
    <div className={'reg'}>
    <h1>Реєстрація</h1>

    <form onSubmit={handleSubmit}>
      <UserNameStep
       
        handleChange={handleChange}
        username={state.username}
      />
      <EmailStep
        
        handleChange={handleChange}
        email={state.email}
      />
      <PasswordStep
        
        handleChange={handleChange}
        password={state.password}
      />
      <p>
      {sendButton()}
      </p>
    </form>
    </div>
  );
}
}

const UserNameStep = ({value, handleChange}) =>{

  
    return(
      <div>
        <label>Введіть своє ім`я:  </label>
        <input
          name="username"
          type="text"
          placeholder="Ім`я"
          value={value}
          onChange={handleChange}
          class="form-control form-inp"
          />
      </div>
    );
  }

  const EmailStep = ({value, handleChange}) => {
  
     
      return(
          <div>
            <label>Введіть свій email: </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={value}
              onChange={handleChange}
              class="form-control form-inp"
              />
          </div>
      );
  }



const PasswordStep = ({value, handleChange}) => {

    return(
      <div>
        <label>Введіть свій пароль: </label>
        <input
          name="password"
          type="password"
          value={value}
          onChange={handleChange}
          class="form-control form-inp"
          />      
      </div>
    );
  }


export default UserForm