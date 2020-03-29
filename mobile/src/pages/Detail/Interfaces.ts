import { ViewStyle, TextStyle } from 'react-native'
import { RouteProp } from '@react-navigation/native'

type RootStackParamList = {
  Detail: { incident: IIncident }
}

type IDetailRouteProps = RouteProp<RootStackParamList, 'Detail'>

interface IIncident {
  id: number
  title: string
  description: string
  value: number
  name: string
  email: string
  whatsapp: string
  city: string
  uf: string
}

interface Styles {
  container: ViewStyle  
  header: ViewStyle
  incident: ViewStyle
  incidentProperty: TextStyle
  incidentValue: TextStyle
  contactBox: ViewStyle
  heroTitle: TextStyle
  heroDescription: TextStyle
  actions: ViewStyle
  action: ViewStyle
  actionText: TextStyle
}

export { IIncident, IDetailRouteProps, Styles }