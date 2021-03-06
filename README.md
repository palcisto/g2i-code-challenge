# Patrick's G2i Coding Challenge

## Setup

1. Run `yarn install`
2. Run `yarn start`
3. Have fun!

## The Stack

My goal was to showcase how I would scaffold out a project that I expect to grow considerably while minimizing the dependencies installed to keep it as simple as possible until it requires more complex tooling. With that said, you may notice in certain areas of the project that I have over-engineered some solutions, such as the file structure, management of global state, or even certain aspects of the styling system. I am a firm believer in keeping things as simple as possible for as long as possible until inherit complexity is a neccessity for solving a challenging problem. The three R's -- Reduce. Reuse. Refactor. -- can go a long way towards keeping an application's codebase as DRY as possible.

### State Management

Primarily leveraging `useState` for local state where appropriate, but in some cases using context and hooks for lifting & managing certain pieces of global state where I could have easily just used state and passed it down as props to each page for how simple this project is. The purpose of this was to show how I would manage global state without reaching for something like Redux or MobX prematurely.

### Routing

Reach Router provides a simple API that is easy to use yet offers more advanced features for solving more complex routing problems as your application grows in complexity, while making accessibility a top priority. Additionally, it's API is pretty similar to the much anticipated future release of React Router 5.x, which combines the best features of React Router and Reach Router.

### Styling / Design System

Styled Components combined with the Atomic Design methodology allows teams to create flexible and scalable design systems that can provide the consistency and effeciency that teams need as a project grows.

### `<head>` Management

React Helmet is used to manage all things related to the app's `<head>`, ie. setting the title for each page, including external dependencies like google fonts, etc. 


## Project Structure

The project is organized in a way to be easy and intuitive to navigate. Making use of Atomic Design's methodology, all generally shared components are organized into atoms, molecules, organisms, and templates within the `components/` directory. Atomic pages are placed in a `pages/` directory at the root of `src/` to make it easier to find the routes/views of the application and also inherently giving them a higher order in the hierarchy.

The pages directory is then organized by page (domain/feature). Page (domain) specific components will live within their respective page's directory along with their respective styles and tests. This enables developers to more easily find all the domain specific files for a particular page.
If Storybook was used in this project, then related stories would live within their respective component's folder.


```
src/
  |- components/
     |- atoms/
        |- IconButton/
           |- styles.js
           |- index.js
           |- index.test.js
           |- IconButton.stories.js
        |- index.js
     |- molecules/
     |- organisms/
     |- templates/
  |- images/
  |- lib/
  |- pages/
     |- Home/
        |- index.js
        |- index.test.js
        |- <Home Page Specific Components>.js
```
### Services, APIs, and GraphQL

#### Services / APIs

If the project required communication with a collection of REST APIs and services, we could place all related code into endpoint/model specific files within a `services/` directory at the root of `src/`. Each client-side service that communicates with an API endpoint that implements CRUD, could be created using a CRUD builder factory function, allowing us to keep all of that similar code as DRY as possible.

#### GraphQL

Some teams have adopted GraphQL and if it were to be used in this project, we would create a `graphql/` directory within the root of the `src/` directory in which to place all of our shared queries and mutations, as well as any client-side graphql configuration for libraries like Apollo Client and Relay.

### Utilities, Helpers, and Constants

Any miscellaneous utilities, helpers and constants live in `src/lib/`. Additionally, I chose to place all custom hooks and context related code in this directory as well. There was no particular reason for location and naming outside of just keeping all that miscellaneous stuff together in one place.

## Other Concerns

There are many areas that are out of scope of this small project but still may be important factors depending on the concerns, opinions, and preferences of the team and the requirements set forth by the project and/or the organization and it's customers.

### i18n & l10n

Internationalization and localization are both out of the scope of this project and can be solved for in many different ways. I would probably reach for react-i18next.

### Linting & Code Formatting

I use Eslint in all my projects and fortunately it's already setup in Create React App, otherwise I would have gone ahead and set that up. I have also been trying Prettier out for the last 6 months or so and chose to use it here since I already have the VS Code extension installed. I feel Prettier is a valuable time-saving tool and at the very least reduces disagreements in pull requests over code formatting.
