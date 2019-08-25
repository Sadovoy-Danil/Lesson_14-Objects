// let obj = new Object() — НЕПРАВИЛЬНО

let object = {
    width: 1366,
    height: 768,
    name: "Scrin Size",
    boolean: false
};

console.log(object.name);
options.boolean = false;

object.options = {
    border: "20px",
    color: "red"
};

delete object.boolean;

console.log(object);

for (let key in object) {
    console.log('Свойство ' + key + ' имеет значение ' + object[key]);
}