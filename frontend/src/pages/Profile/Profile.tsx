/* eslint-disable no-alert */
import React, { ReactElement, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import { ProfileService } from '~/services/profile/ProfileService'
import { IncidentService } from '~/services/incident/IncidentService'

import LogoImage from '~/assets/logo.svg'

import './styles.css'

interface IProps {
  profileService: ProfileService
  incidentService: IncidentService
}

interface IProfileResponse {
    id: number
    title: string
    description: string
    value: number
    ngo_id: string
  }

const Profile = ({ profileService, incidentService }: IProps): ReactElement => {
  const history = useHistory()

  const ngoName = localStorage.getItem('NGO_NAME')

  const [incidents, setIncidents] = useState<IProfileResponse[]>([])


  useEffect(() => {
    const onLoadPage = async (): Promise<void> => {
      const response = await profileService.getIncidentsByProfile()

      setIncidents(response)
    }
    onLoadPage()
  }, [profileService])

  const handleDeleteIncident = async (id: number): Promise<void> => {
    try {
      await incidentService.deleteIncident(id)

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('An error has occurred, try again.')
    }
  }

  const handleLogout = (): void => {
    localStorage.clear()

    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={LogoImage} alt="Be The Hero" />
        <span>
          Welcome,
          {' '}
          {ngoName}
        </span>
        <Link className="button" to="/incidents/new">Register new case</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={16} color="#E02041" />
        </button>
      </header>
      <h1>Registered cases</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASE: </strong>
            <p>{incident.title}</p>
            <strong>DESCRIPTION: </strong>
            <p>{incident.description}</p>
            <strong>VALUE: </strong>
            <p>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(incident.value) }</p>
            <button onClick={(): Promise<void> => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Profile }
