# Pushwoosh-quickstart-Capacitor
Basic Capacitor sample with integrated Pushwoosh plugin

# Getting Started:

1. npm install
2. npx cap init
3. npx cap add android
4. Add your app ID and sender ID to /www/js/index.js
5. Add your google-services.json to /android/app/ folder

```
    // Initialize Pushwoosh. This will trigger all pending push notifications on start.
    pushwoosh.onDeviceReady({
        // ADD YOUR APP ID AND SENDER ID HERE
        appid: "YOUR_APP_ID",
        projectid: "YOUR_FIREBASE_SENDER_ID",
        serviceName: "MPNS_SERVICE_NAME" // Omit this if not using MPNS
    });

```
