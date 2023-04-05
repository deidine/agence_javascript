const seatDiagram = document.querySelector("#seatsDiagram");
const seatInputInput = document.querySelector("#seatInput");
seatDiagram.addEventListener("click", selectSeat);
let selected_id; 

function selectSeat(evt)
{
  if(evt.target.nodeName == "TD" && !evt.target.className.includes("space") && !evt.target.className.includes("notAvailable"))
  {
    if(!selected_id || evt.target.dataset.name === selected_id)
    {
      selected_id = evt.target.dataset.name;
      evt.target.classList.toggle("selected");

      if(!evt.target.className.includes("selected"))
      {
        selected_id = "";
      }

      seatInput.value = selected_id;

      if(selected_id)
      {
        // Put a value for amount
        const sourceSelected = document.querySelector("#sourceSearch").value;
        const destSelected  = document.querySelector("#destinationSearch").value;
        const citiesArr = convertToArray(document.querySelector("#routeSearch").dataset.id);

        console.log(sourceSelected, destSelected, citiesArr);
        const stepCost = document.querySelector("#routeSearch").dataset.stepcost;

        const amount = (citiesArr.indexOf(destSelected) - citiesArr.indexOf(sourceSelected)) * parseInt(stepCost);
        console.log(citiesArr.indexOf(destSelected), citiesArr.indexOf(sourceSelected), stepCost);
        document.querySelector("#bookAmount").value = amount;
      }
    }
  }
}

