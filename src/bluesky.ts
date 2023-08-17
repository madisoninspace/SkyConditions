import bsky from '@atproto/api';
import chalk from 'chalk';
import { formatText } from './format.js';
import { Report } from './models/report.js';

/**
 * Bluesky class for creating a new bsky agent, logging in, and posting.
 */
export class Bluesky {

    /**
     * Creates a new bsky agent.
     * @returns A new bsky agent.
     */
    public static create(): bsky.BskyAgent {
        return new bsky.BskyAgent({
            service: 'https://bsky.social'
        });
    }

    /**
     * Logs in to the bsky agent with the given username and password.
     * @param agent - The bsky agent to log in to.
     * @param username - The username to log in with.
     * @param password - The password to log in with.
     * @returns A promise that resolves when the login is successful.
     */
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

    /**
     * Posts the given text to the bsky agent.
     * @param agent - The bsky agent to post to.
     * @param text - The text to post.
     * @returns A promise that resolves when the post is successful.
     */
    public static async post(agent: bsky.BskyAgent, report: Report): Promise<void> {
        await agent.post({
            text: formatText(report)
        }).then(() => {
            console.log(chalk.green('Post successful.'));
        }).catch((error) => {
            console.log(chalk.red(`Error: ${error}`));
            process.exit(1);
        });
    }
}