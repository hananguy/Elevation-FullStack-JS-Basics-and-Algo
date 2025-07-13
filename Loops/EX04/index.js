const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

const postID = 2; 

for(const post of posts)
{
    if(post["id"] === postID)
    {
        let i = 0;
        const postComments = post["comments"];
        for(const comment of postComments)
        {
            if(comment["id"] === 3)
            {
                postComments.splice(i,1);
                break;
            }
            i++;
        }
    }
}

//For check
const commentOfPost2 = posts[1].comments;
console.log(commentOfPost2);
