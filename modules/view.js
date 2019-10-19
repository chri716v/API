
class View{

    constructor(){
        this.btnGetBitcoin = document.querySelector("btnGetBitcoin");
        this.btnGetBitcoinTime = document.querySelector("btnGetBitcoinTime");
        this.btnGetCrypto = document.querySelector("btnGetCrypto");
        this.getBitcoin();
        this.getBitcoinTime();
        this.getCrypto();
    }
    getBitcoin(){
        document.getElementById("getBitcoin").addEventListener("click", () => {
            fetch("https://apiv2.bitcoinaverage.com/constants/exchangerates/global")
            .then((res) => {return res.json()})
            .then((data) => {
            console.log(Object.keys(data.rates));
                let output = "<h4 style='text-align: center;'>Different rates</h4>";
        
                let rates = Object.keys(data.rates)
                rates.forEach(rate => {
                    output +=`
                    <h3 style="text-align: center;">rate: ${data.rates[rate].name}</h3>
                    <h3 style="text-align: center;">rate: ${data.rates[rate].rate}</h3>
                    `
                })
                document.getElementById("output").innerHTML = output;
            })
        });
    }
    getBitcoinTime(){
        document.getElementById("getBitcoinTime").addEventListener("click", () => {
            fetch("https://apiv2.bitcoinaverage.com/constants/time")
            .then((res) => {return res.json()})
            .then((data) => {
            console.log(Object.keys(data.iso));
                let output;
        
                let time = Object.keys(data.iso)
                time.forEach(iso => {
                    output =`
                    <h3 style="text-align: center;">time: ${data.iso}</h3>
                    `
                })
                document.getElementById("output").innerHTML = output;
            })
        });
    }
    getCrypto(){
        document.getElementById("getCrypto").addEventListener("click", () => {
            fetch("https://apiv2.bitcoinaverage.com/symbols/indices/names/")
            .then((res) => {return res.json()})
            .then((data) => {
            console.log(Object.keys(data.crypto));
                let output = "<h4 style='text-align: center;'>Crypto</h4>";
        
                let cryptoCoins = Object.keys(data.crypto)
                cryptoCoins.forEach(crypto => {
                    output +=`
                    <h3 style="text-align: center;">Crypto: ${data.crypto[crypto]}</h3>
                    `
                })
        
                let tokenCoins = Object.keys(data.tokens)
                tokenCoins.forEach(tokens => {
                    output +=`
                    <h3 style="text-align: center;">Tokens: ${data.tokens[tokens]}</h3>
                    `
                })
        
                let lightCoins = Object.keys(data.light)
                lightCoins.forEach(light => {
                    output +=`
                    <h3 style="text-align: center;">Light: ${data.light[light]}</h3>
                    `
                })
        
                document.getElementById("output").innerHTML = output;
            })
        });
    }
}

export default View;


