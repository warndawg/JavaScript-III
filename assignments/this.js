/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Object Binding - "this" references to any object globally
 * 2. Implicit Object Binding - "this" is referring to the object left of the object being called.
 * 3. New Binding - "this" is referencing to a constructor object that was just created.
 * 4. Explicit Binding - "this" can be overridden by the .call and then .apply functions
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

let dogBarks = name => console.log(this);
name + "barks";

dogBarks("buddy");

// Principle 2

// code example for Implicit Binding

const mySelf = {
  greeting: "Whats Up",
  sayHi: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
  }
};

mySelf.sayHi("Kevin");

// Principle 3

// code example for New Binding

function Player(name) {
  this.name = name;
  this.basketBall = function() {
    console.log(`${this.name} shoots the basketball`);
  };
  this.steal = function() {
    console.log(`${this.name} steals the ball`);
  };
}
const Kevin = new Player("Kevin");
const Ruthann = new Player("Ruthann");

Kevin.basketBall();
Ruthann.basketBall();
Kevin.steal();
Ruthann.steal();

// Principle 4

// code example for Explicit Binding

Kevin.steal.call(Ruthann);
Ruthann.steal.apply(Kevin);
