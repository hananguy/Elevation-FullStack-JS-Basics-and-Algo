class Matrix
{
    constructor(i_Row,i_Col)
    {
        this.matrix = [];
        this.m_Rows = i_Row;
        this.m_Cols = i_Col;
        this.BuildMatrix();
    }
    BuildMatrix()
    {
        let num = 1;
        for(let i = 0; i < this.m_Rows; i++)
        {
            this.matrix.push([]);
            for(let j = 0; j < this.m_Cols; j++)
            {
                this.matrix[i].push(num++);
            }
        }
    }
    print()
    {
        for(let i = 0; i < this.m_Rows; i++)
        {
            for(let j = 0; j < this.m_Cols; j++)
            {
                console.log(this.matrix[i][j]);
            }
        }
    }
    printColumn(i_Col)
    {
        for(let i = 0; i < this.m_Rows; i++)
        {
            console.log(this.matrix[i][i_Col]);
        }
    }
    printRow(i_Row)
    {
        for(let i = 0; i < this.m_Cols; i++)
        {
            console.log(this.matrix[i_Row][i]);
        }
    }
}

let myMatrix = new Matrix(4,3);
// myMatrix.print();   
// myMatrix.printColumn(2);
myMatrix.printRow(1);