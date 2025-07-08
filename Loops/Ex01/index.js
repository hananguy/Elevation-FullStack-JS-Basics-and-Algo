const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for(let i = 0; i < names.length; i++)
{
    people.push({[names[i]]: ages[i]});
}
console.log(people);

//Ex02
for(const personObj of people)
{
    for(const key in personObj)
    {
        console.log(`${key} is ${personObj[key]} years old.`);
    }
}