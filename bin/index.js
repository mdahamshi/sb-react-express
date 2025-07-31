#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execa } from 'execa';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appName = process.argv[2];

if (!appName) {
  console.error(chalk.red('❌ Please provide a project name.'));
  console.log(`Usage: ${chalk.green('npx create-sb-react-express')} my-app`);
  process.exit(1);
}

const dest = path.resolve(process.cwd(), appName);
const template = path.join(__dirname, '../template');

console.log(chalk.blue('🚀 Creating project at:'), chalk.green(dest));

await fs.copy(template, dest);

console.log(chalk.yellow('📦 Installing dependencies...'));
await execa('npm', ['install'], { cwd: dest, stdio: 'inherit' });

console.log(chalk.green('\n✅ Done!'));
console.log(`
To get started:

  cd ${appName}
  npm run dev

🔥 Your fullstack app with React + Express + Tailwind is ready!
`);

