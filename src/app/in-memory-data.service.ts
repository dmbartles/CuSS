import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10010001,
        name: '800019832000001',
        firstName: 'Michael',
        lastName: 'Jackson',
        phoneNumber: '555-1456',
        pagerNumber: '555-4581',
        address: '66 Thriller Lane',
        cityState: 'Hollywood, CA',
        creditLine: '$1000000.00',
        accountStatus: 'Late',
        accountStatusDate: '02-12-1986',
        currentBalance: "$120012.99"
       },
       { id: 10010002,
         name: '800019832000002',
         firstName: 'Michael',
         lastName: 'Knight',
         phoneNumber: '555-1982',
         pagerNumber: null,
         address: '2000 KITT Road',
         cityState: 'Los Angeles, CA',
         creditLine: '$1500.00',
         accountStatus: 'Current',
         accountStatusDate: '02-15-1986',
         currentBalance: "$5.99"
        },
        { id: 10010003,
          name: '800019832000003',
          firstName: 'Freddy',
          lastName: 'Krueger',
          phoneNumber: '555-1982',
          pagerNumber: null,
          address: '13 Elm Street',
          cityState: 'Nightmare, MI',
          creditLine: '$500.00',
          accountStatus: 'Current',
          accountStatusDate: '02-17-1986',
          currentBalance: "$499.99"
         },
         { id: 10010004,
           name: '800019832000004',
           firstName: 'Ferris',
           lastName: 'Bueller',
           phoneNumber: '555-1986',
           pagerNumber: '555-5005',
           address: '103 Paramount Street',
           cityState: 'Los Cerritos, CA',
           creditLine: '$1000.00',
           accountStatus: 'Charged Off',
           accountStatusDate: '02-17-1986',
           currentBalance: "$1512.12"
          },
          { id: 10010005,
            name: '800019832000005',
            firstName: 'Mikey',
            lastName: 'Walsh',
            phoneNumber: '555-1986',
            pagerNumber: null,
            address: '12 Goonies Street',
            cityState: 'Goon Docks, OR',
            creditLine: '$1000.00',
            accountStatus: 'Current',
            accountStatusDate: '02-11-1986',
            currentBalance: "$566.23"
           },
           { id: 10010006,
             name: '800019832000006',
             firstName: 'Chunk',
             lastName: 'Unknown',
             phoneNumber: '555-7892',
             pagerNumber: null,
             address: '16 Goonies Street',
             cityState: 'Goon Docks, OR',
             creditLine: '$1200.00',
             accountStatus: 'Current',
             accountStatusDate: '02-15-1986',
             currentBalance: "$576.23"
            },
            { id: 10010007,
              name: '800019832000007',
              firstName: 'Extra',
              lastName: 'Terrestrial',
              phoneNumber: '555-1980',
              pagerNumber: 'X1ef303a30dc032',
              address: '55 Wallace Lane',
              cityState: 'Speak Spell, CA',
              creditLine: '$1200.00',
              accountStatus: 'Current',
              accountStatusDate: '02-22-1986',
              currentBalance: "$12.23"
             },
             { id: 10010008,
               name: '800019832000008',
               firstName: 'Claire',
               lastName: 'Standish',
               phoneNumber: '555-1980',
               pagerNumber: null,
               address: '1981 Glenbrook Way',
               cityState: 'Des Plaines, IL',
               creditLine: '$10000.00',
               accountStatus: 'Current',
               accountStatusDate: '02-22-1986',
               currentBalance: "$8700.00"
              },
              { id: 10010009,
                name: '800019832000009',
                firstName: 'Marty',
                lastName: 'McFly',
                phoneNumber: '555-7890',
                pagerNumber: null,
                address: '1985 DeLorean Dr',
                cityState: 'Hill Vally, CA',
                creditLine: '$100.00',
                accountStatus: 'Current',
                accountStatusDate: '05-05-1955',
                currentBalance: "$0.25"
               },
               { id: 10010010,
                 name: '800019832000010',
                 firstName: 'Peter',
                 lastName: 'Venkman',
                 phoneNumber: '555-7890',
                 pagerNumber: null,
                 address: 'Firehouse, Hook & Latter Company 8',
                 cityState: 'New York, NY',
                 creditLine: '$1000.00',
                 accountStatus: 'Current',
                 accountStatusDate: '02-29-1986',
                 currentBalance: "$188.25"
                },
                { id: 10010011,
                  name: '800019832000011',
                  firstName: 'Gozer',
                  lastName: 'Gozarian',
                  phoneNumber: '666-0713',
                  pagerNumber: null,
                  address: 'Firehouse, Hook & Latter Company 8',
                  cityState: 'New York, NY',
                  creditLine: '$1000.00',
                  accountStatus: 'Current',
                  accountStatusDate: '02-29-1986',
                  currentBalance: "$666.13"
                 },
                 { id: 10010012,
                   name: '800019832000012',
                   firstName: 'John',
                   lastName: 'McClane',
                   phoneNumber: '555-1988',
                   pagerNumber: null,
                   address: '34th Floor, Nakatomi Plaza',
                   cityState: 'Los Angeles, CA',
                   creditLine: '$1000.00',
                   accountStatus: 'Current',
                   accountStatusDate: '02-07-1986',
                   currentBalance: "$250.13"
                  },
                  { id: 10010013,
                    name: '800019832000013',
                    firstName: 'Princess',
                    lastName: 'Buttercup',
                    phoneNumber: '555-1987',
                    pagerNumber: 'Tru-Love',
                    address: 'Cliffs of Insanity',
                    cityState: 'Florin, Fi',
                    creditLine: '$1000.00',
                    accountStatus: 'Current',
                    accountStatusDate: '02-07-1986',
                    currentBalance: "$1252.13"
                   },
                   { id: 10010014,
                     name: '800019832000014',
                     firstName: 'Maverick',
                     lastName: 'Mitchell',
                     phoneNumber: '555-1986',
                     pagerNumber: 'top-gun1',
                     address: 'USS Entriprise CVN-65',
                     cityState: 'Miramar, CA',
                     creditLine: '$1000.00',
                     accountStatus: 'Past Due',
                     accountStatusDate: '02-07-1986',
                     currentBalance: "$1202.13"
                    },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
