async function getEnvironmentData() {
    const api = 'http://127.0.0.1:8000';
    let response = await fetch(api);
    let data = await response.json();
    return data;
}

getEnvironmentData().then(function (data) {
    console.log(data);
    var ul = document.getElementById("environment_detail");
    for (var detail in data) {
        console.log(detail, data[detail]);
        var item_detail = document.createElement("li");
        item_detail.innerHTML = "<b>" + detail + "</b> - " + data[detail];
        ul.appendChild(item_detail);
    }
});

// var counter = 4;
// // addelement();
// function addelement() {
//     // var completelist = document.getElementById("thelist");
//     // completelist.innerHTML += "<li>Item " + counter + "</li>";
//     // counter++;
//     var ul = document.getElementById("thelist");
//     var toppings = ["Tomato", "Cheese", "Pepperoni",
//         "Olives", "Jalapenos", "Pineapple", "Ham"];
//     for (var i = 0; i < toppings.length; i++) {
//         var topping = toppings[i];
//         // console.log(topping);
//         var listItem = document.createElement("li");
//         listItem.innerHTML = topping;
//         ul.appendChild(listItem);
//     }
// }
