# Nodejs Statics Redirects

Node Web Application simple url shortner, url to static file page or external link.

## Configuration

Set you config in environments `.env files or cloud app env config`.

### **Syntax**

- NSR_URL={url} or {url}/{param} : {destination}
- NSR_FILE={url} or {url}/{param} : {path}

Multi values separate by `comma and space`

### **Definition**

- {url}: url without protocol
- {param}: first route after url (ex: 'url/paramMap')
- {destination}: url without protocol
- {path}: path in 'statics' folder

### **Examples**

- Redirect to another url: `from 'site1.com' to 'site2.com'`
- Redirect from param to another url: `from 'site1.com/test' to 'site3.com'`
- Load static site from url: `from 'site3.com' to path 'folder1'`
- Load static site from url with param: `from 'site1.com/test' to path 'folder2'`

```
NSR_URL=site1.com:site2.com, site1.com/test:site3.com
NSR_FILE=site1.com:folder1, site1.com/test:folder2
```

## Development local

Run `yarn dev` or `npm run dev` for a dev app. Navigate to `http://localhost:3000/`.

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
