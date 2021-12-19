import React, {useRef, useState, useContext} from 'react'
import "./AuthForm.css";
import {useSelector, useDispatch} from 'react-redux'
import {AuthContext} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'


export default function SignUp() {

  const [error, setError] = useState('');
  const history = useHistory();
  const {signup} = useContext(AuthContext)

  const showModal = useSelector(state => state)
  const dispatch = useDispatch();

  const closeModal = () => {
      dispatch({
        type: "CLOSEMODAL"
      })
  }

  const toggleSignIn = () => {
    dispatch({
        type: "TOGGLEIN"
    })
}

  async function handleSubmit(e) {
      e.preventDefault();
      if(inputs.current[1].value !== inputs.current[2].value){
        setError("Les mots de passe ne sont pas indentiques")
        return;
      }

      await signup(inputs.current[0].value, inputs.current[1].value);
      closeModal()
      history.push('/loggedHome');
  }

  const inputs = useRef([])

  
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }


    return (

      <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
      <div className="overlay" onClick={closeModal}></div>

      <div className="container-modal">
        <form className="form-auth"
              onSubmit={handleSubmit}>
          <h2>INSCRIPTION</h2>
          <label htmlFor="mail">Votre mail</label>
          <input type="email" ref={addInputs} htmlFor="mail" />

          <label htmlFor="psw">Votre mot de passe</label>
          <input type="password" ref={addInputs} id="psw" required />

          <label htmlFor="confirmpsw">Confirmez le mot de passe</label>
          <input type="password" ref={addInputs} id="confirmpsw" required/>
          <div className='erreur'>{error}</div>
          

          <button className="btn-sign">S'inscrire</button>
        </form>
        <button className="btn-close" onClick={closeModal}>X</button>
        <p className="bottom-help-txt"
           onClick={toggleSignIn}>Besoin de se connecter ?
           </p>
      </div>
    </div>
  )
}
