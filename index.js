const form = document.getElementById("transactionForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form)
    let TablaRef = document.getElementById("AddInfo");
    let NuevaFilaRef = TablaRef.insertRow(-1);

    let NuevaCeldaRef = NuevaFilaRef.insertCell(0);
    NuevaCeldaRef.textContent = transactionFormData.get(5); 
    
    NuevaCeldaRef = NuevaFilaRef.insertCell(1);
    NuevaCeldaRef.textContent = transactionFormData.get("programa"); 

    NuevaCeldaRef = NuevaFilaRef.insertCell(2);
    NuevaCeldaRef.textContent = transactionFormData.get("cantidad");


}) 