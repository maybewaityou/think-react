/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const fs = require('fs');

module.exports = {

    async readFile(path) {
        return new Promise((resolve, rejeck) => {
            fs.readFile(path, (error, result) => {
                if (error) {
                    rejeck(error);
                    return;
                }
                resolve(result);
            });
        });
    },


};
