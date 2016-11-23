var HOST = location.origin.replace(/^http/, 'ws');
var ws = new WebSocket(HOST);
var el = document.getElementsById('server-time');
ws.onmessage = function(event) {
    el.innerHTML = 'Server time: ' + event.data;
};
