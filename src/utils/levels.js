/*
Progression is roughly linear
Level 1 correspond to 0 XP
Level 7 correspond to 200 000 XP
Level 20 correspond to 1 000 000 XP
Level 60 correspond to 5 000 000 XP
Level 96 correspond to 10 000 000 XP
Level 152 correspond to 20 000 000 XP
Level 177 correspond to 25 000 000 XP
Level 200 correspond to 29 999 996 XP
Level 201 correspond to 30 225 276 XP
*/

/* //////////////////////////////////////////////////
CONVERT XP TO LEVEL
////////////////////////////////////////////////// */
export function calculateLevel(xp) {
    const A = 10606.6; // Multiplier
    const B = 1.5;     // Exponential factor
    const maxLevel = 200;

    // Level compute
    let level = Math.pow(xp / A, 1 / B);

    // Limit level between 1 and 200
    return Math.min(Math.max(Math.floor(level), 1), maxLevel);
}

/* //////////////////////////////////////////////////
CONVERT LEVEL TO XP
////////////////////////////////////////////////// */
export function calculateXp(level) {
    const A = 10606.6; // Multiplier
    const B = 1.5;     // Exponential factor

    return A * Math.pow(level, B);
}