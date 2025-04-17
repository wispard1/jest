import reverse from '../src/index.js';
import fs from 'fs';

test('reverse furnction with long text', () => {
  const inputPath = `${__dirname}/../__fixtures__/input.txt`;
  const text = fs.readFileSync(inputPath, 'utf-8');

  const outputPath = `${__dirname}/../__fixtures__/output.txt`;
  const expectedResult = fs.readFileSync(outputPath, 'utf-8');

  const result = reverse(text);

  expect(result).toEqual(expectedResult);
});
