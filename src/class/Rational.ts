/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(n: number, d: number) {
        if (d === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        this.numerator = n;
        this.denominator = d;
    }

    public getNumerator(): number {
        return this.numerator;
    }

    public getDenominator(): number {
        return this.denominator;
    }

    public normalize(): Rational {
        const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    public isWhole(): boolean {
        return this.denominator === 1 || this.numerator % this.denominator === 0;
    }

    public isDecimal(): boolean {
        return !this.isWhole();
    }

    // 這裡保留原有的 equals 方法
    public equals(n: number, d: number): boolean {
        const normalizedThis = this.normalize();
        const normalizedOther = new Rational(n, d).normalize();
        return normalizedThis.getNumerator() === normalizedOther.getNumerator() &&
               normalizedThis.getDenominator() === normalizedOther.getDenominator();
    }

    // 為了避免重複，將 Rational 比較邏輯放在 equals 方法內部
    public equals(r: Rational): boolean {
        return this.equals(r.getNumerator(), r.getDenominator());
    }

    public toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    public static parseRational(charArrayNumerator: string[], charArrayDenominator: string[]): Rational {
        const numerator = parseInt(charArrayNumerator.join(''), 10);
        const denominator = parseInt(charArrayDenominator.join(''), 10);
        return new Rational(numerator, denominator);
    }

    public static parseRational(str: string): Rational {
        const parts = str.split('/');
        if (parts.length !== 2) {
            throw new Error("Invalid rational string format.");
        }
        const numerator = parseInt(parts[0], 10);
        const denominator = parseInt(parts[1], 10);
        return new Rational(numerator, denominator);
    }

    private greatestCommonDivisor(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }
}
