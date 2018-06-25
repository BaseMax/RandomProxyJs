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
	* @function get
	*
	* @goal : get a proxy from API
	*
	* @return struct
	**/
	var get=function()
	{
		var http;
		if(window.XMLHttpRequest)
			http=new XMLHttpRequest();
		else
			http=new ActiveXObject("Microsoft.XMLHTTP");
		http.onreadystatechange=function()
		{
			if(this.readyState == 4 && this.status == 200)
			{
				var objs=JSON.parse( this.responseText );
				return objs;
			}
			//What will happen when a problem occurs?
			//such as : 'down server' , 'low speed' or more...
		};
		http.open("GET","http://api.ronite.com/proxy/",true);
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
