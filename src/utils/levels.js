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
Start level: 1 (0 xp)
Max level: 200 (30 000 000 xp)
*/