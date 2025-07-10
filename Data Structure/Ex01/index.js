class uniqeArray
{
    constructor()
    {
        this.elements = {} 
        this.length = 0;       
    }
    add(item)
    {
        if(this.elements.hasOwnProperty(item) === false)
        {
            this.elements[item] = this.length; //When we add a new item, it will get the last index.
            this.length++;
        }
    }
    showAll()
    {
        for(const value in this.elements)
        {
            console.log(value);
        }
    }
    exist(item)
    {
        return this.elements.hasOwnProperty(item)
    }
    getIndex(item)
    {
       return this.elements.hasOwnProperty(item)
        ? this.elements[item]
        : -1;
    }
}

let arr = new uniqeArray();

arr.add("Guy");
arr.add("Dekel");
arr.add("Roei");

arr.showAll();

console.log(arr.getIndex("Roei"));