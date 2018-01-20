var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   var Web3 = require('web3');
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	console.log('Getting Ethereum address info.....');
	var addr = ('0x627306090abaB3A6e1400e9345bC60c78a8BEf57');
	console.log('Address:', addr);
	web3.eth.getBalance(addr, function (error, result) {
		if (!error) {
			res.send('Ether:' + web3.utils.fromWei(result,'ether'));
			console.log('Ether: '+ web3.utils.fromWei(result,'ether')); // Show the ether balance after converting it from Wei
		}else{
			console.log('Huston we have a promblem: ', error); // Should dump errors here
			res.send('Ether: ' +  error);
		}
	});
});

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});