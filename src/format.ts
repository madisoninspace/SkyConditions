import { Conversion } from './conversion.js';
import { Report } from './models/report.js';

export function formatText(report: Report): string {
    const lines = [] as string[];
    const units = process.env.UNITS ?? 'imperial';

    // Post header
    lines.push(`METAR for ${report.icaoId} at ${Conversion.observationTimeToLocal(report.obsTime ?? 0)}\n`);

    // Temperature
    switch (units) {
    case 'imperial':
        lines.push(`Temperature: ${Conversion.celsiusToFahrenheit(report.temp ?? 0)}°F`);
        break;
    case 'metric':
        lines.push(`Temperature: ${report.temp}°C`);
        break;
    }

    // Dew point
    switch (units) {
    case 'imperial':
        lines.push(`Dew point: ${Conversion.celsiusToFahrenheit(report.dewp ?? 0)}°F`);
        break;
    case 'metric':
        lines.push(`Dew point: ${report.dewp}°C`);
        break;
    }

    // Wind
    lines.push(`Wind: ${report.wdir ?? 0}° at ${report.wspd ?? 0} kts (${Conversion.knotsToMph(report.wspd ?? 0)} mph | ${Conversion.knotsToKph(report.wspd ?? 0)} kph)`);

    // Visibility
    lines.push(`Visibility: ${report.visib ?? 0} sm`);

    // Altimeter
    switch (units) {
    case 'imperial':
        lines.push(`Altimeter: ${Conversion.altimeterToInHg(report.altim ?? 0)} inHg`);
        break;
    case 'metric':
        lines.push(`Altimeter: ${report.altim} hPa`);
        break;
    }

    // Clouds
    if (report.clouds === undefined || report.clouds.length === 0) {
        lines.push('Sky Conditions:\nMissing');
    } else {
        // Check for CLR or SKC (clear skies) in the first cloud layer
        if (report.clouds[0].cover === 'CLR' || report.clouds[0].cover === 'SKC') {
            lines.push('Sky Conditions:\nClear');
        } else {
            lines.push('Sky Conditions:');
            for (const cloud of report.clouds) {
                switch (units) {
                case 'imperial':
                    lines.push(`${cloud.cover} at ${cloud.base ?? 0} ft`);
                    break;
                case 'metric':
                    lines.push(`${cloud.cover} at ${Conversion.feetToMeters(cloud.base ?? 0)} m`);
                    break;
                }
            }
        }
    }

    // Return the formatted text
    return lines.join('\n');
}