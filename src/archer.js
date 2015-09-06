/*
 * @structure [RANGED_ATTACK, RANGED_ATTACK, MOVE]		
 * @description attacks enemy screeps from afar. Used as a supporting role for the 'guard' archetype
 */

module.exports = {
	manage: function (creep) {
		//
	},
	create: function (spawn) {
		var identifier,
			tempIdentifier,
			name;
		identifier = 0;;
		for (name in Game.creeps) {
			if (name.indexOf('archer') === 0) {
				tempIdentifier = parseInt(name.match(/\d+/g), 10);
				identifier = tempIdentifier > identifier ? tempIdentifier : identifier;
			}
		}
		name = 'archer' + (identifier + 1);
		spawn.createCreep([RANGED_ATTACK, RANGED_ATTACK, MOVE], name, {
			role: 'archer'
		});
	}
}