# Challenge for Goxo

## Challenge description

Web app with a login form which data must be accessible for the user

## Solution

### Homepage

The homepage presents available dishes. Data is fetched from a remote Mongo database. Dish images are hosted in Cloudinary.

If the user is logged in, a favorite icon will be displayed for every dish. User can click on this icon to add or remove dish from favorites.

The user is saved in a React Context.

### Sign up form

An email, a name and a picture (optional) is requested, as well as a password, which must be introduced twice.

### Sign in form

Only the email and password are required.

## Profile page

Here the user can access their data from the sign up form (except for the password)

## Install

Clone this repo and open a terminal:

```bash
cd client
npm install
cd ../server
npm install
```

## Usage

Open two terminals (one for the server side and another one for the client side)

- Server

```bash
cd server
npm start
```

- Client

```bash
cd client
npm start
```

## Author

Bárbara Díaz

- Github: [@barbarad91](https://github.com/barbarad91)
- LinkedIn: [barbaradiazduran](https://www.linkedin.com/in/barbaradiazduran/)
- Twitter: [@barbarad91](https://twitter.com/barbarad91)
