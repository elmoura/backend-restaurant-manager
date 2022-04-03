import { modelOptions } from '@typegoose/typegoose';

/**
 * @description:
 * essa massaroca que me matei p fazer serve pra abstrair e padronizar
 * o nome de collections do mongo, que por padrao eh tudo junto em lowercase
 * aqui eu quis colocar o nome da classe em snake case só xDDDDD
 */
export const Entity = (entityName?: string): ClassDecorator => {
  return (constructor) => {
    modelOptions({
      options: {
        customName: entityName || constructor.name,
      },
    });
  };
};
