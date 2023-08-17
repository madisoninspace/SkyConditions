import bsky from '@atproto/api';
import chalk from 'chalk';
//import { Weather } from './weather.js';

export class Bluesky {
    public static create(): bsky.BskyAgent {
        return new bsky.BskyAgent({
            service: 'https://bsky.social'
        });
    }

    public static async login(agent: bsky.BskyAgent, username: string, password: string): Promise<void> {
        await agent.login({
            identifier: username,
            password: password
        }).then(() => {
            console.log(chalk.green('BlueSky login successful.'));
        }).catch((error) => {
            console.log(chalk.red(`Error: ${error}`));
            process.exit(1);
        });
    }
}