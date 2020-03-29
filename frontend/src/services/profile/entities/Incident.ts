class Incident {
  public id!: number;

  public title!: string

  public description!: string

  public value!: number

  public ngo_id!: string

  constructor(response: Incident) {
    this.id = response.id
    this.title = response.title
    this.description = response.description
    this.value = response.value
    this.ngo_id = response.ngo_id
  }
}

export { Incident }
