# Photos-viewer

The app displays photos from links saved in a csv. The app requires user registration and login. Once logged in, the user can filter the photos based on width and height. User can also request the photos in grayscale.

<image src="./images/snake_snapshot.bmp">

## Summary
I wrote this web app in response to an assignment I received as part of a hiring process.
This project covers a lot of different aspects of a Full Stack developer's responsibilites. 
It includes both Back End and Front End. Running a server and implementing http requests. CSV parsing, basic user registration and login. Two main APIs: Users basic authentication and a photos API, returning all or filtered by param. The API supports pagination as well.
In the front end, the user must register and login before they can see the photos. The user can decide what dimension photos they'd like to see and how many photos to display per page.

##  Installation Instructions

1. Download Repository
2. In the 'server' folder, run 'npm install' then 'nodemon src\app'
3. In the 'client' folder run 'yarn install' then 'yarn serve'
4. in browser, redirect to localhost where 'client' is running on

## Author

* **Jonathan Hirshowitz** - *Full-Stack Software Developer* - [Website](https://jonathan-hirshowitz-portfolio.firebaseapp.com/) | [LinkedIn](https://www.linkedin.com/in/jonathan-hirshowitz/)