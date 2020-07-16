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
        battles.forEach(battle => this.battles.push(battle))
       }) 
       .then(() => {
        this.render()
       })
    }

    render() {
        const battlesContainer = document.getElementById('battles-container')
        battlesContainer.innerHTML = 'my notes here'
    }
}

