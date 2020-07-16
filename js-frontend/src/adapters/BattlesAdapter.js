class BattlesAdapter {
  constructor() {
      this.baseUrl = 'http://localhost:3000/api/v1/battles'
  }
  
  getBattles() {
     return fetch(this.baseUrl).then(res =>json()
    )
  }

}