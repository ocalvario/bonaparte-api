class Battles {
    constructor() {
        this.battles = []
        this.adapter = new BattlesAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadBattles()
    }

    initiBindingsAndEventListeners() {
        this.battlesContainer = document.getElementById('battles-container')
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
        this.battlesContainer.innerHTML = this.battles.map(battle => `<li>${battle.name}</li>`).join('')
    }
}

