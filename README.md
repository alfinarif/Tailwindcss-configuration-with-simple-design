# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To configure Tailwindcss follow those steps


Step 1: npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

Step 2: npm install @craco/craco

Step 3: create ( craco.config.js ) file on root directory then Copy and Past below code 
module.exports={
style:{
postcss:{
plugins:[
                require('tailwindcss'),
                require('autoprefixer')
            ],
        },
    },
}

Step 4: then run ( npx tailwindcss init ) then replace your code( tailwindcss.config.css ) with below code
module.exports= {
purge: [
'./src/**/*.html',
'./src/**/*.js',
  ],
darkMode: false, // or 'media' or 'class'
theme: {
extend: {},
  },
variants: {
extend: {},
  },
plugins: [],
}

Step 5: then go to your ( index.css ) file then add  this css on the top or bottom
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

Step 6: go to ( package.json ) and on this section replace to my code
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  
 ## Replace To This Code
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },

## After all your file is ready to use tailwind css



