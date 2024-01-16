import { Logger } from '@aws-lambda-powertools/logger';
import { Tracer } from '@aws-lambda-powertools/tracer';

const serviceName = process.env.SERVICE_NAME || 'N/A';
const defaultValues = {
    region: process.env.AWS_REGION || 'N/A',
    runtime: process.env.AWS_EXECUTION_ENV || 'N/A',
    accountId: process.env.AWS_ACCOUNT_ID || 'N/A'
};

const tracer = new Tracer({ serviceName });
const logger = new Logger({
    serviceName,
    logLevel: "DEBUG",
    persistentLogAttributes: {
        ...defaultValues
    },
});
export { logger };

