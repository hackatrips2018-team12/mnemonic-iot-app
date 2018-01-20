var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

var mnemonicAbi = require("./contracts/MnemonicVault.json");
router.get('/checkMe', function(req, res) {
   	var Web3 = require('web3');
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545/'));
	var myAddress = ('0x627306090abaB3A6e1400e9345bC60c78a8BEf57');
	var myHash = '66d02f609dac679a7f0b1424f3412e6a3a14c67eeef2cd102ff2e1e2fa9ed432';
 	var requestedKey = 'Room42'


    //var mNemonicVaultContract = web3.eth.contract(mnemonicAbi.abi).at(req.query.Address);
    console.log("contract retrieving... ");
    console.log("abi: " + mnemonicAbi.abi);
    var mNemonicVaultContract = web3.eth.contract(mnemonicAbi.abi).at("0xa0755256eef2f06c9add08a43b64b5ac96051f153a7ddeb1b1348586aafe10e5");
    
    //var result = mNemonicVaultContract.retrieveDocument("0x8cdaf0cd259887258bc13a92c0a6da92698644c0", requestedKey);



/*
	MnemonicVaultContract.methods.retrieveDocument()
	.call()
	.then(console.log);
*/
});

/*
function checkContractHash(hash){
	hash 
}
*/

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});

