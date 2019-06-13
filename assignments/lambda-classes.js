// CODE here for your Lambda Classes

//Person, Instructor, Student, PM

// Person
// name, age, location
// speak()

class Person{
    constructor(propsPerson){
        this.name = propsPerson.name
        this.age = propsPerson.age
        this.location = propsPerson.location
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
    constructor(propsInstructor){
        super(propsPerson)
        this.specialty = propsInstructor.specialty
        this.favLanguage = propsInstructor.favLanguage
        this.catchPhrase = propsInstructor.catchPhrase
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
// PRAssignment()
// sprintChallenge()

class Student extends Person{
    constructor(propsPerson){
        super(propsStudent)
        this.previousBackground = propsStudent.previousBackground
        this.className = propsStudent.className
        this.favSubjects = propsStudent.favSubjects
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
// standUp()
// debugsCode()

class PM extends Instructor{
    constructor(propsPM){
        super(propsInstructor)
        this.gradClassName = propsPM.gradClassName
        this.favInstructor = propsPM.favInstructor
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standup!​​​​​`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

