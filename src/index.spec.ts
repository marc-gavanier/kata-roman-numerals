import { toRoman } from './index';

describe('Roman Numerals', (): void => {
  it('should convert 0 to nothing', (): void => {
    const arabic: number = 0;
    const expectedRoman: string = '';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 1 to I', (): void => {
    const arabic: number = 1;
    const expectedRoman: string = 'I';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 3 to III', (): void => {
    const arabic: number = 3;
    const expectedRoman: string = 'III';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 5 to V', (): void => {
    const arabic: number = 5;
    const expectedRoman: string = 'V';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 4 to IV', (): void => {
    const arabic: number = 4;
    const expectedRoman: string = 'IV';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 6 to VI', (): void => {
    const arabic: number = 6;
    const expectedRoman: string = 'VI';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 8 to VIII', (): void => {
    const arabic: number = 8;
    const expectedRoman: string = 'VIII';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 9 to IX', (): void => {
    const arabic: number = 9;
    const expectedRoman: string = 'IX';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 10 to X', (): void => {
    const arabic: number = 10;
    const expectedRoman: string = 'X';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 14 to XIV', (): void => {
    const arabic: number = 14;
    const expectedRoman: string = 'XIV';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 20 to XX', (): void => {
    const arabic: number = 20;
    const expectedRoman: string = 'XX';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 30 to XXX', (): void => {
    const arabic: number = 30;
    const expectedRoman: string = 'XXX';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 39 to XXXIX', (): void => {
    const arabic: number = 39;
    const expectedRoman: string = 'XXXIX';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 40 to XL', (): void => {
    const arabic: number = 40;
    const expectedRoman: string = 'XL';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 50 to L', (): void => {
    const arabic: number = 50;
    const expectedRoman: string = 'L';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 90 to XC', (): void => {
    const arabic: number = 90;
    const expectedRoman: string = 'XC';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 100 to C', (): void => {
    const arabic: number = 100;
    const expectedRoman: string = 'C';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 200 to CC', (): void => {
    const arabic: number = 200;
    const expectedRoman: string = 'CC';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 300 to CCC', (): void => {
    const arabic: number = 300;
    const expectedRoman: string = 'CCC';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 400 to CCC', (): void => {
    const arabic: number = 400;
    const expectedRoman: string = 'CD';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 500 to D', (): void => {
    const arabic: number = 500;
    const expectedRoman: string = 'D';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 900 to CM', (): void => {
    const arabic: number = 900;
    const expectedRoman: string = 'CM';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 1000 to M', (): void => {
    const arabic: number = 1000;
    const expectedRoman: string = 'M';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 2000 to MM', (): void => {
    const arabic: number = 2000;
    const expectedRoman: string = 'MM';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });

  it('should convert 3000 to MMM', (): void => {
    const arabic: number = 3000;
    const expectedRoman: string = 'MMM';

    const roman: string = toRoman(arabic);

    expect(roman).toBe(expectedRoman);
  });
});
