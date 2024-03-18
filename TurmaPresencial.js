const Turma = require("./Turma");

class TurmaPresencial extends Turma {
  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.frequencia = frequencia;
  }
}

module.exports = TurmaPresencial;
