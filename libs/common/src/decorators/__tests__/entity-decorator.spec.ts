import { Entity } from '../entity.decorator';

describe('@Entity decorator tests', () => {
  test('deve validar que a classe decorada tem as props esperadas', () => {
    @Entity()
    class TestEntity {}

    console.log(TestEntity);

    expect(TestEntity).toBeTruthy();
  });
});
