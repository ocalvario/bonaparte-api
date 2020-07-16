class Battles {
    constructor() {
        this.battles = []
        this.adapter = new BattlesAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadBattles()
    }

    initiBindingsAndEventListeners() {
        this.battlesContainer = document.getElementById('battles-container')
        this.battleForm = document.getElementById('new-battle-form')
        this.battleForm.addEventListener('submit', this.createBattle)
    }

    createBattle(e) {
        e.preventDefault()
        console.log('battle is being created')
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
        this.battlesContainer.innerHTML = this.battles.map(battle => battle.renderLi()).join('')
    }
}

