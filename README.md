# Rounder

This is a web application built with Next.js, Tailwind, and TypeScript that allows users to vote for which of two random Pokemon is more round. The user's vote is saved in a Firestore database and two new Pokemon are fetched for the next round of voting.

In addition to voting, the app also includes a page where users can view the voting results for all Pokemon in a table.

## Demo

[Rounder](https://rounder.vercel.app/)

## Prerequisites

- Node.js v12.0 or higher
- A Firebase account with Firestore enabled

## Installation

1. Clone this repository onto your local machine.
2. Install the necessary dependencies by running `npm install` in the root directory.
3. Set up a Firebase project and enable Firestore.
4. Create a `.env.local` file in the root directory with the following variables:

```ts
NEXT_PUBLIC_FIREBASE_API_KEY=<your Firebase API key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your Firebase auth domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your Firebase project ID>

```

5. Run `npm run dev` to start the development server.

## Usage

To vote for a Pokemon, simply click on the image of the Pokemon you think is more round. The results of the vote will be saved to the Firestore database.

To view the voting results, navigate to the "Results" page in the app. The results are displayed in a table, with the Pokemon ordered by the number of votes they've received.

## Credits

This app was built by [your name] using the following technologies:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
