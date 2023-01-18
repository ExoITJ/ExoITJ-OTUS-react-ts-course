import { ComponentType } from 'react';
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps.
// Нужно заменить FIXME на правильный тип.

type FIXME<T> = T extends { defaultProps: infer U } ? U : unknown;
// Hint: infer
export const getDefaultProps = (component: ComponentType): FIXME<ComponentType> => {
  return component.defaultProps;
};
