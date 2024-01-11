interface MajorCredits {
  credits: number;
  brand: "major";
}
  
interface MinorCredits {
  credits: number;
  brand: "minor";
}

fucntion sumMajorCredits(subject1:MajorCredits , subject2: MajorCredits) {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return subject1.credits + subject2.credits;
}
