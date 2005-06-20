/*
	ejies-jsextensions.js by Emmanuel Jourdan, Ircam - 02 2005
	"shared library" used for the ejies JavaScripts
	Pour l'instant, �a ne sert � rien... mais � l'avenir... j'en ferai sans doute un usage intensif :-)
*/

var ejies = new EjiesUtils();

function EjiesUtils()
{ 
	this.VersNum = "1.52a5";			// Version Number
	this.VersDate = "(06/2005)";	// Version release date

	// clip method
	this.clip = function(x, min, max)
	{
		return Math.min(Math.max(x,min),max);
	}
	
/* 	perror: il faut mettre une fonction perror � l'int�rieur de chaque */
	this.perror = function(a)
	{
		this.scriptname;
		
		var string = "� error: " + this.scriptname + ":";
		var i;
	
		for (i = 0; i < a.length; i++) {
			string += " " + a[i];
		}
		string += "\n";
		
		post(string);
		return;
	}

		
	return this;
}