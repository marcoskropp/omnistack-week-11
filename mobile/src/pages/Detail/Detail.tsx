import React, { ReactElement, useEffect } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as MailComposer from 'expo-mail-composer'
import { Feather } from '@expo/vector-icons'

import LogoImage from '../../assets/logo.png'

import { styles } from './styles'

import { IDetailRouteProps } from './Interfaces'

const Detail = (): ReactElement => {
  const navigation = useNavigation()
  const route = useRoute<IDetailRouteProps>()

  const incident = route.params.incident
  const message = `Hello ${incident.name}, I'm getting in touch because I would like to help in the case "${incident.title}" with the value of 
  ${Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD' 
  }).format(incident.value)}`

  const navigateBack = (): void => {
    navigation.goBack()
  }

  const sendMail = (): void => {
    MailComposer.composeAsync({
      subject: `Hero of case: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  const sendWhatsapp = (): void => {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Image source={LogoImage} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>{incident.name} from {incident.city}/{incident.uf}</Text>
        <Text style={styles.incidentProperty}>Case:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>
        <Text style={styles.incidentProperty}>Value:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' 
          }).format(incident.value)}
        </Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this case.</Text>
        <Text style={styles.heroDescription}>Contact us:</Text>
        <View style={styles.actions}>
          <View style={styles.action}>
            <TouchableOpacity  onPress={sendWhatsapp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.action}>
            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export { Detail }