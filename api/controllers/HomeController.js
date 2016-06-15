/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	index: function (req, res) {

		res.view('home/index', {'active_menu' : 'dashboard'});
	},

};

