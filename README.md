## Install React App with Typescript

Create a react app using typescript.

```
npx create-react-app my-app --template typescript
```
## Config Typescript

Add to tsconfig.json to avoid having relative paths and use
absolute paths

```
"baseUrl": "src",
```
## Install Prettier 

npm install --save-dev --save-exact prettier


Create .prettier.json
```
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "printWidth": 80
}
```
Create .prettierignore

```
# Ignore artifacts:
build
coverage

# Ignore all HTML files:
*.html
```

## Install EsLint

npm install eslint --save-dev

npx eslint --init

```
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · prompt
✔ What format do you want your config file to be in? · JavaScript
✔ What style of indentation do you use? · 4
✔ What quotes do you use for strings? · double
✔ What line endings do you use? · unix
✔ Do you require semicolons? · Yes
```
npm install eslint-plugin-prettier

npm install eslint-plugin-import --save-dev

CMD + shift + P => Preferences Open Settings

Add Globals to .eslintrc.js to be able to use JSX syntax
```

  globals: {
    JSX: "readonly",
    React: "readonly",
  },
  ```
Update the plugins we just installed
```
plugins: ["import", "react", "prettier", "@typescript-eslint"],
```

```
{
    "editor.minimap.enabled": false,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "explorer.confirmDragAndDrop": false,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "editor.rulers": [
        80
    ],
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

## Prepare to add Github Actions

Add to package.json, so that we can run the linter and typescript check with
github actions.

```
    "eslint": "eslint",
    "tsc" : "tsc"
```
Now with Github Actions installed we can make sure that we run checks on the 
code we are committing when we make a mistake if we view the commit we can see 
the error popout with a UI similar to this:
![image](https://user-images.githubusercontent.com/4765784/119687623-3693db80-bdfc-11eb-813a-8684f896c380.png)
