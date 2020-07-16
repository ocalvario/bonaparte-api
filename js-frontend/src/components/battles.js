class Battles {
    constructor() {
        this.battles = []
        this.adapter = new BattlesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadBattles()
    }

    fetchAndLoadBattles() {
       this.adapter.getBattles().then(battles => {
        console.log(battles)
       }) 
    }

}

