const Aluno = require("./Aluno");
const Turma = require("./Turma");
const TurmaPresencial = require("./TurmaPresencial");

const aluno1 = new Aluno("João", "j@mail.com", 123456);
const turma1 = new Turma(1, 8);
const turmaPresencial1 = new TurmaPresencial(2, 9, 80);

console.table(aluno1);
console.table(turma1);
console.table(turmaPresencial1);
