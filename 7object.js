function User(name) {
    this.name = name || "JsGeeks";
}

var person = new User("xyz")["location"] = "Pendik";
console.log(person);