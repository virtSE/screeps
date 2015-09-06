/*
 * @structure [HEAL, HEAL, MOVE]
 * @description heals hurt friendly creps
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
			if (name.indexOf('healer') === 0) {
				tempIdentifier = parseInt(name.match(/\d+/g), 10);
				identifier = tempIdentifier > identifier ? tempIdentifier : identifier;
			}
		}
		name = 'healer' + (identifier + 1);
		spawn.createCreep([HEAL, HEAL, MOVE], name, {
			role: 'healer'
		});
	}
}