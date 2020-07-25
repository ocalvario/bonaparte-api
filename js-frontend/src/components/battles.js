class Battles {
    constructor() {
        this.battles = []
        this.adapter = new BattlesAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadBattles()
    }

    initiBindingsAndEventListeners() {
        this.battlesContainer = document.getElementById('battles-container')
        this.body = document.querySelector('body')
        this.newBattleName = document.getElementById('new-battle-name')
        this.newBattleYear = document.getElementById('new-battle-year')
        this.newBattleCountry = document.getElementById('new-battle-country')
        this.newBattleTroops = document.getElementById('new-battle-troops')
        this.newBattleCasualties = document.getElementById('new-battle-casualties')
        this.newBattleDescription = document.getElementById('new-battle-description')
        this.battleForm = document.getElementById('new-battle-form')
        this.battleForm.addEventListener('submit', this.createBattle.bind(this))
        this.battlesContainer.addEventListener('dblclick', this.changeBattleClick.bind(this))
        this.body.addEventListener('blur', this.updateBattle.bind(this), true)
        }

    createBattle(e) {
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

    changeBattleClick(e) {
        const li = e.target
        li.contentEditable = true
        li.focus
        li.classList.add('editable')
    }

    updateBattle(e) {
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
        let updatedName = e.name
        if (li.id.match('battle-name')) {updatedName = newValue;}
        let updatedYear = e.year
        if (li.id.match('battle-year')) {updatedYear = newValue;}
        let updatedCountry = e.country
        if (li.id.match('battle-country')) {updatedCountry = newValue;}
        let updatedTroops = e.troops
        if (li.id.match('battle-troops')) {updatedTroops = newValue;}
        let updatedCasualties = e.casualties
        if (li.id.match('battle-casualties')) {updatedCasualties = newValue;}
        let updatedDescription = e.description
        if (li.id.match('battle-description')) {updatedDescription = newValue;}
        this.adapter.updateBattle(updatedName, updatedYear, updatedCountry, updatedTroops, updatedCasualties, updatedDescription, id)
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

