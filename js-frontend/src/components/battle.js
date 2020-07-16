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

    renderLi() {
    return `<li>${this.name}</li>`  
    }

}