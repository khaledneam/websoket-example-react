import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: "reverb",
    key: "your-app-key",
     wsHost: "iqopay.com",
    //wsHost: "127.0.0.1",
    wsPort: 6001,
    forceTLS: false,
     disableStats: true,
     logToConsole: true,
    // authEndpoint: "http://iqopay.com/api/broadcasting/auth",
    
});

export default echo;
