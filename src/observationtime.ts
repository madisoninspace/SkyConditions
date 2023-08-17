import chalk from 'chalk';
import fs from 'fs';

export class ObservationTime {
    /**
     * Save the observation time to a file in the out directory.
     * @param obsTime - The observation time in Unix timestamp format.
     */
    public static save(obsTime: number) {
        fs.writeFile('./out/obsTime.txt', obsTime.toString(), (error) => {
            if (error) {
                console.log(chalk.red(`Error: ${error}`));
                process.exit(1);
            } else {
                console.log(chalk.green('Observation time saved.'));
            }
        });
    }

    /**
     * Load the observation time from a file in the out directory and check if it matches the provided observation time.
     * @param obsTime - The observation time in Unix timestamp format.
     * @returns True if the observation time matches, false otherwise.
     */
    public static check(obsTime: number): boolean {
        let result = false;
        const obsTimeFile = fs.readFileSync('./out/obsTime.txt', 'utf8');
        if (obsTimeFile === obsTime.toString()) {
            result = true;
        }
        return result;
    }
}