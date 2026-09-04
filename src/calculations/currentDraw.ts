export function calculateCurrentDraw(
    power: number,
    voltage: number,
    efficiency: number
): number {
    return power / (voltage * efficiency);
}