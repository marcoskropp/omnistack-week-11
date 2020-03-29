import React, { ReactElement, useEffect, useState } from 'react'
import { FlatList, View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { AxiosResponse } from 'axios'

import { api } from '../../services/api'

import LogoImage from '../../assets/logo.png'

import { styles } from './styles'

import { IIncident, IIncidents } from './Interfaces'

const Incidents = (): ReactElement => {
  const navigation = useNavigation()

  const [incidents, setIncidents] = useState<IIncidents>([])
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  const navigateToDetail = (incident: IIncident): void => {
    navigation.navigate('Detail', { incident })
  }

  const loadIncidents = async (): Promise<void> => {
    if(loading) {
      return
    }

    if(total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)

    const response: AxiosResponse = await api.get<IIncidents>('incidents', { params: { page } })

    setPage(page + 1)
    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoImage} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{total} cases</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>Choose one of the cases below and save the day.</Text>
      <FlatList 
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            <Text style={styles.incidentProperty}>Case:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            <Text style={styles.incidentProperty}>Value:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD' 
              }).format(incident.value)}
            </Text>
            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)}>
              <Text style={styles.detailsButtonText}>See more details</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export { Incidents }