module.exports = function (archetypes) {
	var creeps,
		count;
	creeps = Game.creeps;
	count = 0;
	creeps.forEach(function (creep) {
		if (archetypes.indexof(creep.memory.role) > -1) {
			count++;
		}
	});
	return count;
}