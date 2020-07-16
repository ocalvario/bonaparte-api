class Battles {
    constructor() {
        this.battles = []
        this.adapter = new BattlesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadBattles()
    }

    fetchAndLoadBattles() {
       this.adapter.
       getBattles()
       .then(battles => {
        battles.forEach(battle => this.battles.push(new Battle(battle)))
       }) 
       .then(() => {
        this.render()
       })
    }

    render() {
        const battlesContainer = document.getElementById('battles-container')
        battlesContainer.innerHTML = this.battles.map(battle => `<li>${battle.name}</li>`).join('')
    }
}

