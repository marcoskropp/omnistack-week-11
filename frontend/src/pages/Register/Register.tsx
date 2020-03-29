/* eslint-disable no-alert */
import React, { ReactElement, FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { NgoService } from '~/services/ngo/NgoService'

import LogoImage from '~/assets/logo.svg'

import './styles.css'

interface IProps {
  ngoService: NgoService
}

const Register = ({ ngoService }: IProps): ReactElement => {
  const history = useHistory()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [whatsapp, setWhatsapp] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [uf, setUf] = useState<string>('')

  const handleRegister = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const data = {
      name, email, whatsapp, city, uf
    }

    try {
      const response = await ngoService.storeNgo(data)

      alert(`Your Acess ID ${response.id}`)

      history.push('/')
    } catch (error) {
      alert('An error has occurred, try again.')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImage} alt="Be The Hero" />
          <h1>Register</h1>
          <p>Register, enter the platform and help people find cases of your NGO.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Back to logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="NGO Name"
            value={name}
            onChange={(event): void => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event): void => setEmail(event.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(event): void => setWhatsapp(event.target.value)}
          />
          <div className="input-group">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(event): void => setCity(event.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(event): void => setUf(event.target.value)}
            />
          </div>
          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export { Register }
