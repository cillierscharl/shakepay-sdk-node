const axios = require("axios");

const config = {
    jwt: "",
    privateIpAddress: "",
    deviceUniqueId: "",
    deviceName: ""
}

axios({
    method: "post",
    url: "https://api.shakepay.com/shaking-sats",
    data: {},
    headers: {
        "Authorization": config.jwt,
        "x-device-total-memory": "6023036928",
        "x-device-name": config.deviceName,
        "x-device-has-notch": "false",
        "User-Agent": "Shakepay App v1.6.101 (16101) on Apple iPhone (iOS 14.5.1)",
        "x-device-locale": "en - CA",
        "x-device-manufacturer": "Apple",
        "x-device-is-tablet": "false",
        "x-device-total-disk-capacity": "127881465856",
        "x-device-system-name": "iOS",
        "x-device-carrier": "Bell",
        "x-device-id": "iPhone13,3",
        "x-device-model": "iPhone",
        "x-device-serial-number": "",
        "x-device-country": "CA",
        "x-device-mac-address": "02:00:00:00:00:00",
        "x-device-tzoffset": "240",
        "x-device-ip-address": config.privateIpAddress,
        "x-device-unique-id": config.deviceUniqueId,
        "x-notification-token": "",
        "x-device-brand": "Apple",
        "x-device-system-version": "14.5.1",
    }
})
    .then((response) => { console.log(response.data); })
    .catch((error) => { console.log(error.response.data) });