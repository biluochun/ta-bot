
/**
 * Application configuration section
 * http://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = {
  apps: [{
    name: 'triangular-arbitrage',
    cwd: __dirname,
    script: `bin/start.js`,
    max_restarts: 5, // 重启次数
    exec_mode: 'cluster',
    instances: 1, // 实例个数
    max_memory_restart: '100M',
    ignore_watch: ['node_modules', 'logs', '.git', '.svn', '.eslintrc'],
    instance_var: 'NODE_APP_INSTANCE',
  }],
};
