// Imports
import chalk from 'chalk';
import dotenv from 'dotenv';
import { Bluesky } from './bluesky.js';
import { formatText } from './format.js';
import { ObservationTime } from './observationtime.js';
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

// Get weather report
const report = await Weather.forStation(process.env.ICAO ?? '');

// Check observation time
if (ObservationTime.check(report.obsTime ?? 0) && dryRun === 'false') {
    console.log(chalk.yellow('No new weather report available.'));
    process.exit(0);
}

// Format weather report
const formattedReport = formatText(report);

// Post to BlueSky, or print to console if dry run is enabled
if (dryRun === 'false') {
    // post to BlueSky
} else {
    console.log(formattedReport);
}

// Save observation time
ObservationTime.save(report.obsTime ?? 0);

// Exit
console.log(chalk.green('Done.'));
process.exit(0);