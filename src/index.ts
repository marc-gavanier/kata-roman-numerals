type ArabicToRoman = {
  arabic: number;
  roman: string;
};

const arabicRomanConversions: ArabicToRoman[] = [
  {
    arabic: 2000,
    roman: 'MM'
  },
  {
    arabic: 1000,
    roman: 'M'
  },
  {
    arabic: 900,
    roman: 'CM'
  },
  {
    arabic: 500,
    roman: 'D'
  },
  {
    arabic: 400,
    roman: 'CD'
  },
  {
    arabic: 200,
    roman: 'CC'
  },
  {
    arabic: 100,
    roman: 'C'
  },
  {
    arabic: 90,
    roman: 'XC'
  },
  {
    arabic: 50,
    roman: 'L'
  },
  {
    arabic: 40,
    roman: 'XL'
  },
  {
    arabic: 20,
    roman: 'XX'
  },
  {
    arabic: 10,
    roman: 'X'
  },
  {
    arabic: 9,
    roman: 'IX'
  },
  {
    arabic: 5,
    roman: 'V'
  },
  {
    arabic: 4,
    roman: 'IV'
  },
  {
    arabic: 2,
    roman: 'II'
  },
  {
    arabic: 1,
    roman: 'I'
  }
];

const canAppendRomanSymbol = (partialRoman: ArabicToRoman, arabicRomanConversion: ArabicToRoman) =>
  partialRoman.arabic >= arabicRomanConversion.arabic;

const appendRomanSymbol = (partialRoman: ArabicToRoman, arabicRomanConversion: ArabicToRoman): ArabicToRoman => ({
  arabic: partialRoman.arabic - arabicRomanConversion.arabic,
  roman: partialRoman.roman + arabicRomanConversion.roman
});

const toPartialRoman = (partialRoman: ArabicToRoman, arabicRomanConversion: ArabicToRoman): ArabicToRoman =>
  canAppendRomanSymbol(partialRoman, arabicRomanConversion)
    ? appendRomanSymbol(partialRoman, arabicRomanConversion)
    : partialRoman;

export const toRoman = (arabic: number): string => arabicRomanConversions.reduce(toPartialRoman, { arabic, roman: '' }).roman;
