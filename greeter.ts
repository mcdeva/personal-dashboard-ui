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

testGetFlight().then((data) => {
    console.log(data.data);
    let arr_data = data.data;
    arr_data.forEach(function (value) {
        console.log(value.employee_name);
    });
});
