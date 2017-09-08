// Card Constructor
class Card {
    constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
        this.CardName = CardName
        this.CardImage = CardImage
        this.CardEnergy = CardEnergy
        this.CardAttack = CardAttack
        this.CardHealth = CardHealth
        this.CardRange = CardRange
        this.CardDescription = CardDescription
    }
}

class PlasmaBowmen extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Plama Bowmen"
		this.CardImage = 
        this.CardEnergy = 1
        this.CardAttack = 3
        this.CardHealth = 1
        this.CardRange = 3
        this.CardDescription = ""
	}
}

class RoserootVertebrate extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Roseroot Vertebrate"
		this.CardImage = 
        this.CardEnergy = 2
        this.CardAttack = 4
        this.CardHealth = 5
        this.CardRange = 1
        this.CardDescription = ""
	}
}

class StarJumper extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Star Jumper"
		this.CardImage = 
        this.CardEnergy = 2
        this.CardAttack = 2
        this.CardHealth = 4
        this.CardRange = 2
        this.CardDescription = ""
	}
}

class OmnigoScrapper extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Omnigo Scrapper"
		this.CardImage = 
        this.CardEnergy = 2
        this.CardAttack = 3
        this.CardHealth = 3
        this.CardRange = 1
        this.CardDescription = ""
	}
}

class WaxGasGrenadier extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Wax Gas Genadier"
		this.CardImage = 
        this.CardEnergy = 3
        this.CardAttack = 5
        this.CardHealth = 2
        this.CardRange = 2
        this.CardDescription = ""
	}
}

class CrystalBeamGenerator extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Crystal Beam Generator"
		this.CardImage = 
        this.CardEnergy = 3
        this.CardAttack = 4
        this.CardHealth = 5
        this.CardRange = 1,2
        this.CardDescription = ""
	}
}

class EMRcannon extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "EMR Cannon"
		this.CardImage = 
        this.CardEnergy = 3
        this.CardAttack = 4
        this.CardHealth = 2
        this.CardRange = 4
        this.CardDescription = ""
	}
}

class AtlasDrill extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Atlas Drill"
		this.CardImage = 
        this.CardEnergy = 1
        this.CardAttack = null
        this.CardHealth = 6
        this.CardRange = null
        this.CardDescription = ""
        //At the start of your turn gain 1 more energy to use during that turn
	}
}

class PressureAmplifier extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Pressure Amplifier"
		this.CardImage = 
        this.CardEnergy = 2
        this.CardAttack = null
        this.CardHealth = 8
        this.CardRange = null
        this.CardDescription = ""
        //Increase damage of friendly units by 3 that are within Pressure Amplifier's range (in front of that unit)
	}
}

class MirrorWall extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Mirror Wall"
		this.CardImage = 
        this.CardEnergy = 2
        this.CardAttack = null
        this.CardHealth = 10
        this.CardRange = null
        this.CardDescription = ""
        //Reflect 1/2 damage rounded up back at units that attack mirror wall
	}
}

class OrdersToAdvance extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Orders to Advance"
		this.CardImage = 
        this.CardEnergy = 2
        this.CardAttack = null
        this.CardHealth = null
        this.CardRange = null
        this.CardDescription = ""
        //Move foward all friendly units foward one space from the selected point onwards
	}
}

class DimensionWalk extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Dimension Walk"
		this.CardImage = 
        this.CardEnergy = 3
        this.CardAttack = null
        this.CardHealth = null
        this.CardRange = null
        this.CardDescription = ""
        //Select any unit and move them either left or right one lane in an unoccupied tile right next to their original location
	}
}

class DivineWhirlwind extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "Divine Whirlwind"
		this.CardImage = 
        this.CardEnergy = 3
        this.CardAttack = null
        this.CardHealth = null
        this.CardRange = null
        this.CardDescription = ""
        //Move all enemy units back one space from the selected point onwards
	}
}

class MeteorStrike extends Card {
	constructor(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription) {
		super(CardName, CardImage, CardEnergy, CardAttack, CardHealth, CardRange, CardDescription)
		this.CardName = "MeteorStrike"
		this.CardImage = 
        this.CardEnergy = 3
        this.CardAttack = null
        this.CardHealth = null
        this.CardRange = null
        this.CardDescription = ""
        //Destroy whatever unit is on the selected tile
	}
}