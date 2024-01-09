import { expectType } from 'tsd';

import { start, Invokable, Context, LogLevel, InvokerOptions } from '../../index';
import { CloudEvent } from 'cloudevents';
import { FastifyInstance } from 'fastify';

const fn: Invokable = function(
  context: Context,
  cloudevent?: CloudEvent<unknown>
) {
  expectType<Context>(context);
  expectType<CloudEvent<unknown>|undefined>(cloudevent);
  return undefined;
};

const options: InvokerOptions = {
  logLevel: LogLevel.info,
  port: 8080,
  includeRaw: true,
  path: './'
};

expectType<Promise<FastifyInstance>>(start(fn, options));
