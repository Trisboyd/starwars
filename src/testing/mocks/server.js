import { setupServer } from 'msw/Node';

import { handlers } from '../handlers';

export const server = setupServer(...handlers);