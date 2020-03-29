class Ngo {
  public id!: string

  public name!: string

  public email!: string

  public whatsapp!: string

  public city!: string

  public uf!: string

  constructor(response: Ngo) {
    this.id = response.id
    this.name = response.name
    this.email = response.email
    this.whatsapp = response.whatsapp
    this.city = response.city
    this.uf = response.uf
  }
}

export { Ngo }
