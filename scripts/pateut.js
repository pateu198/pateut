console.log(`
     /^\\
    /  ^\\
   / /^\\ \\
  / / ^ \\ \\
 / / / \\ \\ \\
/_/ /   \\ \\_\\
\\_\\/     \\/_/
`);
console.log("%c Pateut.", "font-size: 24px; font-family:monospace");
console.log('[Pateut] Checking your IP....')

const html = document.documentElement.innerHTML;
const minifiedHtml = html.replace(/\n/g, "").replace(/\s+/g, " ");

if (!('querySelector' in document && 'localStorage' in window && 'addEventListener' in window)) {
    window.location.href = 'unsupported.html';
}
document.addEventListener('contextmenu', event => event.preventDefault());
async function getIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error while getting IP address:', error);
    }
}
async function checkVPN() {
    const ipIntelEmail = 'pateu198@gmail.com'; 
    const ipIntelThreshold = 0.99; 

    try {
        const response = await fetch(`https://check.getipintel.net/check.php?ip=${await getIPAddress()}&contact=${ipIntelEmail}&flags=m&format=json`);
        const data = await response.json();

        if (parseFloat(data.result) > ipIntelThreshold) {
            window.location.href = 'about:blank'; 
        }
    } catch (error) {
        console.error('Error while checking for VPN:', error);
    }
}







function checkVpn(callback) {
    try {

        var data = fs.readFileSync(filename).toString().split("\n");
        var foundIndex = 0;
        var lines = [];
        data.forEach(function (line) {
            // line = line.replace("\n", "");
            //console.log(line);
            //console.log(line[0]);
            if (line.startsWith("10.8.0.")) {
                // console.log("FOUND!");
                foundIndex++;
                lines.push(line);
            }
        });
        // console.log(foundIndex);
        //return result
        return callback(null, foundIndex > 0, lines);
    }
    catch (e) {
        console.log(e);
        return callback(e);
    }
}





console.log(getIPAddress())

const isTrue = true;
const isFalse = false;
var chosenValue = Math.random() < 0.5 ? isFalse : isTrue;

const check = getIPAddress()
//console.log(chosenValue)


function IPCheck(getIPAddress){
    if(check) {
    } else {
        console.log('[Pateut] You are not using a VPN')
    }
};


const checkedip = IPCheck();

checkVPN();
console.log('[Pateut] Your IP has been checked.')
