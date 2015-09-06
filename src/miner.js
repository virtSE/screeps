/*
 * @structure [WORK, WORK, MOVE, CARRY, CARRY]		
 * @description sits at sources and mines them until a runner comes and collects their energy from them
 */

module.exports = {
	manage: function (creep) {
		var resources;
		if (creep.carry.energy === creep.carryCapacity) {
			return; // No point wasting time
		}
		resources = creep.room.find(FIND_SOURCES);
		if (resources.length) {
			creep.moveTo(resources[0]);
			creep.harvest(resources[0]);
		} else {
			console.log('No sources in room to mine.');
		}
	},
	create: function () {
		var identifier,
			tempIdentifier,
			name;
		identifier = 0;;
		for (name in Game.creeps) {
			if (name.indexOf('miner') === 0) {
				tempIdentifier = parseInt(name.match(/\d+/g), 10);
				identifier = tempIdentifier > identifier ? tempIdentifier : identifier;
			}
		}
		name = 'miner' + (identifier + 1);
		spawn.createCreep([WORK, WORK, MOVE, CARRY, CARRY], name, {
			role: 'miner'
		});
	}
}