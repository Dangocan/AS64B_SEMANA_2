class Turma {
  constructor(codigo, nota) {
    this.codigo = codigo;
    this.nota = nota;
    this.alunos = ;
  }

  aprovado() {
    return this.nota >= 6;
  }
}

module.exports = Turma;
