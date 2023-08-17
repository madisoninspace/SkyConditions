// Imports
import chalk from 'chalk';
import dotenv from 'dotenv';
import { Bluesky } from './bluesky.js';
import { formatText } from './format.js';
import { Title } from './title.js';
import { Weather } from './weather.js';

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
const dryRun = process.env.DRY_RUN ?? 'false';

// Setup bluesky agent
if (dryRun === 'false') {
    const agent = Bluesky.create();
    Bluesky.login(agent, process.env.BSKY_USERNAME ?? '', process.env.BSKY_PASSWORD ?? '');
} else {
    console.log(chalk.yellow('Dry run mode enabled. Login to BlueSky will be skipped.'));
}

// METAR report for provided ICAO ID
Weather.forStation(process.env.ICAO ?? '').then((result) => {
    if (dryRun === 'true') {
        console.log(formatText(result));
    } else {
        // posting will be done here
    }
    process.exit(0);
}).catch((error) => {
    console.log(chalk.red(`Error: ${error}`));
    process.exit(1);
});