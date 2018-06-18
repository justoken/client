var {app, BrowserWindow} = require('electron')
  var path = require('path')
  var url = require('url')

  let win

  function createWindow () {
    win = new BrowserWindow({width: 1024, height: 768})

    win.loadURL(url.format({
      pathname: path.join(__dirname+'/public/', 'dashboard.html'),
      protocol: 'file:',
      slashes: true
    }))

    win.on('closed', () => {
      win = null
    })

  }

  app.on('ready', createWindow)

  app.on('window-all-closed', () => { app.quit() })
