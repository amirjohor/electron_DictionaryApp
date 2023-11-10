const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path')

// CRUD operations
var btnCreate = document.getElementById('btnCreate');
var btnRead = document.getElementById('btnRead');
var btnUpdate = document.getElementById('btnUpdate');
var btnDelete = document.getElementById('btnDelete');
var fileName = document.getElementById('fileName');
var fileContents = document.getElementById('fileContents');

let pathName = path.join(__dirname, 'Files');

btnCreate.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);
  let contents = fileContents.value;
  
  fs.writeFile(file, contents, function (err) {
    if (err) {
      console.error(err);
      return alert('Error creating file.');
    }
    alert(`${fileName.value} text file was created`);
    console.log('The file was created');
  });
});

btnRead.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);

  fs.readFile(file, 'utf-8', function (err, data) {
    if (err) {
      console.error(err);
      return alert('Error reading file.');
    }
    fileContents.value = data;
    console.log('The file was read!');
  });
});

btnUpdate.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);
  let contents = fileContents.value;

  fs.writeFile(file, contents, function (err) {
    if (err) {
      console.error(err);
      return alert('Error updating file.');
    }
    alert(`${fileName.value} text file was updated`);
    console.log('The file was updated');
  });
});

btnDelete.addEventListener('click', function () {
  let file = path.join(pathName, fileName.value);

  fs.unlink(file, function (err) {
    if (err) {
      console.error(err);
      return alert('Error deleting file.');
    }
    fileName.value = '';
    fileContents.value = '';
    alert('The file was deleted!');
    console.log('The file was deleted!');
  });
});
