
var r;

onmessage= function(e)
{
    r=Number(e.data);
  
  };

  function timedCount() {
    r= r+ 1;
    if(!Number.isNaN(r))
    {
    postMessage(r);
    
    
    }
    setTimeout("timedCount()",600);
  }

  
  timedCount();
