import axios from 'axios';
import chalk from 'chalk';
import { Report, Reports } from './models/report.js';

/**
 * A class for retrieving METAR weather reports.
 */
export class Weather {
    /**
     * Returns the weather report for a given station.
     * @param icaoId - The ICAO ID of the station.
     * @returns A Promise that resolves to a Report object.
     */
    public static async forStation(icaoId: string): Promise<Report> {
        const url = `https://www.aviationweather.gov/cgi-bin/data/metar.php?ids=${icaoId}}&format=json`;
        let reports = {} as Reports;

        await axios({
            method: 'get',
            url: url,
            responseType: 'text'
        }).then((response) => {
            reports = JSON.parse(response.data) as Reports;
        }).catch((error) => {
            console.log(chalk.red(`Error: ${error}`));
        });

        if (reports.length !== 1) {
            console.log(chalk.red(`Error: ${icaoId} is not a valid ICAO ID.`));
            process.exit(1);
        }

        return reports[0];
    }
}