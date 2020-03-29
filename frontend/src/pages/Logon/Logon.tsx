/* eslint-disable no-alert */
import React, { ReactElement, useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import { SessionService } from '~/services/session/SessionService'

import LogoImage from '~/assets/logo.svg'
import HeroesImage from '~/assets/heroes.png'

import './styles.css'

interface IProps {
  sessionService: SessionService
}

const Logon = ({ sessionService }: IProps): ReactElement => {
  const history = useHistory()

  const [id, setId] = useState<string>('')

  const handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      const response = await sessionService.login(id)

      localStorage.setItem('NGO_ID', id)
      localStorage.setItem('NGO_NAME', response.name)

      history.push('profile')
    } catch (error) {
      alert('An error has occurred, try again.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImage} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Logon</h1>
          <input type="text" placeholder="Your ID" value={id} onChange={(event): void => setId(event.target.value)} />
          <button className="button" type="submit">Logon</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Don&apos;t have registration
          </Link>
        </form>
      </section>
      <img src={HeroesImage} alt="Heroes" />
    </div>
  )
}

export { Logon }
