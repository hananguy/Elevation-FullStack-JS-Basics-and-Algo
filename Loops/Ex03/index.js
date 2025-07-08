const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]
console.log("Posts Before: ");
console.log(posts);
let i = 0;
for(const pair of posts)
{
    let tempID = pair.id;
    if(tempID === 2)
    {
        posts.splice(i,1);
    }
    i++;
}
console.log("Posts After: ");

console.log(posts);