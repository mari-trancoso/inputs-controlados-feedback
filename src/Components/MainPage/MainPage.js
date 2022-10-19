import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [confirmaEmail, setConfirmaEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeConfirmaEmail = (event) => {
  setConfirmaEmail(event.target.value)
}

const sendData = (event) => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  if (age >=18 && name.length<=30 && name.length>=10 && email.includes("@" && ".com") && email===confirmaEmail && name!=("") && email!=("") && confirmaEmail!=("") && age!=("")){
    setName("")
    setAge("")
    setEmail("")
    setFormFlow(2)
  } else {
    alert("dados preenchidos incorretamente")
  }
  
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      // insira aqui suas props
      name={name}
      age={age}
      email={email}
      confirmaEmail={confirmaEmail}
      onChangeAge={onChangeAge}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangeConfirmaEmail={onChangeConfirmaEmail}
      setName={setName}
      setAge={setAge}
      setEmail={setEmail}
      sendData={sendData}
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage