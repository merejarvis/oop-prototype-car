// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor(make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    // TODO: add color, seats here
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
    this.passengers = passengers || []
  }

  // add the sell function
  sell (newOwner) {
    if(isNaN(newOwner)){
    this.previousOwners.push(this.owner)
    this.owner = newOwner}
  }
  // add the paint function
  paint (newColor) {
    this.color = newColor
  }

  start(){
    this.running = true
  }

  off(){
    this.running = false
  }

  driveTo(destination){
    if (this.running=== true){
      console.log('driving to ' + destination);
      return true
    }
    return false
  }

  park(){
    if (this.running === false){
      return true
    } return false
  }

  pickUp(name){
    if (this.running && this.passengers.length< this.seats-1){
      this.passengers.push(name)
      console.log('driving to pick up ', name);
      return true
    }
    return false
  }

  dropOff(name){
    if (this.running && this.passengers.indexOf(name)>-1){
      var position = this.passengers.indexOf(name)
      this.passengers.splice(position,1)
      console.log('driving to drop of ', name, '. Remaining passengers = ', this.passengers);
      return true
    }
    return false
  }

  passengerCount(){
    console.log(this.passengers.length);
    return this.passengers.length
  }

}

var c1 = new Car('toyota', 'allion', '2009', 'black','5', 'azmeer')

c1.sell('daniel')
console.log(c1);

// console.log(c1);

// export the Car class //
module.exports = Car
// this is required for the carTest.js to load this //
