// CODE here for your Lambda Classes

//Person, Instructor, Student, PM

// Person
// name, age, location
// speak()

class Person{
    constructor(props){
        this.name = props.name
        this.age = props.age
        this.location = props.location
    }

    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}.`
    }
}

// Instructor
// specialty, favLanguage, catchPhrase
// demo(subject)
// grade(student, subject)

class Instructor extends Person{
    constructor(props){
        super(props)
        this.specialty = props.specialty
        this.favLanguage = props.favLanguage
        this.catchPhrase = props.catchPhrase
    }

    demo(subject){
        return `Today we are learning about ${subject}`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

// Student
// previousBackground, className, favSubjects
// listsSubjects()
// PRAssignment(subject)
// sprintChallenge(subject)

class Student extends Person{
    constructor(props){
        super(props)
        this.previousBackground = props.previousBackground
        this.className = props.className
        this.favSubjects = props.favSubjects
    }

    //listsSubjects(){}
    
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject){
        return `${this.name} has begun the Sprint Challenge for ${subject}`
    }
}


// Project Manager
// gradClassName, favInstructor
// standUp(channel)
// debugsCode(student, subject)

class PM extends Instructor{
    constructor(props){
        super(props)
        this.gradClassName = props.gradClassName
        this.favInstructor = props.favInstructor
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standup!​​​​​`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//Actual Objects created with classes

const LanDevy = new Instructor({
    name: 'Lan Devy',
    age: '43',
    location: 'Cenver, Dolorado',

    specialty: 'React Boiii',
    favLanguage: 'JAYESS',
    catchPhrase: 'Dogs are superior to cats in every way'
})

const ATQ = new Student({
    name: 'The one and only Alec Thomas Quinn',
    age: '42',
    location: 'Boston, Lexus',

    previousBackground: 'artistic genius turned office drone, labourer, wage slave, artistic genius',
    className: 'Web 12',
    favSubjects: ['UI', 'UX', 'v a p o u r w a v e', 'dead genres', 'Web Apps']
})

const Anna = new PM({
    name: 'Anna Townsend',
    age: 'it is impolite to ask',
    location: 'Im not googling that thats weird',

    specialty: 'closing zoom sessions too early',
    favLanguage: 'Front-end stuff',
    catchPhrase: 'Bee Ayy In Ayy In Ayy Ess',

    gradClassName: 'Web 20',
    favInstructor: 'Lan Devy'
})

// Instructor tests
// demo(subject)
// grade(student, subject)

console.log(LanDevy.name)
console.log(LanDevy.specialty)
console.log(LanDevy.demo('Classes in JavaScript'))
console.log(LanDevy.grade(ATQ, 'ALL OF IT'))

// Student tests
// listsSubjects() <-- still broke
// PRAssignment(subject)
// sprintChallenge(subject)

console.log(ATQ.name)
console.log(ATQ.location)
console.log(ATQ.PRAssignments('JavaScript IV'))
console.log(ATQ.sprintChallenge('JavaScript IV'))

// Project Manager tests
// standUp(channel)
// debugsCode(student, subject)

console.log(Anna.name)
console.log(Anna.specialty)
console.log(Anna.standUp("Web21_Anna"))
console.log(Anna.debugsCode(ATQ, "NO SUBJECT because Alec's code is perfect code with no absolutely no flaws"))
