'use strict';

const OsmosisClient = function(product, options) {
	var _this = this;
	
	var closeDialog = function() {
		_this.dialog.classList.remove('osmosis-client-show');
		_this.backdrop.classList.remove("osmosis-client-backdrop-show");
	};
	
	this.root = (options && options.root ? options.root : "https://osmosissoftware.com") + "/products/" + product + "?iframe=true#/";
	this.product = product;
	this.dialog = document.createElement("div");
	this.dialog.classList.add("osmosis-client");
	this.iframe = document.createElement("iframe");
	this.iframe.src = this.root;
	this.backdrop = document.createElement("div");
	this.backdrop.classList.add("osmosis-client-backdrop");
	this.backdrop.addEventListener("click", closeDialog, false);
	
	this.dialog.append(this.iframe);
	
	this.closeButton = document.createElement("div");
	this.closeButton.classList.add("osmosis-client-close");
	this.closeButton.innerHTML = "&times;";
	this.closeButton.addEventListener("click", closeDialog, false);
	
	this.dialog.append(this.closeButton);
	document.body.appendChild(this.dialog);
	document.body.appendChild(this.backdrop);
	document.addEventListener("keydown", function(evt) {
		if(evt.keyCode === 27) {
			_this.close();
		}
	}, true);
};

OsmosisClient.prototype.open = function(page) {
	this.iframe.src = this.root + page;
	this.dialog.classList.add('osmosis-client-show');
	this.backdrop.classList.add("osmosis-client-backdrop-show");
};

OsmosisClient.prototype.close = function(page) {
	this.dialog.classList.remove('osmosis-client-show');
	this.backdrop.classList.remove("osmosis-client-backdrop-show");
};

module.exports = OsmosisClient;