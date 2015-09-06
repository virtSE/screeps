/*
 * @structure [TOUGH, TOUGH, ATTACK, ATTACK, MOVE]		
 * @description attacks enemy screeps in melee combat. Used as a supporting role for the 'archer' archetype
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
			if (name.indexOf('guard') === 0) {
				tempIdentifier = parseInt(name.match(/\d+/g), 10);
				identifier = tempIdentifier > identifier ? tempIdentifier : identifier;
			}
		}
		name = 'guard' + (identifier + 1);
		spawn.createCreep([TOUGH, TOUGH, ATTACK, ATTACK, MOVE], name, {
			role: 'guard'
		});
	}
}