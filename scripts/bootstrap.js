const os = require('os');
const path = require('path');
const childProcess = require('child_process');

const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const options = {
    cwd: process.cwd(),
    encoding: 'utf-8',
    env: process.env,
    stdio: 'inherit',
};

if (os.type() === 'Windows_NT') {
    options.shell = true;
}

let result;

if (process.cwd() !== root || args.length) {
    /*
     * We're not in the root of the project, or additional arguments were passed
     * In this case, forward the command to `yarn`
     */
    result = childProcess.spawnSync('yarn', args, options);
} else {
    // If `yarn` is run without arguments, perform bootstrap
    result = childProcess.spawnSync('yarn', ['bootstrap'], options);
}

process.exitCode = result.status;
