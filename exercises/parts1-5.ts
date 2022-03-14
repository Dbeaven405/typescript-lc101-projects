// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
<<<<<<< HEAD
let spacecreaftName: string= 'determination'
let speedMph: number= 17500
let kilometersToMars: number= 225000000
let kilometersToMoon: number = 384400
let milesPerKiloneter: number = 0.621


// Part 2: Print Days to Mars
let milesToMars = kilometersToMars*milesPerKiloneter
console.log(milesToMars)


=======
let spacecraftName: string = 'Determination'
let speedMph: number = 17500
let kilometersToMars: number = 225000000
let kilometersToMoon: number = 384400
let milesPerKilometer: number = 0.621


// Part 2: Print Days to Mars
let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;
console.log(`${spacecraftName} will take ${daysToMars} days to reach Mars`)
>>>>>>> d30a672a89342a7cc6b960a8ccec5c42bc186755
// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    let daysToLocation: number = hours / 24

    return daysToLocation
}
console.log(getDaysToLocation(milesToMars))
console.log(`${spacecraftName} will take ${getDaysToLocation(milesToMars)} days to get to Mars`)

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class




// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
