/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  index: function (req, res) {
	Category.find().exec(function(err, categories) {
	  res.view('category/index', {layout: 'layout', 'categories': categories})        
	  return;
	});
  },

  add: function (req, res) {
	res.view('category/add', {layout: 'layout'});
	return;
  },

  save: function (req, res) {
  	var param = {
  		name: req.param('name'),
  		alias: req.param('alias'),
  		status: req.param('status')
  	}
  	Category.create(param).exec(function(err, users) {
  		res.redirect('/category');
  	});
  },

  edit: function (req, res) {
  	var param = { id : req.param('id')};
	Category.findOne(param).exec(function(err, categories) {
		res.view('category/edit', {layout: 'layout', 'categories': categories})
		return;
	});
  },

  update: function (req, res) {
  	Category.update({ id: req.param('id') }, { name: req.param('name'), alias: req.param('alias') }).exec(function(err, users) {
  		res.redirect('/category');
  	});
  	return;
  },

  delete: function (req, res) {
	Category.destroy({ id: req.param('id') }).exec(function(err, users) {
  		res.redirect('/category');
  	});
  	return;
  }
};