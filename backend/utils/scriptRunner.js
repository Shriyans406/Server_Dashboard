const { exec } = require("child_process");

function runScript(scriptPath) {
  return new Promise((resolve, reject) => {
    exec(`bash ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

module.exports = runScript;
