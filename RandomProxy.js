/**
*
* @Name : RandomProxy.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2018-06-25
* @Released under : https://github.com/BaseMax/RandomProxyJs/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/RandomProxyJs
*
**/
;(function(window,document)
{
	"use strict";
	/**
	* @variable link
	*
	* @goal : link of free API
	*
	* @return string
	**/
	//var link="https://api.ronite.com/proxy/";
	var link="http://api.ronite.com/proxy/";
	/**
	* @function get
	*
	* @goal : get a proxy from API
	*
	* @return void
	**/
	var get=function(callback)
	{
		var http;
		if(window.XMLHttpRequest)
		{
			//XMLHttpRequest(Chrome, Firefox, IE7+, Edge, Safari Opera)
			http=new XMLHttpRequest();
		}
		else
		{
			//ActiveXObject(IE5 and IE6)
			http=new ActiveXObject("Microsoft.XMLHTTP");
		}
		http.onreadystatechange=function()
		{
			if(this.readyState == 4 && this.status == 200)
			{
				var objs=JSON.parse( this.responseText );
				callback(objs);
			}
			//What will happen when a problem occurs?
			//such as : 'down server' , 'low speed' or more...
		};
		http.open("GET",link,true);
		http.send();
	};
	/**
	* @struct proxy
	*
	* @goal : access to public functions
	*
	* @return struct
	**/
	window.proxy=
	{
		get:get,
	};
}(window,document));
