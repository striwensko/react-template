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