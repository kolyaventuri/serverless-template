import type {APIGatewayEvent, Handler} from 'aws-lambda';

type Event = APIGatewayEvent & {
  source?: string;
};
type LambdaFn = (event: APIGatewayEvent, context: any, callback: any) => any;

// I can't explain why, but eslint and prettier fight here
/* eslint-disable prettier/prettier */
const runWarm =
  (lambdaFunc: LambdaFn): Handler =>
    (event: Event, context, cb) => {
      if (event.source === 'serverless-plugin-warmup') {
        console.log('Function warmed up.');
        return 'pinged';
      }

      /* eslint-disable-next-line no-warning-comments */
      // TODO: Type this better
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
      return lambdaFunc(event, context, cb);
    };

/* eslint-enable prettier/prettier */

export default runWarm;
