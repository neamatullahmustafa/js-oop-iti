class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log("the perimeter is " + this.sides * this.sideLength);
  }
}
// class Shape {
//   name;
//   sides;
//   sideLength;
//   calcPerimeter() {
//     console.log(this.sides * this.sideLength);
//   }
// }
class Square extends Shape {
  constructor(sideLength) {
    super("Square", 4, sideLength);
    this.sideLength = sideLength;
  }
  calcArea() {
    console.log("the area is " + this.sideLength * this.sideLength);
  }
}
class Triple {
  constructor(dis = "I triple any number you provide") {
    Triple.customName = "Tripler";
    this.description = dis;
  }
  calculate(n = 1) {
    return n * 3;
  }
}
class SquaredTriple extends Triple {
  constructor() {
    super("square the triple of any number you provide");
    SquaredTriple.longDescription = "";
  }
  calculate(n = 1) {
    return super.calculate(n) * super.calculate(n);
  }
}
instanceTriple = new Triple();
instanceSquaredTriple = new SquaredTriple();
console.log(instanceSquaredTriple.description);
console.log(instanceSquaredTriple.calculate());
console.log(instanceSquaredTriple.calculate(3));
console.log(instanceSquaredTriple.longDescription);
console.log(instanceSquaredTriple.customName);
console.log(instanceTriple.calculate());
console.log(instanceTriple.calculate(6));
console.log(instanceTriple.description);
instanceSquare = new Shape("square", 4, 5);
instanceSquare.calcPerimeter();
instanceTriangle = new Shape("triangle", 3, 3);
instanceTriangle.calcPerimeter();
instanceSquare2 = new Square(5);
instanceSquare2.calcPerimeter();
instanceSquare2.calcArea();
class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    this.Person;
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }
  Sleep(hours){if(hours==7)this.sleepMood="happy";
  else if (hours<7) this.sleepMood="tired";
else if (hours<7)this.sleepMood="lazy";}  
Eat(meals){if(meals==3)this.healthRate=100;
else if(meals==2)this.healthRate=75;
else if(meals==1)this.healthRate=50;}  

Buy(items){(this.money= this.money-items*10)}  
}
personOne = new Person("John Doe", 100, "happy", 100);
personOne.Buy(2);
personOne.Eat(1);
personOne.Sleep(3);
console.log(personOne)
