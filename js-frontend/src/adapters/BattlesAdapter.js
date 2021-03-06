class BattlesAdapter {
  constructor() {
      this.baseUrl = 'http://localhost:3000/api/v1/battles'
  }
  
  getBattles() {
     return fetch(this.baseUrl).then(res => res.json())
  }

  createBattle(nameValue, yearValue, countryValue, troopsValue, casualtiesValue, descriptionValue) {
    const battle = {
      name: nameValue,
      year: yearValue,
      country: countryValue,
      troops: troopsValue,
      casualties: casualtiesValue,
      description: descriptionValue
    }
    
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ battle }),
    }).then(res => res.json())
  }

  updateBattle(updatedName, updatedYear, updatedCountry, updatedTroops, updatedCasualties, updatedDescription, id) {
    const battle = {
      name: updatedName,
      year: updatedYear,
      country: updatedCountry,
      troops: updatedTroops,
      casualties: updatedCasualties,
      description: updatedDescription
    }
    return fetch(`${this.baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ battle }),
      }).then(res => res.json())
    }
}
 