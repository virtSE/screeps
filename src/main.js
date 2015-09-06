var name,
    modules,
    creeps,
    archetypes,
    costCalculator,
    existingCreeps,
    spawns,
    spawnQueue;
modules = require('module-manager');
if (Object.keys(Game.spawns).length === 0) {
    return; // TO DO
}
//  memory management
for(var i in Memory.creeps) {
    if(!Game.creeps[i]) {
        delete Memory.creeps[i];
    }
}
// Controlling existing creeps
creeps = Game.creeps;
for (name in creeps) {
    var creep;
    creep = creeps[name];
    if (modules[creep.memory.role]) {
        modules[creep.memory.role].manage(creep);
    }
}
// Building new creeps
archetypes = {
    miner: [WORK, WORK, MOVE, CARRY, CARRY],
    runner: [MOVE, MOVE, MOVE, CARRY, CARRY],
    archer: [RANGED_ATTACK, RANGED_ATTACK, MOVE],
    guard: [TOUGH, TOUGH, ATTACK, ATTACK, MOVE],
    healer: [HEAL, HEAL, MOVE],
    builder: [WORK, MOVE, MOVE, CARRY, CARRY]
};
costCalculator = require('cost-calculator');
existingCreeps = require('existing');
spawns = Game.spawns;
spawnQueue = [];
for (name in spawns) {
    var spawn,
        hostiles;
    spawn = spawns[name];
    if (spawn.spawning !== null) {
        continue;
    }
    hostiles = spawn.room.find(FIND_HOSTILE_CREEPS);
    if (hostiles.length > existingCreeps(['guard', 'archer'])) {
        spawnQueue.push(modules['guard'].create(spawn));
        spawnQueue.push(modules['archer'].create(spawn));
    }
}