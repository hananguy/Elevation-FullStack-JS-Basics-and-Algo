const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

const keysInDict = Object.keys(dictionary);

for(const key of keysInDict)
{
    const keyArray = dictionary[key];
    console.log(`\nWords that begin with ${key}: \n`);
    for(const value of keyArray)
    {
        console.log(`${value}`);
    }
}