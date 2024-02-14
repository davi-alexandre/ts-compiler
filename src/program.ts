import * as ts from 'typescript';

const program = ts.createProgram(['src/code.ts'], {});
const checker = program.getTypeChecker();
program.emit();
