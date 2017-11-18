import {Server} from '../src/server'

import pessoa from './api/pessoa'
import auth from './api/auth'
import config from './config'

Server
    .config(config)
    
    .route('/api/pessoa/', pessoa)
    .route(auth)
    .route('/path/to/api', 'get', (req:any, res:any)=>{
        res.send('ok');
    })

    .start();
