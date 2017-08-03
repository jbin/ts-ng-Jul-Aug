import { BruttoPipe } from './brutto.pipe';

describe('BruttoPipe', () => {
  it('calculate Brutto', () => {
    const pipe = new BruttoPipe();
    expect(pipe.transform(100)).toBeCloseTo(119);
    expect(pipe.transform(200, 10)).toBeCloseTo(220);
  });
});
