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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function testGetFlight() {
    return __awaiter(this, void 0, void 0, function () {
        var api, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = 'http://110.238.116.225/tmpflightinformation-qa/api/Airport/DropdownMenuArrivalAirport';
                    return [4 /*yield*/, fetch(api)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
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
function getLoginGame() {
    return __awaiter(this, void 0, void 0, function () {
        var api, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = 'http://127.0.0.1:8000/';
                    return [4 /*yield*/, fetch(api)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
getLoginGame().then(function (data) {
    console.log(data);
    var ul = document.getElementById("thelist");
    for (var game in data) {
        console.log(game, data[game]);
        var listItem = document.createElement("li");
        listItem.innerHTML = game;
        ul.appendChild(listItem);
    }
    // for (var i = 0; i < )
});
var counter = 4;
// addelement();
function addelement() {
    // var completelist = document.getElementById("thelist");
    // completelist.innerHTML += "<li>Item " + counter + "</li>";
    // counter++;
    var ul = document.getElementById("thelist");
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
