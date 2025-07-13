//Ex 01
const p1 = 
{
    name:"Michael",
    age: "27",
    city: "Petah Tikva"
}
const p2 = 
{
    name:"Romi",
    age: "25",
    city: "Petah Tikva"
}

if(p1.age === p2.age)
{
    console.log(`${p1.name} and ${p2.name} are at the same age!`);
}
if(p1.city === p2.city)
{
    console.log(`${p1.name} and ${p2.name} lives in the same city : ${p1.city}`);
    console.log(`${p1.name} wanted to date ${p2.name}`);
}
else
{
    console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);
}


//Ex 02

const book1 = { title: "The Hobbit", author: "J.R.R. Tolkien" };
const book2 = { title: "1984", author: "George Orwell" };
const book3 = { title: "To Kill a Mockingbird", author: "Harper Lee" };
const book4 = { title: "Pride and Prejudice", author: "Jane Austen" };
const book5 = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };

const library = 
{
  books: [book1, book2, book3, book4, book5]
};


//Ex 03
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = "Guy";

/*
//Ex 03.01
if(reservations.hasOwnProperty(name))
{
    if(reservations[name].claimed === false)
        console.log(`Welcome, ${name}`);
    else
        console.log(`Hmm, someone already claimed this reservation`);
}
else
{
     console.log(`You have no reservation`);
}
*/


//Ex03.02
function doesHaveAReservation(name)
    {
        let hasReservation = false;
        const lowerCaseName = name.toLowerCase();
        if(reservations.hasOwnProperty(lowerCaseName))
        {
            hasReservation = true;
            if(reservations[name].claimed === false)
                console.log(`Welcome, ${name}`);
            else
                console.log(`Hmm, someone already claimed this reservation`);
        }
        else
        {
            console.log(`You have no reservation`);
        }
        return hasReservation;
    }

    //Add Reservation function
function addReservation(reservations, name)
    {
        reservations[name] = {claimed: true};
    }

//Ex 03.1
let customerHasReservation = doesHaveAReservation(name);
if(customerHasReservation === false)
{
    addReservation(reservations, name);
}

console.log("The current reservations available:");

for(let customer in reservations)
{
    console.log(`${customer}`);
}

