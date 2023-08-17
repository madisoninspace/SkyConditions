/**
 * A class containing static methods for unit conversions.
 */
export class Conversion {
    /**
     * Converts temperature in Celsius to Fahrenheit.
     * @param celsius The temperature in Celsius.
     * @returns The temperature in Fahrenheit.
     */
    public static celsiusToFahrenheit(celsius: number): number {
        return (celsius * 9 / 5) + 32;
    }

    /**
     * Converts speed in knots to miles per hour.
     * @param knots The speed in knots.
     * @returns The speed in miles per hour.
     */
    public static knotsToMph(knots: number): number {
        return knots * 1.15078;
    }

    /**
     * Converts speed in knots to kilometers per hour.
     * @param knots The speed in knots.
     * @returns The speed in kilometers per hour.
     */
    public static knotsToKph(knots: number): number {
        return knots * 1.852;
    }

    /**
     * Converts an observation time in Unix timestamp format to a local date and time string.
     * @param obsTime The observation time in Unix timestamp format.
     * @returns The local date and time string.
     */
    public static observationTimeToLocal(obsTime: number): string {
        const date = new Date(obsTime * 1000);
        return date.toLocaleString();
    }
}