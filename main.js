const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 2340,
        height: 1400,
        minWidth: 1170,
        minHeight: 700,
        maxHeight: 1500,
        maxWidth: 2500,
        webPreferences: {
            nodeIntegration: true
        },
        title: "School4u",
        // titleBarStyle: 'hiddenInset'
    })

    mainWindow.loadURL(
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(__dirname, './src/build/index.html'),
            protocol: 'file:',
            slashes: true
        })
    )

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})