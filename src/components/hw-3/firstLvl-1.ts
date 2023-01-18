// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на основе OrderState

type FIXME = Exclude<OrderState, 'buyingSupplies' | 'producing'>;
type OrderState = typeof orderStates[number];

const orderStates = ['initial', 'inWork', 'buyingSupplies', 'producing', 'fulfilled'] as const;

export const getUserOrderStates = (orderStates: OrderState[]): FIXME[] => {
  const filteredStates = [] as FIXME[];
  orderStates.forEach((element) => {
    if (element !== 'buyingSupplies' && element !== 'producing') {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
