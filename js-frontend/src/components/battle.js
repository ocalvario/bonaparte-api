class Battle {
    constructor (battleJSON) {
      this.id = battleJSON.id
      this.name = battleJSON.name
      this.year = battleJSON.year
      this.country = battleJSON.country
      this.troops = battleJSON.troops
      this.casualties = battleJSON.casualties
      this.description = battleJSON.description
    }

    renderUl() {
      return `<ul data-id=${this.id}><h4 id='battle-name'>${this.name}</h4>
                  <li id='battle-year', data-id=${this.id},>Year Ended: ${this.year}</li>
                  <li id='battle-country', data-id=${this.id}>Country of occurence: ${this.country} </li>
                  <li id='battle-troops', data-id=${this.id}>Napoleon's Troop Strength: ${this.troops}</li>
                  <li id='battle-casualties', data-id=${this.id}>Napoleon's Total Casualties: ${this.casualties}</li>
                  <li id='battle-description', data-id=${this.id}>Battle Description: ${this.description} </li>
              </ul><br>`  
      }

}