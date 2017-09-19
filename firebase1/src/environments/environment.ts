// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCaYZX_TnYAAomH81rjq5xMGuW1AnOyGzY",
    authDomain: "ng-bcbc.firebaseapp.com",
    databaseURL: "https://ng-bcbc.firebaseio.com",
    projectId: "ng-bcbc",
    storageBucket: "ng-bcbc.appspot.com",
    messagingSenderId: "373971470092"
  }
};
