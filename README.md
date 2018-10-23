# ToDo Web UI

A React application to manage Todo items, made with `create-react-app`, to showcase patterns about:

- Data fetching
- API dependency injection
- Form Handling
- Routing
- Testing

## Development

To connect the application to the REST API:

```
npm start
```

To connect the application to the "mock" API:

```
REACT_APP_API=MOCK npm start
```

## Filesystem overview

- api: objects that interact with the external world, providing methods to fetch and update data (they are not React components).
- components: stateless components used for presentation
- containers: stateful components used to provide data: they get an `api` object as a props, fetch data, and provide data to their child components
- i18n: translated strings used to handle internationalization.
- pages: top-level page components, associated to routes
- templates: page layout components, used to generate pages. For example: there can be one template for all pages used by logged-in users, an other one for anonymous users

## Dependencies injection

`<App>` component (in `src/App.js` file) is the top level component.

It accepts a `dependencies` props that is used to pass dependencies we want to adjust depending on the context (web application mode VS. test mode, development mode VS production mode...)

A dependency can be an API or something related to the browser environment (local storage, cookies...)

Rather than importing directly API objects in our components, we inject them at the top level.

There are 2 main entry points where we call `<App>`, passing the dependencies:

- in the browser: `src/index.js`
- in test mode: `src/tests/utils/render-app.js`
