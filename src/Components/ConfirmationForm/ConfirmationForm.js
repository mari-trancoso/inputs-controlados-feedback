import React, { useState } from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = () => {
  const [dataNascimento, setDataNascimento] = useState("")
  const [telefone, setTelefone] = useState("")
  const [genero, setGenero] = useState("")
  const [raca, setRaca] = useState("")
  const [ensinoMedio, setEnsinoMedio] = useState("")
  const [tempo, setTempo] = useState("")


  const onChangeDataNascimento = (event) => {
    setDataNascimento(event.target.value)
  }

  const onChangeTelefone = (event) => {
    setTelefone(event.target.value)
  }

  const onChaneGenero = (event) => {
    setGenero(event.target.value)
  }

  const onChangeRaca = (event) => {
    setRaca(event.target.value)
  }

  const onChangeEnsinoMedio = (event) => {
    setEnsinoMedio(event.target.value)
  }

  const onChangeTempo = (event) => {
    setTempo(event.target.value)
  }


  const submit = (event) => {
    if(dataNascimento!= ("") && telefone!=("")){
      setDataNascimento("")
      setTelefone("")
      alert("inscrição finalizada!")
    } else {
      alert("preencha os dados corretamente.")
    }
    }
  
  return (
    <Form>
      <label>
          Data de Nascimento:
          <Input type="date" placeholder="data" value={dataNascimento} onChange={onChangeDataNascimento}/>
        </label>
        <label>
          Telefone:
          <Input  type="tel" placeholder="(00) 00000-0000" value={telefone} onChange={onChangeTelefone}/>
        </label>
        <p>Autodeclaração de gênero:</p>
        <select>
          <option value="" selected="select">Escolher</option>
          <option value="homem cisgênero">Homem cisgênero</option>
          <option value="mulher cisgênero">Mulher cisgênero</option>
          <option value="homem trans">Homem trans</option>
          <option value="mulher trans">Mulher trans</option>
          <option value="pessoao não binária">Pessoa não binária</option>
          <option value="prefiro não informar">Prefiro não informar</option>
        </select>
        <p>Autodeclaração de raça:</p>
        <select>
          <option value="" selected="select">Escolher</option>
          <option value="negro">Negro</option>
          <option value="branco">Branco</option>
          <option value="pardo">Pardo</option>
          <option value="amarelo">Amarelo</option>
          <option value="indígena">Indígena</option>
          <option value="prefiro não informar">Prefiro não informar</option>
        </select>
        <br></br>

        <label>
          <p>Escolha entre as opções de curso:</p>
          <br></br>
          <input type="radio" id="integral" name="fav_language" value="Curso integral web fullstack"/>
          <label for="integral">Curso integral web fullstack</label>
          <br></br>
          <input type="radio" id="noturno" name="fav_language" value="Curso noturno web fullstack"/>
          <label for="noturno">Curso noturno web fullstack</label>
          <br></br>
          <br></br>
        </label>
        
        <label>
          <p>Preencha os campos para completar a sua inscrição:</p>
          <br></br>
          <input type="checkbox" id="ensino médio" name="ensino médio" value="ensino médio"/>
          <label for="ensino médio"> Possui ensino médio completo</label>
          <br></br>
          <input type="checkbox" id="disponibilidade" name="vdisponibilidade" value="disponibilidade"/>
          <label for="disponibilidade"> Tem disponibilidade para participar das atividades</label>
          <br></br>
          <br></br>
        </label>
      
      <button onClick={submit}>ENVIAR DADOS</button>
      </Form>
  )
}

export default ConfirmationForm