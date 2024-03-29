'use strict';

import { makeAPICall } from './subCaller.js';

export class ExerraPhish {

    constructor(API_KEY) {
        this.API_KEY = API_KEY;
    }

    async isMalicious(url, flag) {
        const lookup = await makeAPICall(this.API_KEY, url, flag);
        return (lookup.data.isScam)
    }

}