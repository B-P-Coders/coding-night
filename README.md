# coding-night : education app, topic 2
# name : School4U
# This app was made to help students manage their time in efficient way saving their time. Main functionalities include:
# calculator, notebook, lesson plan and useful formulas. The app has five themes which user can freely chose from.
# School4U also has it's own logo. Changing choosing functionalities is handled by sidebar and some cards.
#
# how to build the app : using command 'npm run build-packager'
# 
# The code of the app contains: 
#  - MIT license with Copyright (c) 2021 B&P Coders
#  - .gitignore file where each line contains a pattern for files/directories to ignore
#  - package.json and package-lock.json which describes the exact tree that was generated,
#  - .editorconfig configurating and enforcing formatting and code style conventions
#  - main.js with window configuration
#  - node_modules folder, where node modules are located:
#  - icons folder 
#  - src folder where most sorces for the app can be found, this folder contains:
#        - build folder which is responsible for the proper launch of the application on Electron,
#        there are located following files: robots.txt, manifest.json, app and electron logos,  
#        asset-manifest.json and index.html with static folder containing static css and JavaScript
#        - public folder where are located:
#             - School4U logos
#             - robots.txt
#             - index.html with links to other files
#             - manifest.json
#             - themes folder with 5 .css files defining primary and secondary fonts and colors
#        - src folder which incudes:
#             - setupTests.js which imports testing js library
#             - reportWebVitals.js being a set of metrics that aim to capture the user experience of th app
#             - index.js rendering the app  in an element with id root
#             - App.jsx importing all React components to return an app
#             - images folder with svg and png graphics used in the program
#             - styles folder where are located 14 css stylesheets, each one for styling one React component 
#             - pages folder where every component provides diffrent page, including:
#                    - Index.jsx providing the main page of the app
#                    - Timetable.jsx giving user a place for lesson plan
#                    - Notes.jsx creating a place where user can make notes
#                    - Math.jsx which makes a page where user can choose from using a calculator or seeing formulas
#                    - Calculator.jsx which provides a functional calculator on the page
#                    - Formulas.jsx being a reminder of important formulas in math, physics and chemistry
#                    - BinCalculator.jsx which changes decimal numbers into hexadecimal, binary and octal
#             - components folder where are located React components being used in the app, it contains:
#                    - Card.jsx being a template of the card model used in the app
#                    - Header.jsx
#                    - Layout.jsx creating a layout for the app
#                    - Sidebar.jsx creating the slidebar on the left on app's screen
#                    - ToggleSwitch.jsx which provides switching the theme
#
#
# used technologies: HTML, CSS, Javascript, React, Node.js, and Electron
# made with ❤ by B&P Coders
