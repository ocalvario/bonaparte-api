class BattlesAdapter {
  constructor() {
      this.baseUrl = 'http://localhost:3000/api/v1/battles'
  }
  
  getBattles() {
     return fetch(this.baseUrl).then(res => res.json())
  }


    createBattle(battle) {
      const battle = {
        name: nameValue
        // year: yearValue
        // country: countryValue
        // troops: troopsValue
        // casualties: casualtiesValue
        // description: descriptionValue
      }
      return fetch(this.baseUrl, {
        method: 'POST', 
        body: JSON.stringify({ battle })
      })
    }
}