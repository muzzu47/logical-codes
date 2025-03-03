function Person(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age
}

const myDirector = new Person("John","Hyland",55);
const myTeam1 = new Person("Abhilash","Sharma",35);
const myTeam2 = new Person("Clinton","While",40);
const myTeam3 = new Person("Tracy","Espe",33);

console.log("Who is your Director", myDirector.first +" " + myDirector.last);

