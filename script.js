
let object = {
    width: 1366,
    height: 768,
    name: "Scrin Size",
    boolean: false
};

console.log(object.name);
object.boolean = true;

object.options = {
    border: "20px",
    color: "red"
};

delete object.boolean;

console.log(object);

for (let key in object) {
    console.log("Свойства " + key + " имеет значение " + object[key]);
}
