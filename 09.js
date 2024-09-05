const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
startEngine : () => {
    const {make,model}= car
    return `This ${make} car of Model ${model} has start engine`;}
}
console.log(car.startEngine());
