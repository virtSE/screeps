var archetypes,
	modules;
archetypes = [
	'miner', 
	'runner', 
	'archer', 
	'guard', 
	'healer', 
	'builder'
];
modules = {};
archetypes.forEach(function (archetype) {
	module[archetype] = require(archetype);
});
return modules;