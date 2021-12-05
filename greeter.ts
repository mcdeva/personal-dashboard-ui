// class Student {
//     fullName: string;
//     constructor(
//         public firstName: string,
//         public middleInitial: string,
//         public lastName: string
//     ) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("Jane", "M.", "User");

// document.body.textContent = greeter(user);

// interface Resp {
//     success: boolean
//     activityId: string
// }

// function getFlight(): Promise<Resp[]> {
//     return fetch('https://110.238.116.225/tmpflightinformation-qa/api/Airport/DropdownMenuArrivalAirport')
//         .then(res => res.json())
//         .then(res => {
//             return res as Resp[]
//         })
// }

async function testGetFlight() {
    const api = 'http://110.238.116.225/tmpflightinformation-qa/api/Airport/DropdownMenuArrivalAirport';
    let response = await fetch(api);
    let data = await response.json();
    return data;
}

// getFlight()
//     .then(resp => {
//         document.body.textContent = resp.map(u => u.activityId).toString();
//     })

// testGetFlight().then((data) => {
//     console.log(data.data);
//     let arr_data = data.data;
//     arr_data.forEach(function (value) {
//         console.log(value.employee_name);
//     });
// });

async function getLoginGame() {
    const api = 'http://127.0.0.1:8000/';
    let response = await fetch(api);
    let data = await response.json();
    return data;
}

getLoginGame().then((data) => {
    console.log(data);
    var ul = document.getElementById("thelist");

    for (var game in data) {
        console.log(game, data[game]);

        var listItem = document.createElement("li");
        listItem.innerHTML = game;
        
        ul.appendChild(listItem);
    }
    
    // for (var i = 0; i < )
})

var counter = 4;
// addelement();

function addelement() {
    // var completelist = document.getElementById("thelist");
    // completelist.innerHTML += "<li>Item " + counter + "</li>";
    // counter++;
    var ul = document.getElementById("thelist")

    var toppings = ["Tomato", "Cheese", "Pepperoni", 
                "Olives", "Jalapenos", "Pineapple", "Ham"];

    for (var i = 0; i < toppings.length; i++) {
        var topping = toppings[i];
        // console.log(topping);
        
        var listItem = document.createElement("li");
        listItem.innerHTML = topping;
        
        ul.appendChild(listItem);
    }
}
