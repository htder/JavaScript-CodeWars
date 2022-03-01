function declareWinner(f1, f2, firstAttacker) {
  while (f1.health > 0 || f2.health > 0) {
    if (f1.name === firstAttacker) {
      f2.health -= f1.damagePerAttack;
      if (f2.health <= 0) return f1.name;
      f1.health -= f2.damagePerAttack;
      if (f1.health <= 0) return f2.name;
    } else {
      f1.health -= f2.damagePerAttack;
      if (f1.health <= 0) return f2.name;
      f2.health -= f1.damagePerAttack;
      if (f2.health <= 0) return f1.name;
    }
  }
}
