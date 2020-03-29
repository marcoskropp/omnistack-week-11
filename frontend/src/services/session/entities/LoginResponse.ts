class LoginResponse {
  public name!: string

  constructor(response: LoginResponse) {
    this.name = response.name
  }
}

export { LoginResponse }
