const person = {
    name: 'Chantal',
    age: 38,
    location: {
        city: 'Calgary',
        temp: 6
    }
};
const {name = 'Anonymous', age} = person;
console.log(`${name} is ${age}.`);

var {city, temp:temperature} = person.location;

if(city && temperature){
    console.log(`It's ${temperature} in ${city}`);
}

const address = ['555 some address','houston','77077'];

var [street,city,state = 'California',zip] = address;

console.log(`You are in ${city} ${state}`)