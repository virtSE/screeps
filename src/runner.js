/*
 * @structure [MOVE, MOVE, MOVE, CARRY, CARRY]		
 * @description runs between the spawn and 'miners'. Collects their energy and drops it off

 */

module.exports = {
	manage: function (creep) {
		var spawn,
			identifier,
			partner;
		spawn = Game.spawns.Spawn1;
		if (creep.carry.energy === creep.carryCapacity) {
			creep.moveTo(spawn);
			creep.transferEnergy(spawn);
		} else {
			identifier = creep.name.match(/\d+/g)[0];
			partner = Game.creeps['miner' + identifier];
			creep.moveTo(partner);
			partner.transferEnergy(creep);
		}
	},
	create: function () {
		var identifier,
			tempIdentifier,
			name;
		identifier = 0;;
		for (name in Game.creeps) {
			if (name.indexOf('runner') === 0) {
				tempIdentifier = parseInt(name.match(/\d+/g), 10);
				identifier = tempIdentifier > identifier ? tempIdentifier : identifier;
			}
		}
		name = 'runner' + (identifier + 1);
		spawn.createCreep([MOVE, MOVE, MOVE, CARRY, CARRY], name, {
			role: 'runner'
		});
	}
}