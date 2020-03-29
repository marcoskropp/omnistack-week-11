class IncidentResponse {
  public id!: number

  public title!: string

  public description!: string

  public value!: number

  public ngo_id!: string

  public name!: string

  public email!: string

  public whatsapp!: string

  public city!: string

  public uf!: string

  public constructor(response: IncidentResponse) {
    this.id = response.id
    this.title = response.title
    this.description = response.description
    this.value = response.value
    this.ngo_id = response.ngo_id
    this.name = response.name
    this.email = response.email
    this.whatsapp = response.whatsapp
    this.city = response.city
    this.uf = response.uf
  }
}

export { IncidentResponse }
