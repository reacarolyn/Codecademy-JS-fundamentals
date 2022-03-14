// 1. INTRODUCTION
function greetWorld() {
  return 'Hello, World!'
};

//The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
// 2. CAN I VOTE?
const canIVote = age => {
  if (age >= 18) {
  return 'true';
  }
  else if (age < 18) {
  return 'false';
  }
};

console.log(canIVote(5));

//Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.
// 3. AGREE or DISAGREE
const agreeOrDisagree = (first,second) => {
  if (first === second) {
  return 'You agree!';
  }
  else if (first !== second);{
  return 'You disagree!';
  }
}
console.log(agreeOrDisagree("yep", "yep")) 

//4. LIFE PHASE
const lifePhase = age => {
  if (age >=0 && age <=3) {
    return 'baby';
  } else if (age >=4 && age <=12) {
  return 'child';
  } else if (age >=13 && age <=19) {
  return 'teen';
  } else if (age >=20 && age <=64) {
  return 'adult';
  } else if (age >=65 && age <=140) {
  return 'senior citizen';
  } else return 'This is not a valid age';
}

console.log(lifePhase(5)) 

// 5. FINAL GRADE
const finalGrade = (first, second, third) => {
  let average = ((first + second + third)/3);
  if ((first < 0 || first > 100) || (second < 0 || second > 100) || (third < 0 || third > 100)) {  return "You have entered an invalid grade.";
  } else if (average >= 0 && average <= 59) {
    return 'F';
  } else if (average >= 60 && average <= 69) {
    return 'D';
  } else if (average >= 70 && average <= 79) {
    return 'C';
  } else if (average >= 80 && average <= 89) {
    return 'B';
  } else if (average >= 90 && average <= 100) {
    return 'A';
  } 
};

console.log (finalGrade(99,99,99)) // Should print 'A'
console.log (finalGrade(110,99,99)) 

// 6. REPORTING FOR DUTY
// Write your function here:
const reportingForDuty = (rank, lastName) => {
  return (`${rank} ${lastName} reporting for duty!`)
};

console.log(reportingForDuty('Private', 'Fido')) 
// Should return 'Private Fido reporting for duty!'


// 7. FIX THE BROKEN CODE
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random()*6)+ 1;
    let die2 = Math.floor(Math.random()*6)+ 1;
    return die1 + die2;
};
console.log(rollTheDice());

// 8. calculateWeight()
// object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! 
const calculateWeight = (earthWeight, planet) => {
switch (planet) {
    case "Mercury": return earthWeight * 0.378
    case "Venus": return earthWeight * 0.907
    case "Mars": return earthWeight * 0.377
    case "Jupiter": return earthWeight * 2.36
    case "Saturn": return eearthWeight * 0.916
    default: return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn."
  }
};

// Uncomment the line below when you're ready to try out your function
 console.log(calculateWeight(100, 'Jupiter')) 
 // Should print 236
 console.log(calculateWeight(10, 'Pluto'))
// Should print "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn."

// 9. truthyOrFalsy()
const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}

// 10. numImaginaryFriends()
//A person’s number of imaginary friends are always 33% of their total friends.

const numImaginaryFriends = (totalFriends) => {
  return Math.round(totalFriends * .33)
}
numImaginaryFriends (45);

//11. sillySentence()
const sillySentence = (adjective,verb,noun) => {
return (`I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`)
};
console.log(sillySentence("happy","love","projects"));

// 12. howOld()
 
const howOld = (age, year) => {
    let currentDay = new Date();
    let currentYear = currentDay.getFullYear();

    const yearDifference = year - currentYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}
howOld (40, 1970)

//13. Fix the broken code (round 2)!
const whatRelation = (percentSharedDNA) => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    } 
    else if (percentSharedDNA >= 35 && percentSharedDNA <=99) {
        return 'You are likely parent and child or full siblings.';
    }
    else if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
       return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    }
    else if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.';
    }
    else if (percentSharedDNA >= 1 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.';
    }
    else if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins.';
    } else return 'You are likely not related.';
};

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'


//14. tipCalculator() 
// Write your function here:
const tipCalculator = (quality, totalCost) => {
//let tip = totalCost * 0.20 
  if (quality === 'bad') {
  return (totalCost * 0.05);
} else if (quality === 'ok') {
  return (totalCost * 0.15); 
} else if (quality === 'good') {
  return (totalCost * 0.2);
} else if (quality === 'excellent') {
  return (totalCost * 0.3);
} else return (totalCost * 0.18);
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator( 'good', 100)) //should return 20

// 15. toEmoticon()
const toEmoticon = equivalent => {
    switch (equivalent) {
        case 'shrug':
            return '|_{"}_|'
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    };