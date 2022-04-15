# AYT - Arduino Temperature Chart

#### Prerequisites

- `DHT11` temperature- and humiditysensor for measurements
- Visual Studio Code
- Arduino IDE
- Node.js

#### Installation

Open Arduino IDE and Upload the .ino file to your Arduino UNO. If you are using Windows, please make sure your arduino is using the `"COM3"` serial port or change it in the source code(`server.js`)

Open Visual Studio Code, go to integrated terminal and type:

```
npm install
```

After that you can run the server using:

```
npm start
```

Then visit `localhost:3000` in your browser (of course your Arduino has to be plugged in and running)
