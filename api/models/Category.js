/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	
	autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'mysql',
	tableName: 'categories',

	attributes: {
		name : { type: 'string' },
		alias : { type: 'string' },
		status : { type: 'integer' },
		parent_id : { type: 'integer' }
	}
};

