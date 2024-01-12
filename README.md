# Pushwoosh-quickstart-Capacitor
Basic Capacitor sample with integrated Pushwoosh plugin

# Getting Started:

1. Add your google-services.json to /android/app/ folder
2. Add your app ID and sender ID to /www/js/index.js

```
    // Initialize Pushwoosh. This will trigger all pending push notifications on start.
    pushwoosh.onDeviceReady({
        // ADD YOUR APP ID AND SENDER ID HERE
        appid: "YOUR_APP_ID",
        projectid: "YOUR_FIREBASE_SENDER_ID",
        serviceName: "MPNS_SERVICE_NAME" // Omit this if not using MPNS
    });

```
