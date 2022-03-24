function valassign()
{
if(document.getElementById("quantity").value<=99 && document.getElementById("quantity").value>0)     
sessionStorage.num=document.getElementById("quantity").value;
else if(document.getElementById("quantity").value<=0)
alert("Enter A number greater than equal to 1");
else
alert("Enter A number less than 99");
}

function start() //The function which gets triggered on clicking start button
{
    if (typeof(Worker) !== "undefined") {
      if (typeof(w) == "undefined") {
        w = new Worker("webwork.js");
        w.postMessage(sessionStorage.num);
      }
      w.onmessage = function(event) {
        
        document.getElementById("result").innerHTML = event.data;
        if(test_prime(event.data)==true)
        {
          w.terminate();
          w = undefined;
        }
        
      }
    } else {
      document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
  }
  
  function stop()// Function which gets triggered on clicking end button  
  {
    w.terminate();
    w = undefined;
  }

  function test_prime(n) //function for testing prime number
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}