import AmqpConnectionManager, {
    AmqpConnectionManagerOptions,
    ConnectionUrl,
    IAmqpConnectionManager,
} from './AmqpConnectionManager.js';

export type {
    AmqpConnectionManagerOptions,
    ConnectionUrl,
    IAmqpConnectionManager as AmqpConnectionManager,
} from './AmqpConnectionManager.js';
export type { CreateChannelOpts, default as ChannelWrapper, SetupFunc } from './ChannelWrapper.js';

export function connect(
    urls: ConnectionUrl | ConnectionUrl[] | undefined | null,
    options?: AmqpConnectionManagerOptions
): IAmqpConnectionManager {
    return new AmqpConnectionManager(urls, options);
}

const amqp = { connect };

export default amqp;