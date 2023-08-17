import chalk from 'chalk';
import fs from 'fs/promises';

export class ObservationTime {
    /**
     * Checks if the given observation time is newer than the observation time in the observation time file.
     * @param obsTime The observation time to check.
     * @returns True if the given observation time is newer than the observation time in the observation time file, false otherwise.
     * @async
     * @static
     */
    public static async check(obsTime: number): Promise<boolean> {
        let savedObsTime = 0;
        await fs.readFile('out/obsTime.txt', 'utf-8').then((data) => {
            savedObsTime = parseInt(data);
        }).catch((error) => {
            console.log(chalk.red(`Error: ${error}`));
            process.exit(1);
        });

        return obsTime <= savedObsTime;
    }

    /**
     * Checks if the file 'out/obsTime.txt' exists. If it doesn't exist, creates the file with a default value of '0'.
     * @returns {Promise<void>} A Promise that resolves when the file check is complete.
     */
    public static async fileCheck(): Promise<void> {
        await fs.access('out/obsTime.txt').catch(() => {
            // file does not exist, create it
            fs.writeFile('out/obsTime.txt', '0').then(() => {
                console.log(chalk.green('Observation time file created.'));
            }).catch((error) => {
                console.log(chalk.red(`Error: ${error}`));
                process.exit(1);
            });
        });
    }

    /**
     * Saves the given observation time to the observation time file.
     * @param obsTime The observation time to save.
     * @returns A promise that resolves when the observation time is saved.
     * @async
     * @static
     */
    public static async save(obsTime: number): Promise<void> {
        await fs.writeFile('out/obsTime.txt', obsTime.toString()).then(() => {
            console.log(chalk.green('Observation time saved.'));
        }).catch((error) => {
            console.log(chalk.red(`Error: ${error}`));
            process.exit(1);
        });
    }
}