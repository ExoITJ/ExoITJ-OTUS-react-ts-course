import range from 'lodash/range';

export interface IData {
  name: string;
  count: number;
}

export interface IDeepData {
  name: string;
  count: number;
  diving: {
    deeper: {
      still: {
        inPlace: {
          text: string;
        };
      };
    };
  };
}

const notFoundData = { name: 'Not Found', count: 0 };

export const getSingleData = () =>
  ({
    name: `Factory_Data_100`,
    count: 100,
  } as IData);

export const getDeepObjectData = () =>
  ({
    name: 'Deep',
    count: 5000,
    diving: {
      deeper: {
        still: {
          inPlace: {
            text: 'You are so deep',
          },
        },
      },
    },
  } as IDeepData);

export const dataFactory = (count: number) =>
  range(count).map((i) => ({
    name: `Factory_Data_${i}`,
    count: i,
  })) as IData[];

export const getMaxCountFromData = (data: IData[]) => {
  if (!data.length) return;
  const max = data.reduce((acc: IData, cur) => (cur.count >= acc.count ? cur : notFoundData));
  return max.name;
};

export const getQueryStringFromObject = (data: IData) => {
  const entries = Object.entries(data);
  const queryString = entries.map(([key, value], index) => {
    const last = index === entries.length - 1;
    return `${key}=${value}${last ? '' : '&'}`;
  });
  return queryString.join('');
};

export const getObjectFromQueryString = (queryString: string) => {
  let resultObj: Record<string, any> = {}; // { [key: string]: any }
  queryString.split('&').forEach((item) => {
    const split = item.split('=');
    resultObj[split[0]] = parseInt(split[1]) ? parseInt(split[1]) : split[1];
  });
  return resultObj as IData;
};

export const nonMutableChangeObject = (data: IData) => {
  return { ...data, name: 'Changed_Factory_Data_100' };
};

export const nonMutableChangeArray = (data: IData[]) => {
  if (!data.length) return;
  const newData = [...data];
  return newData.map((item) => ({ ...item, name: `Changed_Array_Factory_Data_${item.count}` }));
};

export const nonMutableChangeDeepObject = (data: IDeepData) => {
  return {
    ...data,
    diving: {
      deeper: {
        still: {
          inPlace: {
            text: 'Hello',
          },
        },
      },
    },
  };
};
