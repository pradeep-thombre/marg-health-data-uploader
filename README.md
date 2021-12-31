# marg-health-data-uploader

The web app allows user to upload and view csv files on the go in a clean ui . it further improves user experience through -
1. search all the columns and view only the relevant rows of data .
2. it limits the the data to 100 rows per page to prevent user from getting overwhelmed.
3. we can modify the data as per our requirement and finally we can download updated csv file.

## Requirements
1. Node 8
2. Git
3. MongoDB
4. csv-parser
## steps to setup project on your machine 
1. clone the repository
```
git clone https://github.com/pradeep-thombre/marg-health-data-uploader.git
```
2. The node_modules is not a part of the cloned repository and should be downloaded using the npm install .
```
npm install
```
3. To run the project use 
```
npm start
```
## files
### 1.  index.js 
index.js is the main entry point of the project from where we start the  server .\
### 2.   config
it contains config file to set up mongoose.js which is used to setup mongoDB server .\
### 3.  models
it contains the fileSchema which stores the name and full path to csv files .\
### 4.  controllers
it contains all the actions which map to routes .\
### 5.  routes 
it contains all the endpoints and maps urls to actions .\
### 6.   views
it contains ejs files which are sent to the browser after being populated .\
### 7.  Assets
it contains all the css , csv files under their respective sub-folders which are served to the client .\
### 8. package.json
it contains information about all the libraries i.e dependencies required by our project .\
### 9. package-lock.json
it contains information about all the libraries i.e sub-dependencies required by dependencies/librairies used in our project.\
### 10. node_modules
it contains the actual code/files of libraries mentioned in package.json and package-lock.json .

### Api has following rotes

### /uploadCSV
    This api should take the csv file as input from user and update the database with the medicines.

### /getAll
    This api should return all the available data in database, to the requesting user,In case of no data available, send appropriate exception.

### /searchByNameOrBatchNumber
    This api should return all the available records based on the input query string matching either with name or batch-number columns.
### /edit
    This api should update the details of the edited record.

### /delete 
    This api should delete the selected record.
