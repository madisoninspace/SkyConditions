// Imports
import chalk from 'chalk';
import dotenv from 'dotenv';
import { Title } from './title.js';


// Print title
Title.print();

// Load environment variables
dotenv.config();
const requiredEnvVars = ['ICAO', 'BSKY_USERNAME', 'BSKY_PASSWORD'];
for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.log(chalk.red(`Error: ${envVar} environment variable is not set.`));
        process.exit(1);
    }
}
