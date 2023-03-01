function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
      console.error("Input must be an integer between 1 and 10.");
      return;
    }
  
    const triangleContainer = document.getElementById("triangle-container");
    triangleContainer.innerHTML = "";
  
    for (let i = 1; i <= n; i++) {
      const row = document.createElement("div");
      row.classList.add("triangle-row");
  
      for (let j = 1; j <= i; j++) {
        const cell = document.createElement("div");
        cell.classList.add("triangle-cell");
        cell.innerText = "*";
        row.appendChild(cell);
      }
  
      triangleContainer.appendChild(row);
    }
  }
  