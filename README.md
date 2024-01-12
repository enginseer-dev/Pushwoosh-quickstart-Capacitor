# Pushwoosh-quickstart-Capacitor
Basic Capacitor sample with integrated Pushwoosh plugin

# Getting Started:

**1. Install Dependencies:**
```
npm install
```
**2. Initialize Capacitor:**
```
npx cap init
```
During this step, you will set the app's name ("hello-world"), package ID (default), and web directory (default).

**3. Add Android Platform:**
```
npx cap add android
```
This step creates the Android platform directory with necessary files.

**4. Change minSdkVersion to 26 in the android/variables.gradle file:**
```
ext {
    minSdkVersion = 26
    ...
```
**5. Edit /www/js/index.js and add your Pushwoosh appid and Firebase projectid.**
```
    // Initialize Pushwoosh. This will trigger all pending push notifications on start.
    pushwoosh.onDeviceReady({
        // ADD YOUR APP ID AND SENDER ID HERE
        appid: "YOUR_APP_ID",
        projectid: "YOUR_FIREBASE_SENDER_ID",
        serviceName: "MPNS_SERVICE_NAME" // Omit this if not using MPNS
    });

```
**6. Place your google-services.json file in the /android/app/ directory.**

**7. Sync Capacitor:**
```
npx cap sync
```
**8. Open Android Project:**
```
npx cap open android
```
