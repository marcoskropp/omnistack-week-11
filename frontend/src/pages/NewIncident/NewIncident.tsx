/* eslint-disable no-alert */
import React, { ReactElement, useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import LogoImage from '~/assets/logo.svg'

import './styles.css'
import { IncidentService } from '~/services/incident/IncidentService'

interface IProps {
  incidentService: IncidentService
}

const NewIncident = ({ incidentService }: IProps): ReactElement => {
  const history = useHistory()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [value, setValue] = useState<number>(0)

  const handleNewIncident = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      await incidentService.storeIncident({
        title, description, value
      })

      history.push('/profile')
    } catch (error) {
      alert('An error has occurred, try again.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImage} alt="Be The Hero" />
          <h1>Register new case</h1>
          <p>Describe the case in detail to find a hero to solve this.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Title case"
            value={title}
            onChange={(event): void => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(event): void => setDescription(event.target.value)}
          />
          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={(event): void => setValue(parseFloat(event.target.value))}
          />
          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export { NewIncident }
