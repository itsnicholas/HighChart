import app from './app';
import http from 'http';
import * as config from '../utils/config';
import * as logger from '../utils/logger';

const server = http.createServer(app);

// Specify environment variable PORT
const PORT = config.PORT || 3001;

// Bind and listen for connections on specified port
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});