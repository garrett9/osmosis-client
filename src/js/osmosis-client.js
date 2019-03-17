'use strict';

const OsmosisClient = function(product, options) {
	var _this = this;
	
	var closeDialog = function() {
		_this.dialog.classList.remove('osmosis-client-show');
		_this.backdrop.classList.remove("osmosis-client-backdrop-show");
	};
	
	var domain = options && options.root ? options.root : "https://osmosissoftware.com";
	
	this.root = domain + "/products/" + product + "?iframe=true#/";
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
	
	this.pages = {};
	
	var req = new XMLHttpRequest();
	req.open("GET", domain + "/api/v1/products/" + product);
	req.setRequestHeader("Content-Type", "application/json");
	req.onload = function() {
		var product = JSON.parse(req.responseText);
		for(var i in product.parent_pages) {
			var parentPage = product.parent_pages[i];
			var parentPageTitle = parentPage.title.toLowerCase();
			_this.pages[parentPageTitle] = parentPage.id;
			
			for(var j in parentPage.pages) {
				var page = parentPage.pages[j];
				_this.pages[parentPageTitle + '/' + page.title.toLowerCase()] = page.id;
			}
		}
	};
	req.send();
};

OsmosisClient.prototype.open = function(page) {
	
	var pagePath = null;
	if(typeof page === 'string') {
		var key = page.replace(/^\/|\/$/g, '');
		if(this.pages[key]) {
			pagePath = this.pages[key];
		} else {
			console.error("Could not find existing page path, \"" + key + "\"!");
		}
	} else {
		pagePath = page;
	}
	
	if(pagePath !== null) {
		this.iframe.src = this.root + pagePath;
		this.dialog.classList.add('osmosis-client-show');
		this.backdrop.classList.add("osmosis-client-backdrop-show");
	}
};

OsmosisClient.prototype.close = function(page) {
	this.dialog.classList.remove('osmosis-client-show');
	this.backdrop.classList.remove("osmosis-client-backdrop-show");
};

module.exports = OsmosisClient;