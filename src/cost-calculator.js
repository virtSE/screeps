module.export = function (parts) {
	var cost;
	cost = 0;
	parts.forEach(function (part) {
		switch (part) {
			case MOVE:
				cost += 50;
				break;
			case WORK:
				cost += 100;
				break;
			case CARRY:
				cost += 50;
				break;
			case ATTACK:
				cost += 80;
				break;
			case RANGED_ATTACK:
				cost += 150;
				break;
			case HEAL:
				cost += 250;
				break;
			case TOUGH:
				cost += 10;
				break;
		}
	});
	return cost;
}