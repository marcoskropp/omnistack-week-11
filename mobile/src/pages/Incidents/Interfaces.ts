import { ViewStyle, TextStyle } from 'react-native'

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

interface IIncidents extends Array<IIncident> {}

interface Styles {
  container: ViewStyle
  header: ViewStyle
  headerText: TextStyle
  headerTextBold: TextStyle
  title: TextStyle
  description: TextStyle
  incidentList: ViewStyle
  incident: ViewStyle
  incidentProperty: TextStyle
  incidentValue: TextStyle
  detailsButton: ViewStyle
  detailsButtonText: TextStyle
}

export { IIncident, IIncidents, Styles }