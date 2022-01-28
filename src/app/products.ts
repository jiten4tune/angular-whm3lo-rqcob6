export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone X12',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'iPhone XI',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 3,
    name: 'iPhone X',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 4,
    name: 'iPhone Standard',
    price: 299,
    description: 'A Standard Display Phone'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/