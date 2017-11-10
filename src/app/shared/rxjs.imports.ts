// to import include :
// import '@myrxjs';
// because of tsconfig.json added definition
// "compilerOptions": {
//     "paths": {
//       "@myrxjs": [
//         "./app/shared/rxjs.imports"
//       ]
//     }
// }

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/empty';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
