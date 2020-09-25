// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
Menu.setApplicationMenu(false) // Suppression de la barre menu.
const path = require('path')
const url = require('url')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    center: true,
    frame: true,
    title: "BTS SIO Promo 2022 WebApp",
    icon: path.join(__dirname, './Icon/Icon.ico'),
  })

// Load d'une page index.html.
 // mainWindow.loadURL(url.format({
   // pathname: path.join(__dirname, 'index.html'),
    //protocol: 'file:',
    //slashes: true
  //}))

  // Load URL
  mainWindow.loadURL('https://google.fr')
  // On empeche le changement de nom
  mainWindow.on('page-title-updated', function(e) {
    e.preventDefault()
  });
}

// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

