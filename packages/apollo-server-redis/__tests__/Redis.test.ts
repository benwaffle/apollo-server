// use mock implementations for underlying databases
jest.mock('redis', () => require('redis-mock'));

import RedisKeyValueCache from '../src/index';
import { testKeyValueCache } from 'apollo-server-caching';

testKeyValueCache(new RedisKeyValueCache({ host: 'localhost' }));
