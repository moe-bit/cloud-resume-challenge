getData().then(visitorNumber => {
    const visitorCounterElement = document.getElementById("visitor-counter");
    let visitorNumberElement = "";
    if (visitorNumber){
        visitorNumberElement = `<p>You are visitor number <strong>${visitorNumber}</strong> today! Welcome!</p>`;
    }
    else {
        visitorNumberElement = `<p>Oops, an error has occurred with the visitor counter. I am working hard to fix it as soon as possible!</p>`;
    }

    visitorCounterElement.innerHTML += visitorNumberElement;
    
});

// Fetches visitor number from the API
async function getData() {
    const url = "https://l39apx0b8b.execute-api.eu-west-1.amazonaws.com/visitor-counter";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        }
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return await response.json();
      
    } catch (error) {
      console.error(error.message);
      return null; 
    }

    
  }


  