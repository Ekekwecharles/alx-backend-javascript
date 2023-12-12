// Brand convention & Nominal typing

interface MajorCredits {
  credits: number;
  readonly brand: unique symbol; // Brand property for unique identification
}

interface MinorCredits {
  credits: number;
  readonly brand: unique symbol; // Brand property for unique identification
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}