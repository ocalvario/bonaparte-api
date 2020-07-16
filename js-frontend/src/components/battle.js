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
    return `<ul><h4>${this.name}</h4>
                <li>Year Ended: ${this.year}</li>
                <li>Country of occurence: ${this.country} </li>
                <li>Napoleon's Troop Strength: ${this.troops}</li>
                <li>Napoleon's Total Casualties: ${this.casualties}</li>
                <li>Battle Description: ${this.description} </li>
            </ul><br>`  
    }

}