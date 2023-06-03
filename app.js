// app.js

function ask_dimensions() {
  var height = parseFloat(prompt("Voer de hoogte van de kast in (in mm): ")) / 1000;
  var width = parseFloat(prompt("Voer de breedte van de kast in (in mm): ")) / 1000;
  var depth = parseFloat(prompt("Voer de diepte van de kast in (in mm): ")) / 1000;

  return {
    height: height,
    width: width,
    depth: depth
  };
}

function generate_3d_models(processed_data) {
  var height = processed_data.height;
  var width = processed_data.width;
  var depth = processed_data.depth;

  var mask = [];
  for (var i = 0; i < height; i++) {
    mask[i] = [];
    for (var j = 0; j < width; j++) {
      mask[i][j] = [];
      for (var k = 0; k < depth; k++) {
        mask[i][j][k] = 1;
      }
    }
  }

  var modelContainer = document.getElementById("modelContainer");
  modelContainer.innerHTML = "";

  var table = document.createElement("table");
  table.classList.add("modelTable");

  for (var i = 0; i < height; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < width; j++) {
      var cell = document.createElement("td");
      cell.textContent = mask[i][j].join(" ");
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  modelContainer.appendChild(table);
}

function main() {
  var dimensions = ask_dimensions();
  generate_3d_models(dimensions);
}

main();
