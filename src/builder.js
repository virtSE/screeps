/*
 * @structure [WORK, MOVE, MOVE, CARRY, CARRY]
 * @description builds structures/roads etc.
 */

module.exports = {
	manage: function (creep) {
		//
	},
	create: function (creep) {
		var identifier,
			tempIdentifier,
			name;
		identifier = 0;;
		for (name in Game.creeps) {
			if (name.indexOf('builder') === 0) {
				tempIdentifier = parseInt(name.match(/\d+/g), 10);
				identifier = tempIdentifier > identifier ? tempIdentifier : identifier;
			}
		}
		name = 'builder' + (identifier + 1);
		spawn.createCreep([WORK, MOVE, MOVE, CARRY, CARRY], name, {
			role: 'builder'
		});
	}
}