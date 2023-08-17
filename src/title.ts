import chalk from 'chalk';
import { version } from './version.js';

/**
 * Represents the title of the SkyConditions application.
 */
export class Title {
    /**
     * Prints the title of the application to the console.
     */
    public static print(): void {
        console.log(chalk.blue('SkyConditions ' + version));
        console.log(chalk.blue('Created by Hannah Wass <github.com/hannahwxyz>\n'));
    }
}