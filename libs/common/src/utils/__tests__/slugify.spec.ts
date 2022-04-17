import { slugify } from '../slugify.util';

describe('sluggify util tests', () => {
  test('deve transformar um texto em uma slug de url', () => {
    const testText =
      'Combo X-Cazé + Coca 600 ml + fritas 500g com cheddar e bacon';

    const result = slugify(testText);

    expect(result).toBe(
      'combo-x-caze-coca-600-ml-fritas-500g-com-cheddar-e-bacon'
    );
  });
});
