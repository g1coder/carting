// eslint-disable-next-line
const path = require("path");

const buildEslintCommand = (filenames) =>
    `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
    "*.{ts,tsx}": () => "tsc --noEmit --skipLibCheck",
    "*.{js,jsx,ts,tsx}": buildEslintCommand,
    "*.{js,jsx,ts,tsx,md,json,css,scss}": "prettier --write",
    "*.{css,scss,sass}": "stylelint",
};
