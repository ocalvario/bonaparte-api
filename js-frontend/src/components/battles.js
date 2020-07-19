class Battles {
    constructor() {
        this.battles = []
        this.adapter = new BattlesAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadBattles()
    }

    initiBindingsAndEventListeners() {
        this.battlesContainer = document.getElementById('battles-container')
        this.newBattleName = document.getElementById('new-battle-name')
        this.newBattleYear = document.getElementById('new-battle-year')
        this.newBattleCountry = document.getElementById('new-battle-country')
        this.newBattleTroops = document.getElementById('new-battle-troops')
        this.newBattleCasualties = document.getElementById('new-battle-casualties')
        this.newBattleDescription = document.getElementById('new-battle-description')
        this.battleForm = document.getElementById('new-battle-form')
        this.battleForm.addEventListener('submit', this.createBattle.bind(this))
        // this.battleForm
    }

    createBattle(e) {
        console.log(this)
        e.preventDefault()
        const nameValue = this.newBattleName.value
        const yearValue = this.newBattleYear.value
        const countryValue = this.newBattleCountry.value
        const troopsValue = this.newBattleTroops.value
        const casualtiesValue = this.newBattleCasualties.value
        const descriptionValue = this.newBattleDescription.value
        this.adapter.createBattle(nameValue, yearValue, countryValue, troopsValue, casualtiesValue, descriptionValue).then(battle => {
            this.battles.push(new Battle(battle))
            this.newBattleName.value = ''
            this.newBattleYear.value = ''
            this.newBattleCountry.value = ''
            this.newBattleTroops.value = ''
            this.newBattleCasualties.value = ''
            this.newBattleDescription.value = ''
            this.render() 
        })
    }

    fetchAndLoadBattles() {
       this.adapter.
       getBattles()
       .then(battles => {
            battles.forEach(battle => this.battles.push(new Battle (battle)))
       }) 
       .then(() => {
        this.render()
       })
    }

    render() {
        this.battlesContainer.innerHTML = this.battles.map(battle => battle.renderUl()).join('')
    }
}

