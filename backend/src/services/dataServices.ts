import chartData from '../../data/chartData.json';

import { DataEntry } from '../types';

const data: DataEntry = chartData as DataEntry;

const getEntries = (): DataEntry => {
  return data;
};

export default {
  getEntries
};