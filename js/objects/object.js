function inheritPrototype(child, parent){
  var childProto = Object.create(parent);
	childProto.constructor = child;
	child.prototype = childProto;
}

var exports = module.exports;

exports.Person = function (firstName,lastname){
  this.firstName = firstName;
	this.lastname = lastname;
	this.balance = 0;  
	this.bank = null;
};
exports.Person.prototype = {
  constructor: Person,
	init: function(bank, balance){
	  this.bank = bank;
		this.balance = balance;
	}
};







function Bank(name) {
  this.reserveBank =  false;
	this.name =  null;
	this.balance =  []; //array of Money objects
	this.clients =  [];// array of Person objects
	this.reserveRatio =  0.1;
	this.transactionHistory =  []; //Array of transaction objects
	this.liabilities = [];
	this.equities = [];
	this.assets = [];
	this.property = [];
};

Bank.protype = {
  constructor: Bank,
	getBalance: function(){
	  this.balance.forEach(money){
		}
	}
};

function Transaction() {
};

Transaction.prototype = {
  constructor: Transaction,
	from: function(from){
	  this.from = from;
		return this;
	},
	to: function(to){
	  this.to = to;
		return this;
	},
	acceptingBank: function(acceptingBank){
	  this.acceptingBank = acceptingBank;
		return this;
	},
	receivingBank: function(receivingBank){
	  this.receivingBank = receivingBank;
		return this;
	},
	amount: function(amount){
	  this.amount = amount;
		return this;
	}
};

function Person(firstName,lastname){
  this.firstName = null;
	this.lastname = null;
	this.balance = 0;  
}

var MoneyFaucet = {
  baseAmount: 0,
	fictiveAmount: 0,
};

function Money(){
  this.creator = null;
  this.base = true;
  this.new = false;
	set amount(value) {
	  this.new ?
	  this.base ? Object.getPrototypeOf(this).baseAmount += value:
		Object.getPrototypeOf(this).fictiveAmount += value : '';
		this._amount = value;
	},
	get amount() {
	  return this._amount;
	}
}

inheritPrototype(Money, MoneyFaucet);
