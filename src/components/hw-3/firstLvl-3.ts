// Есть общая функция omit которая удаляет поле из объекта и возвращает его без этого поля
// Нужно заменить FIXME на соответствующий тип

type FIXME<T, K extends string | symbol | number> = { [P in Exclude<keyof T, K>]: T[P] };
export const omit = <T extends Record<any, any>, K extends keyof T>(obj: T, keyToOmit: K): FIXME<T, K> => {
  const { [keyToOmit]: _, ...withoutKey } = obj;
  return withoutKey;
};
