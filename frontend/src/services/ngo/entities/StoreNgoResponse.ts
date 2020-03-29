class StoreNgoResponse {
  public id!: string

  constructor(response: StoreNgoResponse) {
    this.id = response.id
  }
}

export { StoreNgoResponse }
