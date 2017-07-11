// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 7)


// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 7, 'Constructor did not set seats.')
// run the success function once you're done with a set of tests
success()

// test sell
console.log('Testing selling a car')
honda.sell('Lenny')
assert.strictEqual(honda.owner, 'Lenny', 'Owner didn\'t update to new owner')
success()

// You're on your own from here
console.log('Testing selling a car to non-string')
honda.sell('0123')
assert.strictEqual(honda.owner, 'Lenny', 'Owner didn\'t update to new owner')
success()

// normal case: test sell update the previousOwners
console.log('Testing previousOwners after selling')
honda.sell('Shimei')
var lastPrevOwner = honda.previousOwners[ honda.previousOwners.length - 1 ]
assert.strictEqual(lastPrevOwner, 'Lenny', 'There should be two prevOwner after two successful selling')
success()

//* `Car.start()`
  // * Should change the running value of the car to `true`.
console.log('test if running value of car is true when Car.start()');
honda.start()
assert.strictEqual(honda.running, true, 'running should be true when car start')
success()

// * `Car.off()`
//   * Should change the running value to `false`.
console.log('test if running value of car is false when Car.off()');
honda.off()
assert.strictEqual(honda.running, false, 'running should be false when car off')
success()

// * `Car.driveTo(destination)`
//   * Should `console.log` `"driving to <destination>"`, but only if the car is running.
//   * Should return true if it is successful and false if it is not.
console.log('test console.log when driving to destination');
honda.start()
honda.driveTo('malacca')
assert.strictEqual(honda.driveTo('malacca'), true, 'driveTo should return true when honda.start() ie. honda.running = true')
success()

honda.off()
honda.driveTo('malacca')
assert.strictEqual(honda.driveTo('malacca'), false, 'driveTo should return false when honda.off() ie. honda.running = false')
success()

// // * `Car.park()`
//   * Only if the car is not running, you should console.log `parked!!`.
//   * Should return true if it is successful and false if it is not.

console.log('test for carpark normal');
honda.off()
honda.park()
assert.strictEqual(honda.park(), true, 'park should be true when running is false')
success()

console.log('test for carpark error');
honda.start()
honda.park()
assert.strictEqual(honda.park(), false, 'park should be false when running is true')
success()

// * `Car.pickUp(name)`
//   * Should take a `name` and `console.log` that you are `"driving to pick up <name>"`, but only if the `car` is running AND there are enough seats available.
//   * Should also update the `passengers` array to include the new passenger.
//   * Should also return true on success and false on failure.
//   * The newly picked up passenger should be `pushed` to the end of the array.

//normal: car running && enough seats, expectation true
console.log(honda.passengers, honda.seats)
honda.start()
var newPickup = honda.pickUp('azmeer')
assert.strictEqual(newPickup, true, 'newPickup should equal true when car running and enough seats')
success()

// console.log(honda.passengers)

//test last passenger
honda.start()
honda.pickUp('Dom')
assert.strictEqual(honda.passengers[honda.passengers.length-1], 'Dom', 'passengers last will be latest pickup')
success()

//test error: not enough seats, expectation false
honda.start()
var passengersNo = honda.passengers.length +1
while(honda.passengers.length<honda.seats-1){
  honda.pickUp('passenger'+passengersNo)
  passengersNo++
}
// console.log(honda.passengers)
var newPickup = honda.pickUp('daniel')
assert.strictEqual(newPickup, false, 'newPickup should equal false when carPassengers + driver = seats')
success()

// * `Car.dropOff(name)`
//   * Should take a `name` and remove them from the `passengers` array, but only if they are in the array.
//   * Should also only drop them off if the car is `on`.
//   * Should also output `"driving to drop off <name>"` and return true on success and false on failure.

//error: name not inside passenger list, expect false
honda.start()
assert.strictEqual(honda.dropOff('elmatador'), false, 'dropoff should return false when passenger name not in list')
success()

//error: name inside passenger list, expect true
console.log(honda.passengers)
honda.start()
assert.strictEqual(honda.dropOff('Dom'), true, 'dropoff should return true when passenger name in list')
success()

//error: passenger in list, running=off, expect false
honda.off()
assert.strictEqual(honda.dropOff('azmeer'), false, 'dropoff should return false when passenger name not in list')
success()

// * `Car.passengerCount()`
//   * Should return the number (integer) of passengers currently in the car.
console.log(honda.passengers.length);
assert.strictEqual(honda.passengerCount(), 5, 'dropoff should return false when passenger name not in list')
success()
