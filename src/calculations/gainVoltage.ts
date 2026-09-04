export function calculateGainVoltage(
    power: number,
    impedance: number
): number {
    return Math.sqrt(power * impedance);
}