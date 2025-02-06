export function calculateLevel(xp) {
    const A = 10606.6; // Multiplicateur
    const B = 1.5;     // Facteur exponentiel
    const maxLevel = 200;

    // Calcul du niveau
    let level = Math.pow(xp / A, 1 / B);

    // Restreindre le niveau entre 1 et 200
    return Math.min(Math.max(Math.floor(level), 1), maxLevel);
}

export function calculateXp(level) {
    const A = 10606.6; // Multiplicateur
    const B = 1.5;     // Facteur exponentiel

    // Calcul de l'XP requis pour un niveau donné
    return A * Math.pow(level, B);
}

/*
Progression is roughly linear
1 (0 xp)
7 (200 000)
20 (1 000 000)
60 (5 000 000)
96 (10 000 000)
152 (20 000 000)
177 (25 000 000)
200 (29 999 996)
200 (30 225 276)
*/