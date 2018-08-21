function forLoop()
{
    for (var i=1;i<=50;i++)
    {
        if(i%5==0)
        {
        document.getElementById("for").innerHTML="Using for Loop" ;
        var para = document.createElement("P");                 
        var t = document.createTextNode(i);                       
        para.appendChild(t);                                     
        document.body.insertBefore(para,document.getElementById("while"));
        }
        
    }
}

function whileLoop()
{
    var i=1;
    while(i<=50)
    {
        if(i%5==0)
        {
        document.getElementById("while").innerHTML="Using while Loop" ;
        var para = document.createElement("P");                 
        var t = document.createTextNode(i);                        
        para.appendChild(t);                                      
        document.body.appendChild(para);                          
        }
        i++
    }
}