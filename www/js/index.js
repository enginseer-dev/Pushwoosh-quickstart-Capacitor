/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    initPushwoosh();
    document.getElementById('deviceready').classList.add('ready');
}

function initPushwoosh() {
    var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");

    // Should be called before pushwoosh.onDeviceReady
    document.addEventListener('push-notification', function(event) {
        var notification = event.notification;
        // Handle push open here
        console.log('Received push notification: ', notification);
    });
  
    // Initialize Pushwoosh. This will trigger all pending push notifications on start.
    pushwoosh.onDeviceReady({
        // ADD YOUR APP ID AND SENDER ID HERE
        appid: "YOUR_APP_ID",
        projectid: "YOUR_FIREBASE_SENDER_ID",
        serviceName: "MPNS_SERVICE_NAME" // Omit this if not using MPNS
    });

    // Registering for push notifications
    pushwoosh.registerDevice(
        function(status) {
            var pushToken = status.pushToken;
            // Handle successful registration here
            console.log('Push token received: ', pushToken);
        },
        function(status) {
            // Handle registration error here
            console.error('Push registration failed: ', status);
        }
    );
}

