# Nodejs Statics Redirects
Application redirects from url to static page or link.

## Configuration
Set you array string config in environment `(process.env.DATA)`.  *Coming soon, load config from json file.*

### **Syntax**
- Key = {link} or {link}/{param}
- Value = {type}:{destination}

### **Examples**
- **Redirect to another url**
- Key = site.com.br
- Value = url:site2.com.br
- **Load static site from url**
- Key = site.com.br
- Value = file:folderOfSite
- **Redirect from param to another url**
- Key = site.com.br/paramName
- Value = url:site2.com.br

### **Definition**
- {link}: url without protocol
- {param}: first route after url (ex: 'url/paramMap')
- {type}: enum 'url' or 'file'
- {destination}: url without protocol or folder in statics folder on server

## Development local
Run `yarn start` or `npm run start` for a dev app. Navigate to `http://localhost:3000/`.

## Running unit tests
Run `yarn test` or `npm run test` to execute the unit tests via Jest

## Building and master feature control
The build artifacts will be stored in the `dist/` directory.

### Development
Run `yarn build` or `npm run build` to build the project.

### Production
Run `yarn build:prod` or `npm run build:prod` to build the project.

## About
- **Author**: Jose Silva
- **Dep**: NodeJs(>=10.x.x)
