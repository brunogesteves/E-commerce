import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';

interface DataProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  address: string;
  phone: string;
  identification: string;
  birthDate: string;
}

const prisma = new PrismaClient();

const usersData: DataProps[] = [
  {
    email: 'wbartunek0@goo.gl',
    password: 'pV5~$U_<W`',
    firstname: 'Wallis',
    lastname: 'Bartunek',
    address: '342 Dayton Trail',
    phone: '132-494-9040',
    identification: '65-800-5651',
    birthDate: '2/26/2023',
  },

  {
    email: 'kbolding1@furl.net',
    password: 'sJ0<ZE?M,L',
    firstname: 'Kellen',
    lastname: 'Bolding',
    address: '98871 Burning Wood Drive',
    phone: '119-329-8874',
    identification: '17-723-6586',
    birthDate: '2/12/2023',
  },

  {
    email: 'atidball2@thetimes.co.uk',
    password: 'tI8?kuEw',
    firstname: 'Angelo',
    lastname: 'Tidball',
    address: '160 Corscot Parkway',
    phone: '377-260-7414',
    identification: '08-488-5781',
    birthDate: '7/5/2023',
  },

  {
    email: 'bparrish3@liveinternet.ru',
    password: 'lJ6/>X%iC4?nX$="',
    firstname: 'Barnie',
    lastname: 'Parrish',
    address: '16053 Pleasure Way',
    phone: '906-662-7038',
    identification: '54-171-9785',
    birthDate: '11/12/2022',
  },

  {
    email: 'mheine4@imgur.com',
    password: 'yW6}%YT_\\',
    firstname: 'Morgun',
    lastname: 'Heine',
    address: '12 Maple Terrace',
    phone: '279-569-3292',
    identification: '35-323-0275',
    birthDate: '8/9/2022',
  },

  {
    email: 'abantock5@macromedia.com',
    password: 'jI8*ex|Z',
    firstname: 'Ania',
    lastname: 'Bantock',
    address: '9013 Sherman Trail',
    phone: '953-427-9522',
    identification: '46-471-3129',
    birthDate: '1/12/2023',
  },

  {
    email: 'tseal6@ed.gov',
    password: 'cC3>*5d/Jc',
    firstname: 'Thalia',
    lastname: 'Seal',
    address: '207 Columbus Pass',
    phone: '969-113-2788',
    identification: '20-100-7387',
    birthDate: '11/22/2022',
  },

  {
    email: 'ptuvey7@i2i.jp',
    password: 'xE6.H\\j9}Z`r3yn',
    firstname: 'Parke',
    lastname: 'Tuvey',
    address: '169 Rieder Park',
    phone: '202-853-2916',
    identification: '55-382-9635',
    birthDate: '3/16/2023',
  },

  {
    email: 'enelligan8@w3.org',
    password: 'kJ0~Nep>$7rq#xPj',
    firstname: 'Edin',
    lastname: 'Nelligan',
    address: '84199 Oriole Terrace',
    phone: '916-517-0276',
    identification: '90-922-0089',
    birthDate: '10/19/2022',
  },

  {
    email: 'aarmor9@blog.com',
    password: 'zX4\\j.W,',
    firstname: 'Alexandre',
    lastname: 'Armor',
    address: '397 Anniversary Junction',
    phone: '716-513-6295',
    identification: '13-633-0734',
    birthDate: '11/25/2022',
  },

  {
    email: 'primmera@umn.edu',
    password: 'gT8/670pr/h\\',
    firstname: 'Patience',
    lastname: 'Rimmer',
    address: '07217 Cody Way',
    phone: '803-994-0793',
    identification: '73-636-7106',
    birthDate: '2/20/2023',
  },

  {
    email: 'yalexandroub@google.com.au',
    password: 'eN3_e+wV8u&',
    firstname: 'Yetta',
    lastname: 'Alexandrou',
    address: '135 Troy Hill',
    phone: '464-924-0363',
    identification: '87-420-5827',
    birthDate: '10/20/2022',
  },

  {
    email: 'bdebellisc@godaddy.com',
    password: 'hQ6!/D|Ir(>',
    firstname: 'Bart',
    lastname: 'De Bellis',
    address: '2 Fisk Circle',
    phone: '734-683-6692',
    identification: '72-897-5376',
    birthDate: '11/24/2022',
  },

  {
    email: 'blarkworthyd@oaic.gov.au',
    password: 'rZ3#AUVU6Vz\\~',
    firstname: 'Bengt',
    lastname: 'Larkworthy',
    address: '88 Raven Hill',
    phone: '113-845-0265',
    identification: '71-528-1512',
    birthDate: '11/29/2022',
  },

  {
    email: 'bsleee@msn.com',
    password: 'wF5"s|C""(<EIY6',
    firstname: 'Blanche',
    lastname: 'Slee',
    address: '6 Lighthouse Bay Junction',
    phone: '193-617-9932',
    identification: '65-626-7762',
    birthDate: '7/5/2023',
  },

  {
    email: 'nfursef@cbsnews.com',
    password: 'sQ9_4s~L"9',
    firstname: 'Nels',
    lastname: 'Furse',
    address: '79852 Talisman Parkway',
    phone: '309-144-5711',
    identification: '55-529-3790',
    birthDate: '3/6/2023',
  },

  {
    email: 'rarkleyg@wired.com',
    password: 'wX4_}.Q1/7',
    firstname: 'Raff',
    lastname: 'Arkley',
    address: '58818 La Follette Drive',
    phone: '870-636-3015',
    identification: '00-264-8080',
    birthDate: '4/1/2023',
  },

  {
    email: 'pbeynonh@blogtalkradio.com',
    password: 'xH3$i2!zz',
    firstname: 'Patricia',
    lastname: 'Beynon',
    address: '79 Atwood Terrace',
    phone: '246-307-4955',
    identification: '05-876-8397',
    birthDate: '12/23/2022',
  },

  {
    email: 'aeleneri@redcross.org',
    password: 'mC7<lp&Vsi_a7I',
    firstname: 'Aeriel',
    lastname: 'Elener',
    address: '237 Melrose Plaza',
    phone: '246-510-6789',
    identification: '44-442-6394',
    birthDate: '11/23/2022',
  },

  {
    email: 'dramelj@ucla.edu',
    password: 'qA1>t2*nWO1eX',
    firstname: 'Dagny',
    lastname: 'Ramel',
    address: '0262 Colorado Place',
    phone: '193-855-4138',
    identification: '89-113-6499',
    birthDate: '7/20/2022',
  },
];

const productsData = [
  {
    name: 'Pork - Liver',
    price: 9.04,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJFSURBVDjLpZNfaM0BFMc/v7s/pv25tnsXlrzo2nav3d3y4CaelqLw4l1JEVaUl1GeUHtQXpiSUvKqZFFWJtFajO62K/KwlXQn7syfe+3PPX883AkNKefl1KnzOed8zzmBu/M/Vvm74OnMiayZJlTNVfXO2fT5nX8ChJYm9zRhJFrrWok1xAJRTf+tgyWAU6neDwuyUCx5ieJCEREZ+xsgcHfOjJ50M0XV0LL39sa2QEwYnRr7JKKqqiER4cru641LNFBT1tfGMDfMHccCNcMd4s3xsLribjyeePp7EVUVdcPcyBVe83HuI+KCuRMKKjBz1oVjiMgfAKJk81kaqsKsrG3h/dc86loex+dRUwQlUhdhz7VdLiKIKLcPDATBz3dwbPCgx5vjZKczqBnmirihrjRUhVlTvxYzxzEGRx5w99Bg8MsdiCjqimjZ62KymmIz87x5+YLZ2SLF+QJuxR8jHL13wEWUFTUrUDNKXiprYoqYUZ13ossr2Lh1E2uaYtx/fpPh7EPS3S3nQt8rJ1a2syq8isnPE8SbkiSakiQiKTqiKWSqSKqtEw0pnau3oUGJdMdmgCOVACURBCXz7hkbop1MvJ0kl59CVYmGo8x8zlMV1LGjfT8Ax7su0z/eB9yqqQSQkqBmJCJJRI1cfoobe/sDgO2XurxQmOZ5bojR3CN6tl2ld2AfNRXLAObKABGevBpBVFlc0dwPYcWorw2Gx4aCzckt9I/3UR1U8ijzAOBi8K/vnO5u6QUOA/XAF6Bv+EKu5xvVXGolRpHH+AAAAABJRU5ErkJggg==',
  },
  {
    name: 'Nantucket - 518ml',
    price: 9.66,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADGSURBVDjLY/j//z8DJZhh1ADsBhyJkKs44Mv3cI8Ty7+drsyPgLiCaAOOhMuVXyy2+Pl9a+//f9d2/P+6ouj/6WzdP7ucWXKJMmCnC/Pdb0DN/yf5/v9fLvj/f5vi/9ddDv+B4veIMgDk7H9n1/1HBu/rJf6DxIlzgSvz4y9zk///B2r6Ucbw/x0QP8xg/g8Uf0KUAYfDpRpOpqj+flau+P9VJev/uymM//f6svzZ4cpcRXwshMtWAG28D42Fx7g0jyZlCAYAAc7hFvdEsKgAAAAASUVORK5CYII=',
  },
  {
    name: 'V8 - Vegetable Cocktail',
    price: 6.03,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHvSURBVBgZpcG/S9RxHMfx5+fuq10d/SJKQ+rUaLoWw60bIoIgaKhBpDksDBFbCooQiqAlURCp/gIjHIQWa4h+QDRYtFhDqOEdSqCSelbfe79f+UUEg35Jj0eQxP8Ip7sGLxaONt+eLSsrAe7IHXNDLlyOzHAJmWHubKuOl8bGipeH7rT0R81HmvuqMtlUTYaNyC6VrQ/oj8qxUuXZRTZqOVaKFZFMXDtTx0Z19E6SiCRHEiIhEBACb0ZH+Z3DTU2YG4kICTOjrXeCNfc760kUCgV+ZXFxEa8YicjccIm7HTkIAgVc4k/cHTcnEcmFmxMCyFkhCCKfzzM/P4fEOgEQAXA3EpG74W6IVYEVgrH3Y/xkdBh7PURl+hPp3bUc2nwMOEVUiWPMjM57M6zpbashUSgUSEwNDzBXfMXBs+1sasiz/G6E7PMnPD5e1RHJHHen59weQCTcnfXGH/bQ3HqBzMen8OwmW7bvoCGXY/SDuiJ3x12AEwCxqrHxAKVSCQh8L02QqW2Ak5dYE3XvJe2hPiqOTz64MRi3uBlujpnh7lgc4+64REtmJ+W3j8gOt/NteZoysPAljaUpBUn8zYvWuu7qrdmr+3ZVoig1xcLnChMzaYu/6nqQxL942br/ytJs6XzaQs7SKgoGToxUbv0ALswWDRrf9Y0AAAAASUVORK5CYII=',
  },
  {
    name: 'Wine - Duboeuf Beaujolais',
    price: 6.96,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ0SURBVDjLlZNbSBRRGMe/2XRWZ2/D7G4sSuYaKVurhMZaIRbm6iaGERSSbz0EPfTSQ4j0ZNRLQq8WPaQgPfQaIWmUJWwrSYolkW2ul7S0Rrbcy+zM7vQ/EovJ2uXAj/+c833nu5xzhtN1nXKN+h6Jc1Sqma/fhPHn574cpG2GYTuDt9quHbe0U0vRiZrqXvHZfwXoHqnTfaZWg8ceII90jPy7mo5W9Vjv5fLltrZwa6RJLzbVkstWQys/FiiakEng7TQ6N0iD7x4vhK+mSjb7522NmFb56PRqKF+OyYLbcQQlFtCT8H0aW5ygHUTiX1uYX75WL690C/PRScwyZDDoNCtPU1vlKB0ueGBpvXy76o8BTpUmu1x5CpGWT6Rn0CMrk6fIdIQcXJwaSjMXfjuDqampXk3T6gGpqsqDMq/Xy918eoaUtEJriSjF1QQdiHcmTjYcKhweHo6nUqk5RVEIumrARs3pdHoQzIOFKzzPc8Fg8GWj2EW1+qX209IN8lPn2d0OoXBoaOiuyWQSksnk9YqKCg+ClHGhUGgPx3EfYrFYMQLIYB9YgnEnywTc+I5Ai6CfoS6wZjQal2RZfmTw+Xzh9fX176jgExxaYBhHBr8gCJPQgNlsfg1thr6FPWCz2Zg2ut1u1sKLjXcwiIHJeRhYBeXQZWgJ9COrAMyyOWDrTpyTDCLovm3jFpDhzqYKJlkGq9X6imUURZFVFJAkaQLzJugbBGlGgCUwln2J/f39KgwWOJWy04WWQ2fAXvAezm6wCFzIvB9c7Ovrq8u+RGzIAwk4068ryoJNWdh149ApnU4/zPkv/Mvo6OjgmQ4MDKR+Apt6owU5Oz7IAAAAAElFTkSuQmCC',
  },
  {
    name: 'Icecream - Dstk Super Cone',
    price: 0.42,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKYSURBVDjLnZPJT1NRFMb5G1wDHV5boNiqdHrvFYolCAtsGSSWKpMFKhYqlDI6oAEKaVJwCIgSphaKtLYWCgSNBgRjMNHoxsSFS3cmJmA0NMTw+R6JKKZl4eJL7sm953fOd3JPHIC4WMpcppG5SGnZc8ZjVVF6QLn975sDgfaZmvg71oRJZIRUYcuAnq/2KWroGfm3QwEn2YpLVPPvOD2oiqj9yq/mGznegl56mx6T7ZbY1M6YAM0CuZkxT0b2Wg6QW/SsApRXDsotR+d6E9Y/h9DuqoCuJq0lKoDxqU1/pITGR27mBU4h+GEcTz5OY+ClA5JbyahYzof/9TBO9B/FcWcqpA4xU3We3GJ87ntnfO5meinMvruNnqcmXA2XoDVcCc0wCYkzBaZpA7ILRJ/2O2B87jA+QT9UeDRe8svZYAG8b/txc6kc9mA+yqayYPQXwvdmBEOrA5B2p0BtFIYOWKCm5RukWwZyXIbA+0F0LpaiKaBHmVsLw4we99ccsM8a8GClF5JOMcQdou8prULrgRmQo7KI0VcE13MrGv06lE5kodhzGvdWu2GdKkTVWC4DcELcJkKyXbCb1EhAVM//M0DVUNqP2qAJd1baUDaZjTMTeXAttsPi0cM0mgvHvA0NkxYk2QRIrieOsDmEmXttH0DfVfSluSToWmpD8bgOroUOWNw6VI7koGfOBuq6EqLLTNU6ojrmP5D1HVsjmrkYezGIrlA9LjKgnrlGXJlpgbCOD0EtD0QNN8I3cZqjAlhJr4rXpB1iNLhrYffUQWoT7yUKzbxqJlHLq0jc5JYmgHMunogKYJVqF7mTrPyfgktMRTMX/CrOq1gLF3fYNrLiX+Bs8MoTwT2fQPwXgBXHGL+TaIjfinb3C7cscRMIcYL6AAAAAElFTkSuQmCC',
  },
  {
    name: 'Pepper - White, Ground',
    price: 9.18,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLvZPZLkNhFIV75zjvYm7VGFNCqoZUJ+roKUUpjRuqp61Wq0NKDMelGGqOxBSUIBKXWtWGZxAvobr8lWjChRgSF//dv9be+9trCwAI/vIE/26gXmviW5bqnb8yUK028qZjPfoPWEj4Ku5HBspgAz941IXZeze8N1bottSo8BTZviVWrEh546EO03EXpuJOdG63otJbjBKHkEp/Ml6yNYYzpuezWL4s5VMtT8acCMQcb5XL3eJE8VgBlR7BeMGW9Z4yT9y1CeyucuhdTGDxfftaBO7G4L+zg91UocxVmCiy51NpiP3n2treUPujL8xhOjYOzZYsQWANyRYlU4Y9Br6oHd5bDh0bCpSOixJiWx71YY09J5pM/WEbzFcDmHvwwBu2wnikg+lEj4mwBe5bC5h1OUqcwpdC60dxegRmR06TyjCF9G9z+qM2uCJmuMJmaNZaUrCSIi6X+jJIBBYtW5Cge7cd7sgoHDfDaAvKQGAlRZYc6ltJlMxX03UzlaRlBdQrzSCwksLRbOpHUSb7pcsnxCCwngvM2Rm/ugUCi84fycr4l2t8Bb6iqTxSCgNIAAAAAElFTkSuQmCC',
  },
  {
    name: 'Mini - Vol Au Vents',
    price: 2.96,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKFSURBVDjLhVNNaxNRFD3vzUwSJ622YEwgYoVaNBUVilZwqStBtJBNxC4EEel/sDsXLhRcVxSUQo07QVy0jbpQqiANsS5ciNpowBhM2kk7nWS+vPdJqi0tXjhz39x595zz7syIMAxRKBSilM8TLgZBcIjyAIGWwQfKnyjfIxRGRkZ8bAoxOzs7SJumEonE0VQqhXg8DtM0wcTLy8toNpsol8uo1WqvqJbLZrOVDQzT09MvFhcXWS7cLlzXDYvFYpjP5x8w8b+QdDmcTCbxv0in0yCRs5vrOhUVU7VaRSwWQzQahWEYqmbbNur1OiqVCvr7+5kA2xLouo5GowHHcdS953mwLAutVks949qWBJ2zaJqmHPBmxs0ndXRHe2G3PfR2RfBo/geEHEy8v1sKg1CgYa3hebFyct0BK9KwVBZCYM12cHr4IC4MdeHpm+8Yv5TZoPzwZY0cibeyQ+D7vmpm8Npuuag3PbV55l11vdGhktUCakttEgr+zoDVGdzMx5FSQAsB1w9we2yI1OioRKDR1dShZmOttv8QMDrqHcKYIeGQixv5ryAueEQUEJiEn/PCNAJIVuRXRV+ieoWd8Eix5XvQpEFWdZAfyho1SiIQcEmsTQNmB5fn5uYeZzKZeF9fnyLhITbtKgxqHDvXTWRtopRKNaRzx/QIbk2V8ctahZ7L5Z5NTk4eWVhYuF4qlbJSyl38L/hBijQNBFjD/flr2G3uIxcSNfsbrp64Q6sYDZpmwHZHR0e/ULrCmJiY6F5ZWTmg6+n5/Skg2dXEmWPD6ImklYklJ409cQ9mhD4icirUQLaI42Mzrwf27jjVE+0hyzvpGC4EDViEPgJh42P5M35aLn4DnlayCCcx84IAAAAASUVORK5CYII=',
  },
  {
    name: 'Clams - Bay',
    price: 7.67,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIfSURBVDjLjZNNSJRRFIafcRJSnGEszTQddQZUJCGTCiGjXLkaiIKgTUhECK6K1oGroE20adEmQnfVIqEYhKRgyiwlFBkcqVzYHzNiVo7f982957QQpxk08cDhcA+c57735R5Uld3kt+5u3a5fwi5jtL9/275PVfOHZDKp1lqMMWxWYwzpdJpEIkFdXR3RaJRYLObbnNlTSMvlckQiEQAKwapKb28vqko8Hi9SUAQwxgAwPr/xMqtgBUQFa6Gv3eC67v8Bnuehqhw9uLKtkRDaHWBiqRJRwciGgko7Tb0dI9hxBcdxdgYAHKvN/LvZOujSY0LhHrJf4jsrcF0XVeXl4j6sKkagMTdKZ/g4wdpO0uM3KfOFiwBF/2DV/kRVOdmQ5lRDmjM1szS4zwhUhbC/nnKg/SLR4Cdmh/tKtwBuTAw0zYXeo6qICCPDwyy8uU9161lwppl8OEJFaJ0afwbjeLEtABFpLin1k1ydRVWpDfymrfkQgcos4n4GFeyfdzSfvs6a692ZvNsdyAOuJa4Gsb4X+0urGFt6jtgcLRUfCYWPINkZVNbpOteKeF/ZuzdFuONC/XfP3MoDrLEDrufpQnqeteUsM2/v0dTWQ3kgg5pl8PmZepICBHFSVLc0UuZ4l18NHW73qSqDg4NaaOb5yAwnLj3AX7KImhVAi3z3l7XyY+4DqdGhR0XLtBmvb3dl1Eq5iqIiBan5igiqOvUX9fhxNiezxvQAAAAASUVORK5CYII=',
  },
  {
    name: 'Pasta - Ravioli',
    price: 3.42,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKvSURBVDjLpVNNTxNRFD1vZtoZICkyhdYilFQ0QKSayoJEoyY10UTjgh0LUXcuJW5wSYwfG1caNCxY8RPQxOBHEDEkREJSS2qpIKHWllLol+10pp0Z3xsCupPEl9x3J5N7zj3v3Fximib+5wjsGh8ff1ipVILVarVO13WiqqpNURQ7y4ZhEFEUNVmWX46MjAyz+qGhoT6avk9OTu6QsbGxRp7nc4FAAEwNBVgRWXqDG9eOQ1ubwNP33XC4e7CyEruZzWafUbCDBpPez3d2doZ7e3tlt9uNeDyOVCqFTCaDVm83Zha3EC2exqm+cyCEIJlMDnAcJ0qSBEEQSKFQOC/QrsccDgfC4TBcLhf8fj/oU0CfgpaWFkQiEczNzcHpdCIYDGJzcxO5XM6qiUajXQIrTKfTaG5uRrXBiyfvFJRqBAbVJxIbLrQdhVwsUvkrYCoZMBaLwePxWE/l2FUqldDe3o6pLxpUk4Nko2HnoHM2fPjRYAG3t7ctsKZpoAbvqxQYAXXbil+6nQJ5CBx1iFpE6KWZdtAJWcHArI59s2wpYCx7rOyYprELpiQcDZ4jKJfLVs3fCvYI9hVQR2E361AzJHBsQuauCjsU5PN59JEEvK9H4c38RBcvIp4+ifk9AsYYCoUQaPVjKe+CKkjg6dhshoIj2jKwOIWrPh49F+9A9J2AEprG8se3WNvIQ2DdWQc2Hmc2i36fzzKHyS1S9xnxwNZndF+/D2l1Bph9gPrGQ/B1dOBMJAaBznR4fX39MVUiNjU1kYWFBcIImDKWqWGm7FCJdNgHXLn7ZwdGPaCDZ0b/e5mmLwnxs4O32ho2XkFVUijTf8UCj6+rSHAH2bh62T2xPD9bS1bqUOBtyO4QfEsQnbZ+Tg66zp8GvfdKOz9v8zrp0HkzQVEvLk/XHv0Gq/ySugg7yEwAAAAASUVORK5CYII=',
  },
  {
    name: 'Island Oasis - Lemonade',
    price: 5.2,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKNSURBVBgZBcFfSNx1AADwz/f7u7uZntNKPVtlixIytmlbkrVg/UEqiGrQS7SXCOqlmlRQD5HFXuptDILwZRQ9Vtb6yxb9cdZLachcEW0SUm5T2dL0dne/u/v1+YTq0zoLfcbljAGIiACIAIA6lhyuLXozV+gzrv/eMaU9JHlijhCIgRCJgRiQEBCQNVj6eazw5TE5OWNKe6gm9A6TYPk3VmeJkSQikiBEsoxiFz276Tk2lgNJntjCbfsB+0k3+fMEZ76gsYFAliFw6TwtV9MkaiLkKJ/j1CQL02yukG/j1sd46AjbRgCBNKWSUq9RIyciBsrnmP+AGMhFuoYYOkBHH3ccZHaCMyeo1qlVSRtUiCIieod5/H3uO8TNj7K+wLevsDgF7H6G0hDVKpU6aZ0aURMSAvJtdA8w+CQPHqHzRmbe5a/vgTsPkm2hkpI2qBBFBFyc46sXmJlgc4V8K3e/RvFapg6zcZ5CkR0PU6mTNqkRsrdl9h1icZ4EIZBvY+cBbriHjQt8/JzjuZJvNsrWNi9Ky2tG29o9Mf2ZnCYEkoyRl8kXWfyB2aN0DVAs+TwpmS2U7dt7u+uu6vfd6U98On/SSutWEcSM7h1sG6Z7gOv3sv4vpybB5NJZQ7cMasSGwWtGNUJqZOddPmxvFYHA5RXSMrBylmqVf/4Ay2sX5EPRIwPPg5fun3BTzy61EOTUkNXR4OsXyXewOEe1zsKvvPes/9ZXnV76ydzStFdHj3rr+FNaki0KWSZ5o1+n3itGXNlPoUjM2NpDR4nOEjGqpKmp1d9tL223Wv7b2uayH+dO2rW0NhOqD+gs9BrXa0wTdVRQQw0V1Hmnrd1H7W3KMWhtZkYuV395fe7S6P8L1PAuhFtHgAAAAABJRU5ErkJggg==',
  },
  {
    name: 'Table Cloth 72x144 White',
    price: 7.76,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKASURBVDjLxVNLTxNRFP7udDp9TCEtFSzloUBwY4FUF0ZjVDYsTDSw0/gjXBii/gk2GjZudO1G4wONK40CGkQSRKTybqGAfVHa6dy5M/d6WwMhccnCk3yLk3u+L9+55xwihMBRQsERQz2crK+vX3Txyn1SyfXDMnyE24AjwR0Q4qLQw1M82H4vGo1+3OeQ/RZSqdQTV2XnhkKzmqaoYJaJQj4P27LgcQGNdTocRmFzyWiJv2zqil0/EJDkt67C0oAGhtTmJpLpHEwSAPNEwBwCy+bQ7W1EsYlYWxiKdMSjvbPhniu96tra2ohmbAxovILZxCq0E5dh6M1g0jllAqYEZRw7lhRp1ZDdewW9tILAykRPingfk9Ti7BbJJ47viiC645cwNm2gYPAaefhWH4TgGB79JoU4vG6Cu0MNyMx/Bv8+hkzJtlWWW27yRfrQ0dhS+4sq0aAOqHQgOK8JGJbMKZf9/h1asPssyv56sBejqupuinEtEHI5jgNFURCuA5JZB6a0fPvBF1BLClbsmoPT7X5wKVqrbWhFqDMmFFHcKLLiNmzbBmMM7WEFAY2jbDCUJbFsMpQkjgUI4ifVWk21lqaXoBQ2mMJ94adi6wes5AxoMYOw7uBcl4JTEQFVULhhId5GcO2MJtuUEykXQRc+gb1/hLTl/VobY2JmctyfnTvvUwlEqCMPvdGEHrKgevj+wlTrxO8VL1+ebLaSc1gwA2kj9bPlYJGmPrx7bm0lrkbIrhrwewFPPbjbj+pzdSPtUh7YXsRqpiT2gp1T9NfEhcGR1zY5fEzjo3c8ud3SIKV0SJrp1wgCLjiS7/CKaU5LPCOcj918+Gb+n1X+b9f4B22tbKhgZZpBAAAAAElFTkSuQmCC',
  },
  {
    name: 'Cabbage - Savoy',
    price: 1.7,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHlSURBVBgZpcE7a1RRFIbh95yZXEaSSLwWFkFEkICKhWhhIV7AxlKsbSz9DQpa+gfsbERQsUhnEYOFFiJoYSrBO6IBY5I5c2bvtfb6jCIIYjfPU0liFDUjqhlR99r9FfEfHoFZkNwxg9ZFm5xkTptFY0HbOl02Hdvf4y/hIUoRHsKLMBcWgZkwD6wE2YNbi1/p8sf6wCkBHsJLkIswD8xF9iB5IZtIHmQLtk11aftOl03nDk/x6NUGpw9OsTYo3H26yoXjs/TGK8Qmwav3A5aW17h0cjfJg9tL34jWqJM7gxTMTnWIgImxmjYXeuMVNxe+UAFX731kbuc483t67Nk+zt5dk7QWROPUTXKevWk4um8LD5+vMjlWcfnMTrqdin4qCGhSIQJOHJjhl41hIVlBTaHut+LU/DSPX69z9tAMgxTcePCZZKIZFiRohoWQePmuz4eVhARDE5Ey9VqbsSKeLK/TqSsk6CdHEk0qIGhyIQQ3Fz7xY+Bs7XW4fnEOJVGdvr6s80dm+fQ9kS1IHiQT2YPkQfbAPDAXVgIrwkPM7Zhg8c5buusbTpsL05Md8ljFpFXYhHCvMK+xEFZEKYEHlAgkkPit2nflhYatIxORAmVHFigVyIFKIAvkggj+VUliFDUj+gngimmFTeOsxAAAAABJRU5ErkJggg==',
  },
  {
    name: 'Port - 74 Brights',
    price: 6.91,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ5SURBVDjLpZPNS1RhFMaff2EWLWo5tGnRaqCFRBAM0cZFwVSQpVHNQAWVMQwaSSZWtimLiKnsO5lEjKzs4y1zRK3oItfMj1FnnJkaUtNrjo45H3eejpCKNa5anMX73vs855zfOS9I4n9i2SHbCpvph8q8A9PNcCzcz76EM9EETj+DmmqENaeBiJ3mRyuzQy5mwyVMKqiFbzNN0MxgKZOd2zj5GMZE/ZL5ooHZAntGW89s7Bw5Ws25llWcfQHrzHPYE/51ZOQ0M4Fiitj4UQdbzhZSb+FJ63ZypJqp7p0UsTf+FN6kvoMMl3GmNY9jj+BckcF8/HoFldLzpZIqxhthJPVdkr2cifdb5sXefyAKLFvyzVJJAssisIxstILZ0DEyeJzpHifHfNBGamFZ+C9yC7bhG7BBxCrZZqWQpoiNP6S1TMBFDh4gA0VMdxfy+0NosftQX+8gGKkBY741HLoGhbnXUOZwKTn+gGa4nOlBN9MDxdJzCTmwj+wvEKPDTPUc5Zx+kOk+NxmqZOJTIXsviYGQVgKLAos/n0CbbIAS0ir1eY9kF4O+3UzpBYzehhaugQpdR3DwKth7EeyqEoO/oYzXwyKwDDN0ipme/VKFi0l9L8M3oYW8SwxWnIKI1XT7Vqb6i/ntLoLTHdulhROcUJsZuJJjCsvEPpyf8m8io5U0VB6FtFNIe6da84XFEcYaNrDzLDw5DUZ9cEwqm6zxGWYGPBTShogtQtoerV0rLA5JKy5+ubya7SdzbKKMyRG7ByPeIfvebKfAWszUdQFavKOI0bqNbCuF4XfneAvzIaStQrpOxEpIL746rQKOD2VQbSXwtLiXg/wNTNvAOhsl8oEAAAAASUVORK5CYII=',
  },
  {
    name: 'Beer - Mill St Organic',
    price: 9.89,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKcSURBVDjLpZPLa9RXHMU/d0ysZEwmMQqZiTaP0agoaKGJUiwIxU0hUjtUQaIuXHSVbRVc+R8ICj5WvrCldJquhVqalIbOohuZxjDVxDSP0RgzyST9zdzvvffrQkh8tBs9yy9fPhw45xhV5X1U8+Yhc3U0LcEdVxdOVq20OA0ooQjhpnfhzuDZTx6++m9edfDFlZGMtXKxI6HJnrZGGtauAWAhcgwVnnB/enkGo/25859l3wIcvpzP2EhuHNpWF9/dWs/UnKW4EOGDkqhbQyqxjsKzMgM/P1ymhlO5C4ezK4DeS/c7RdzQoa3x1PaWenJjJZwT9rQ1gSp/js1jYoZdyfX8M1/mp7uFaTR8mrt29FEMQILr62jQ1I5kA8OF59jIItVA78dJertTiBNs1ZKfLNG+MUHX1oaURtIHEAOw3p/Y197MWHEJEUGCxwfHj8MTZIcnsGKxzrIURYzPLnJgbxvG2hMrKdjItjbV11CYKeG8R7ygIdB3sBMFhkem0RAAQ3Fuka7UZtRHrasOqhYNilOwrkrwnhCU/ON5/q04vHV48ThxOCuoAbxnBQB+am65QnO8FqMxNCjBe14mpHhxBBGCWBLxD3iyWMaYMLUKsO7WYH6Stk1xCAGccmR/Ozs/bKJuXS39R/YgIjgROloSDA39Deit1SZWotsjD8pfp5ONqZ6uTfyWn+T7X0f59t5fqDhUA4ry0fYtjJcWeZQvTBu4/VqRuk9/l9Fy5cbnX+6Od26s58HjWWaflwkusKGxjm1bmhkvLXHvh1+WMbWncgPfZN+qcvex6xnUXkzvSiYP7EvTvH4toDxdqDD4+ygT+cKMMbH+3MCZ7H9uAaDnqytpVX8cDScJlRY0YIwpAjcNcuePgXP/P6Z30QuoP4J7WbYhuQAAAABJRU5ErkJggg==',
  },
  {
    name: 'Haggis',
    price: 0.2,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJUSURBVDjLpZNbaJJhHMZHUES51SoiqssWm5SMQekoFwvnYR4RP02dh/yMMhJpW3PaFOuzURfNi8GUDusw3QGDgl0k0Y3QcbjVqtsY3cVAu9uMwqf3ey+EwXBFFw/vgef58X94eesA1P2P1r284DDfDp/ajUhHPQZOCuBr3wXWrLv/VwAf64pFtM0YO3sUN1U7MOo+gr4OAdzSA2Cd1pENASGjGKO2JgyQ0A3TIRJuQJw5DF/HXhha91Q2BJw/3ojLaiHGr2gwwp6A/VgjrhqbYW0/CKZtJ0b6zmyvCRhU7ltdfH4XxfcT+P76AeYf9ePrs2tYmB1DVLP/56eHF7fUBCQcre9Kc5NYLmSx8nGKaJruS/NTuOMRFWpWaJP7tkql0ux4oBPlwj2sfnlKtfIhg8mBTojF4iei0+e2rQtQKpUNKpWKU6vVSKVS6OnpwcQQQ6XRaOidTqfj93HiFawBkOCmYDB4izfypmQyCavVimw2i0wmA5PJhOHhYXg8HnR3d1dkMtkggWyuAkjwEsuySKfTMBgMMBqNsNvtyOVyyOfzsFgs0Gq1sNlsiEajcLvdFblc3lcFLAw1/16eHUQ4HAbHcdTkcDhAJqPjMwwDr9cLl8sFv9+PYi6Kt/0t5SpgMdJSKb24Tg2JRIKCSCVq5iv19vYiEAggHo9T2I+XHOaCwkoV8PmxPzQfavrldDqh1+upkVcsFqP9+an4M+mPrq4uLERFZZLh1rzC0rSvnnRsIs/4ivRdIuOXFQoFePEhshYlEskbs9ks/Dbjq6/5G/9FfwAGy37p9rgYIQAAAABJRU5ErkJggg==',
  },
  {
    name: 'Okra',
    price: 0.85,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKsSURBVDjLhZJfSFNxFMcHPUUP0aP0EoSEVEaY5QixFzMTRtLDCH1QqIbEKBCzTEyxPwotsbLUETSHmTUTm86mrk03N9eW253Oua2pW8OcS6Z3d7uzWd/uZi0qaQfOww/O93N+53wPCwDr7yyoJ0oqRG61oM9P3u3xkUUCQp3C7SnZqnZLsUDqXzK6wpjxrGPKHcHYDAVei3NpW86TkqSAcqZzTOz8vI4PLhp6ZxjmBRpycxAZZXJ1UkBjr4+c9myKJxw0NLYQlNMUxmcpFDZayaSAum4fScxHMGEPQx0XhzBMUBhlxsivI5IDCutNaqU1CNM8jRELhUFTrHsIL3Wr2J7XmXyEnQVdNUUCKz06E4LUSOK1fg1ygpmfPxpl7eI3/xdwmK/j8oUum/jtHERDC2iQeHHrhQePemfR2mNBToV6hZVyu2ZLwH6e4tClNqdVwyzL5o3AOEfD8DEMLfN96ZtevOuqhk7WAKXkJoRVJ+1VnPTcPwDZFTqhbHINVg/N+B6C0RUD0Bjol8KqbYduahEq8wqGDH7I9XY8rT0VOp994EQCUNpkd4zbg1BaSIxZKbxnuusdYfQ/vYIxsxerwa+4U1mNWCwGIuge1OAa56AqAeAL3bTBEYJ42AcV47uOsTG2fZnoKmSG5bjwFyC6sYEOlRvNl9mrCQCvxRXR2kPoVCxDYQlu3sAUhVcPStGtWcT3n4BYfmMeDwdmcY+XGUgAcq+bXGKlH31afxygYm5BbiZxv/wcOmUqfApE45BYzH+J4nHHM5SxUxW/7Tgmzd/B1beWNdsxwgjHbRSzTBIdXQo08dkQSSR4PkRAPDCJdlEbqjhpgTOZaex/Dmk3d3gpg2/w5t0gAjmVRDT1gi6653Rr8OzxPLq2+OhGfXF64GLWXjnnyL6sWP0PKd/8SStdk8YAAAAASUVORK5CYII=',
  },
  {
    name: 'Soup - French Can Pea',
    price: 1.36,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG5SURBVBgZpcG7b41xAMfhz/v2SJ1qI2nVedXtD0ClsdpIdDARBlKRaEIMLP4OCZNYJGIQl0EQiYnJytSRRA8nLnGrSy+/z1dHObH1eapLL86FVUlIQgyX91+v+I+zT2aiQcUSVGpWdQa3sL29kxhMmovPZ0Ofs09momkQOu2GzlAHi9RJSEJnsGFrewct1vU09LOIxd6m9jhbh7cxULVQqWPo/X7Pm4U3DFcb2L1xkij9imFq8z5GWiN0v3d5/fk1pUhtQimlefezy2CrTZUKS+hnkQTWt4bofuuiNhapknDh2ZnEoEElhmvTNyv+cere8ahosIjKnZkHVZWEtahZo5o1qlmjFqtmH52MBouoaLh17G7FP47cOJwYLKJB5fH5p1U9++hkLDYDGWDX2B4mx6ewSD9LmJzYy66J3ahomumrB1NbRNMbWz/Ot99fWV5ZwiL9VBbLEl9+fWHT8DhV6KnUFmmGJhgdHOXH4gKv3r9EpZ9F5ubnWFpeobOxw+jwGDG0ivJn+Q/zi/N8XPhAKTZqjz4aiovN/Ke3PUshBhOqE7ePRsUiGlTun35Y8R+HrhxIDCbEkIS/gKBKja+GF3wAAAAASUVORK5CYII=',
  },
  {
    name: 'Pork - Chop, Frenched',
    price: 5.37,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ6SURBVDjLjZNdSJNhGIa/VSQdRQcSISQeBI4R5ZrZNIO2Mj3I6CCCfinRfoR2IoJM020sp8OcoHNQassG1laNpAgdhqI2f0GoOSwTS4u22p+b29zP3ft9Wi2b1gf3yftyX8/9PM/7UQCo9fTJeERNhBWpV9//lzkc+MAoHuTfZt84gvZWhDw95DjKQGb0grvrAmLNgS91CH7T/qwO+pvR8mFu4r9aD8BEps3+uZsIfG0kMi1DDAJEww5Ma7gMZE0AHZk2M5qXMJCQ24SFKSV803mIBHoxpdqLtRP435IENb8hDEgKj+UYXOMHSHtPYClnxzVvoGdg6xcRQxXcE9nwvTuP0o4sFLalwTnGQ8gph6WSja5bPOvf+352FLaBUiw5DKQan5iPk+qFuNHOhaTzDE5rUjEp4aBbkf7mjyHS5mjYTfrsxuKcGCJdNkQPMnDtPg8FLXtQ/vQUHo00oER/Ajn126PZym0sBhD70oI2PRas+XAOcVDcngHjuBqPxxoZY8eICipTCbSva3FVl4P06oTQbhmLtVLZRSIb4bUK4TCnwjt5GAWkX9p8u0uEmpfFkL8oQlXnJUifX4GmT4Zz9w5iVyUVpAGeJWc3GRYfjoFULL7Ph/+jHGfvsPFwWAWduQ7awVq0DigI5Dqa+6Qo0uUipYKaTCqjtizv3DsIt0VIBpYL36wUZkWa62RzSjSvISkirE+MZCm3Ri60ZULdW4XL7TlIrqAmdpRRCcwMZg2CMb+9H4uzlfB/bsNQLdfZpcpsWL1ejoxlv6gVIllMjRLz5l//wnDLIfGEev/8qGqffUTJ/d7XlFUd73GRyPad4o1ILKM2xZ7/AGAf1Jkquq5mAAAAAElFTkSuQmCC',
  },
  {
    name: 'Pork - Ground',
    price: 8.82,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKOSURBVDjLlZPtS1NhGMb3D8y/xY+FwQKXr4mWFYT2wQhNQqEXKohIlNLIT2NNxLLYVtAiGIGSL9nm1lTmW3rczpk7287cdNTci9vU7Wy7Os9DR3J+qQMX93Nu7ut3nvt+nqMAoPhbDoejwmKxaKemppbHxsZ+mc3muMlk4oxG49A7w9DZ0vqjhdPpVEpmnWTOBYNBxGIx7O3tIZPJIJlMwu12YejlU3FY12fQagbKjgH+mL/wPI9isYiDgwMQiCAIiEajyOfzKOb3Ie5zsEy/x4vnD2wD/Y/LjgDky8Scy+VAHlEUQd69Xi8SiQSFZve3cZh2oXC4icnxt+h90mWgAMl8Stp2IZ1OU0MqlaKQcDgMlmVB8vm8iEySRTbtprvISbpz+2bh3t1bFQrJrNva2gIRx3HURHomoJ2dHbrOHiYlACMZg9J6V9phFjabDR0dHTpFeXk5/lVkNgQcj8fh8/nQ1ta2SgEMw8Dj8cBut0Ov19NiEkOhEM3LOTJYv9+PQCCASCSClpaWKAWQItlEIEQkJ+fl6NjwY4HxUrHCNi40X9k9ASCSzaUAKyNgdiMIuzuEiUUWNY2XXCdakEEklrYws8pj5gePuc0IXn0cR835xpH/GqJr049vaz4sCXGoztUV1FXVp+lF0mg0OqvVikhCOsrwGlzCCtZ9i1jxLGCJdWDR/R0enqMDFCJR9Gtfo7K6buToJg4ODir7nvVOf/hshO+nm0IIYNkzjyVujkJYP0OPb3R0FJXqqkmVSqU89jP19PQoHz66P9LZ3S6aJ0yYX5+lkDXeCfvyVxg/vUFtXW1OrVbrZPMxgKzu7q4z7Z03hq9db2UuX70Ya2puiDU01TP1DbXDkrmitP43h3Pjic5IKdYAAAAASUVORK5CYII=',
  },
  {
    name: 'Soup - Knorr, Ministrone',
    price: 8.89,
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALnSURBVDjLfZNLaFx1HIW/e2fuzJ00w0ymkpQpiUKfMT7SblzU4kayELEptRChUEFEqKALUaRUV2YhlCLYjYq4FBeuiqZgC6FIQzBpEGpDkzHNs5PMTJtmHnfu6//7uSh2IYNnffg23zmWqtIpd395YwiRL1Q0qyIfD56cmOvUs/4LWJg40auiH6jI+7v3ncybdo2Hy9ebKvqNGrn03Nj1+x0Bi1dHHVV9W0U+ye4d2d83+Ca2GJrlGZx0gkppkkfrsysqclFFvh8++3v7CWDh6ugIohfSPcPH+w6fwu05ABoSby9yb3Kc/mePYXc9TdCqslWapVGdn1Zjxo++O33Fujtx4gdEzj61f8xyC8/jN2rsVOcxYZOoVSZtBewZOAT+NonuAWw3S728wFZpFm975cekGjlz8NXLVtSo0SxPImGdtFfFq5epr21wdOxrnMwuaC2jrRJWfYHdxRfIFeDWr0unkyrSUqxcyk2TLQzQrt6hqydPvidDBg/8VTAp8DegvYa3OU1z+SbuM6dQI62kioAAVgondwAnncWvzCDNCk4CLO9vsJVw8xqN+iPiTB5SaTSKURGSaoTHHgxoAMlduL1HiFMZXP8BsvkbO1GD2O3GpLOIF0KsSBijxmCrMY+FqgGJQDzQgGT3XrJ7DuI5EKZd4iDG+CHG84m8AIki1Ai2imRsx4FEBtQHCUB8MG1wi8QKGhjEC4mbAVHTx8kNYSuoiGurkRtLN76ivb0K6SIkusCEoBEgaCQYPyT2QhKpAXKHTiMmQ2lmChWZTrw32v9TsLOyVlu8Nhi2G4Vs32HsTC9IA2KPRuU2Erp097+O5RRYvz3H1r3JldivfY7IR0+mfOu7l3pV5EM1cq744mi+OPwaRD71tSk0Vsp3/uLB6s2minyrIpeOf7a00fFMf1w+MqRGzqvIW/teecdqV5a5P/8ncXv9ZxUdf/lCae5/3/hvpi4OjajIp4ikVOTLY+cXr3Tq/QPcssKNXib9yAAAAABJRU5ErkJggg==',
  },
];

const categoriesData = [
  {
    name: 'Automotive',

    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK2SURBVBgZBcHLjxN1AADg79eZttvddttll+WxIGrAV4QYTbxoYsSLgjc5arx68qCGf8G7J+NBEg8e9GqURDEmEiOJAWNUwIi8sryWDbSdmc60Mx2/Lxw78caZ1fXVo1EUAYAAACAIgICymrt/7/6P8er66tHPPzklNIJyPgNAENRqAWSzBEFdN9TzWq3y0ckPj8ZRFKmUwuxL6fcXrJzJbJ18xFKv6/LlX1xMP3Nra6jXW3Z3eyiKm0Zp7t1jtWYcaQAMh9uGT7eMkkR2+m9JcluSJEJxQTEZm2Rj00liMkmUeSqEOYI4APr9ndQzi+/v4OPz2m+tWd+zV2d2xaQ8pDfoaUUNcbMlyXIhFAgaQDAcDiXJ2MP1ymilNPn6X6q5OvvZrEhk49SsyBR5alpkQqhBDNDvr1PPDPrLhu89Y+XTbeUre7TXCo9MtzW7+y22I81W0zibYkSgQQB5XkiTzHA0NF6qPHiC/Iv/1FWuMf1WPklMi1SeJubTVABBHACdzkB3OdVfXgbNtx/V+eCsuDpg7+pf8s7ERvcP7daW6eSaqPGOgDgAxsNUkhRI/bZ5x41Zw66DlSdPXbZ5PLUr+kYx+slg8Yj2uW1hNRPQEIKA5cFuFgZ+z0rXpk2DwU53XjtgX7xisrXXoDuycX1B54dLbrQqdbMFYqjr2rmbV13YvKTb7cnzXJKkkqLw61MNh7+6Ijl/3eZK0+3nHzdqBvtbbRAHZGVqq5ppt7qWOn15MdVd6Or/ed2+W5lWkwfPHnbzsZZ2e8HStKCuQUwQQkPPsknItKuOxdC16+I9rc2Jqy8dURxMvHz2oX/27xa1m5irZqWAuCwrVVXZ2PGcjVUCCMIhvMpaCCC8OPdCNBMttESNSDWvlFUlvHni+Hc719dej5oxggAIAAAIAIGyrGzd3Tr9P5JrNp8Zt4rCAAAAAElFTkSuQmCC',
  },
  {
    name: 'Home',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHySURBVDjLtZPvT1JxFMb5O/gHskVzrrV+mFZomDdEDGkYKSXlRleY6IzcFdQ7lBgYeaELBNjFEpbWi9psRU7JnCa3VYTV/WfY01davkFk0/XivDp7Ps/Zc86RAZAdpmT/BWDLmun+5ZuS5X0P+paMML82SKZXeroqYGDttty22it6Po8iWeCxIAlI/5pF9Osj3M8MwPCsXex8ekVeEWAlYn+OxaKUxNx2FKmfcTzfjiH2ncNsnsfIOzu00RZxT4B1pZee3GTw4vdfVyEfxkTWAdfyMMJfHiL2LYgImcSyeAstgQt0GeBuxiQl8iEIP/iSW/eCrtiV0rLXkm3s1ThVnN6cQkj0w511osl7TioD9L29QcaNY64QhWvlHrrmtey/niasclCcEqrp81B669HoPo0yAEmaBBcpuTOZQegF9S6gdUaJqms0vdRL3JYXQdEHLueD9snlovpxc2qnd8nfiIues9gXYEx30INLFvAksB1IIPcAd9LdaPY1oEcw4HqiE2ecJ7DvHegSlGh/Y0FgywP3uhPeDRae9TG4P7nArjHQ8W2oG1KgIkATUcmpYJNonjeC+TCMyZJwFOMfR+BadaCdo3DcdhRVT5kkTZOkC/VjJ3GKqUNHSA3NTCsR1+BAz1RrPwaFtQYH/kZF/5GKa/wDDtK86rC6fMkAAAAASUVORK5CYII=',
  },
  {
    name: 'Industrial',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANBSURBVDjLXZNrSFNhGMcPQQQRfYv60meJoiCtROuDZRcEA6MP3ckwS0tlZVlptnXRqavMaqZ5Ka1Jq1bOmWiXs466mqZzLs0103CmLp27HOdlaf+es2xFL/xe/jzv8/+/vA/nMACYsWpmDiEmjEQTMU+o/wvVFs+e64mAP3XGoWLmEtljzXv7vSMsXM37bHp1ZEPyK6+WsM+ifa+O4tyGuJHxzjQ79euJpb4AWwWT6tLv/zY1VI3hd9GOD8oQXtowglvNNhS3DfoQ9DWuB23K1R6nSeLh205+J18LMZex3mPOu41p9qH6aIfuQciPvHd9eGQcgIL7CrmqA3mPO3DvdQ8Uhn6UvGXxSb11Ztz6eHro+TIzeQOYLwXMhq7C+ebGopWebLYHFfo+qNhedFtdGHHxGHaNwdznQnldN0rqe/GoUgajIniys3BhK3kDfINILq7KSXlqQmFDL5R0m7BGnU58/jaICdIC/E/gjqYbcq0F6UoO8aW6K74ZCNveghbtqScm3Kkxo5Nu9vz4Cd7jwe2SUtgoyD05iae1b8B9diJT2Q6hV/D4A3bmcnaRohVZD42wjXsxOjmDKTo4K5bggaoSKRckqNPpwQ5acEKuh9ArePwB2zNr7LFFeohLDejjvRQyA6vTjcuyqz4zZ2hHWtMJiOpjkfDmEGLL1BA8/oBt6U+0u66zkJS34K3FiQF6tNXtxQttI3rsLgxNAymNiSjvzsfVVgkSa2MQmXWrxR8Qduq+OEL8HEl3dZAqzRimgY16AfcMQdpBASfZeJSY81BMSBpTEK3cjUj55rW+gNAEeRDRseV8FUQFHLKUXTD0OsDTPHiPF0bShyujkd8hwyXDaeR9lCK57hjCczb8/dbXHpYdiZOWe8LPPMMB2UuIbnJIvtEA0fV6HM9lsU+xG7ntGTjXlIgc40UkaGKwXrxmwh+g0+nCTCYTXrPcdOixIqw5rsC6JJUPQe+4G4Ws1guQGtIRrz6EkPQgb+Dplb+foNFoFhG8xWKBuqrKvmpPmmTFrlQtYZ9FG3Fj84Sk6QyOVh5EcGogDmTv2eEfYllZ2QKii5gilv//KwtslIaORuRuQvC5QEjzM4apb4lQ/wXCx9fe4QKeWQAAAABJRU5ErkJggg==',
  },
  {
    name: 'Home',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLfVI7aJpRFD7/7y8qdlDwQdQYwQYJJdCSNmSwlBQcQjK4Zil0KIUgXVwFUeji1Lk4dLGh7RCoDhYtRQoODnUqjVY0SJKKT3zg83/03Jv+YlLMhcO595zzffe8GEmSQD7CK580sztgmkgAtYsiSETwTrTq4ADg23fQfv3CyBgOFo7E8/NgGTgnkYmms0UIsNcIZvwVQBCoDDY24PzwcP6mJLcSoFOaToFdX6eAhtsNo50dGJpMwLpcAOMx9d9GEGYuLkHhcICwtQW91VXQ6/XQ2N0Fbm0NxF+/acxSAtXx+yBc/gnDWRXaSGBaWQGdTgc1ux3E0xJIxXJY9/NHcBHDkMbk83kNz/MuFMVsNgPHh08vzx67X9i2H9GgWq0G0vHH+On9zRDxT7EM1A2/31+lBLlc7lypVFoFrBtJqJDUWZaFyWQCHMdBvV6HZrNJgNTf6/Wg3W4/o2NE49FoNIpZrdY7JOVutwvD4ZAK+YAQm81mcDqdoFKpyIdQqVQ+I+6EkRcplUrdRUPCYrG41Go19Pt9CqSzRyE2EceYTCYFjAuGQqHX15ro8XhKWNvDYrF4QtJUKBQUIP5bICyRgNsYsyeD/5uC1+sdYECq1WpRAtIDohmGoSTYj0E4HE4tHSM5GLRvMBhoylqtFndnTBtK7qjt2PnNpQTRaFSDGTy12WxQrVYhHo+XMpnMu2w2C51OBxy4YFje/lICBD8xGo0arJV0+i2+HwSDweeFQmEvFotdkH7cJOBupG8tl8sVBB4FAoGkbI9EIkmfz3cvnU6/wR3YXsT8BaM2jDnYpij1AAAAAElFTkSuQmCC',
  },
  {
    name: 'Clothing',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACzSURBVCjPY/jPgB8yEKmg0aHxf93/6jPlR4vP5P/I+p9yFMOEuvP7/pedKerJ7cmYnNwTOx9DQaVB9/8J/3McILyw/VjcUFA//3/a/QQBPI5MOT/7f2QBHgWxCRHvg2bhVBAjEHY/8DaecAhd73/GswfCNvmPoSA4we+8x2kQywLoTP33aAqCDHzeu79xrLepN+83uq/3Xwvdm94Jrvsd9lvtN91vuF93v+Z+tX5S44ICBQA4egHkwuNCKQAAAABJRU5ErkJggg==',
  },
  {
    name: 'Shoes',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADCSURBVCjPvdCxCcMwEAXQAxcuIoIFAUMgqtypcyXSqBIYNy4M0gSZQBNoAm2QCW6DTOBFbg1HTo6QyqW5QsU9vj4HK+wPHAJ88uhxDiuMwaFFk/qksUOF7cAJnmb8+rKmFXiN8sxgpomBwb6A7qUe7e2vw0Tj4qKNJvaLLkDRhRoS+QdGcpxQwml7pRaxpiowcGQZdHilVssoyu9VhsjAkmGgsCEZT1Rv/RHuH2BTqYa6xKlQmqPIda6ekGA47tT78wZ72Oy4vOPLEgAAAABJRU5ErkJggg==',
  },
  {
    name: 'Baby',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAD0SURBVCjPfdExSwJxHMbx/yTc1NrUy+h1+AZ6GUJBaYdiKVwopjmYOASiINJgEVFwUFHo4BIiDtql/SPU5BDUQb8Nomh3J8/we4bP8MBPIOYpexdtPcvyyrO6ETxR5zGwAeiMeOfmxBE8MOKXKsWwA7hjSJceZbJhW1DC5BvJDy+kNRtwzYA2BgYSnUTEAgr0+aBJC0mbe85i/0AOkw4Gn8SH0Yo2CRGMrYEralyOq/SJzrRtBEJVvMoKyJCSyd3zZh2dUMZmZOotuYOIuAuYBKbqlgVcKPN7KhvccnRsAYv49/I0ODA9Lgfgcx1+7Vc8y8/+AURAMO9/VDEvAAAAAElFTkSuQmCC',
  },
  {
    name: 'Health',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ3SURBVBgZBcHPi5RlHADwz/POOzu7o21bIWVsiiAR1kYdJOwHdAgKO3QQDMqCTv4XdQikg1BCUnTQCIK6REVdOnWTClIRjAwNCdFy1t1xdnZm3nee59vnkyICAOSTJyu5HCsdR6PESju4fXG6vvFBOxzOVd7r7tn7Zju4vbF58dJnk7Y9VQMAaNu3PbTr03rtyR6hGqw/N/3u+6ct9mYrrx5+cXHfXpHLzqVffn3/2pnPl2oAgNJfPN5de7xnNGK8re733Xf0yCFtq2oKl/+UcO/aE1K3+1YNAJBTtdptC+sbRGHzrqruUDLDIaUw3mbnDlFKrwYAyFujmbZhe8w8kzOzGfM5udDMmGyjaPM86is/HrywuHzgQEoVWKh0ujf2WFjewfUb5DklyC2TGbMpqw+7c/6CzeHdH+oU1WOPPH+2m1IiyPtvWf/oQ/es7ra0Z5Wr19gYkVt6XQ486s6li37/+tvfxpPJido8pkrTm936RG46VMv6x9YMf7rhvzNn7T78soUqsT3R7Fzyx6mPjfdv5eF4/NqRweBmrU0VlHkfYevaOcPL5+nhFa6XL+mhB/TfqfWtdJ796spNqJWqo+oY/X1Fc+cfZbbtgYOvW3nqDUlS5q1mMKEU3fsX1Mv7/HX6GQC1OUnHrhfeJTJRkDWDb8hjZEkjTDSDic6OEwCg1kZEZM2/X6AQgUwUES3RijIhjykTAAC1JgqBIAqRRTTEnGhEmZK3lTwSeQsFANRmUaREFBFzoqXMRJkRU1GmooxF3qJMUAGAOtrSy+NN0oNSSuiITiXpgKRCIhJqeTICAHXMZj9fPf3SIYEEAAAACCSUcg7gf+9HV+4TlzZTAAAAAElFTkSuQmCC',
  },
  {
    name: 'Computers',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHbSURBVDjLpZM/a1RBFEfPnfciq4uChLgrWChaihBYbAxqBD+AgrGwVBDRxipgH1AMEQJpbawU9SvYCRaiEmOaBUkRDRYBwf3zZt691+K9DWuXxYELwzCce37MXHF3/mfJtYcv789d7jzZ7XvTHTDDzVBT3Bxzw1Uxd1wVNePIgdTb3NxefLuysJZ3LnRWpxrN0GpM1LjZ6+sqsJb3k4f+7p+J1QfJA0Du6izdOjMx4M7jLSqAGwCxVBxwc9TAcMwcNUNLr8qNqM6p9mHUtAJQv4IEQdzxILg4YkIIgkhARJHMySyQl9V9K2vAiBQAFwGBzMEEzJzMIUhGLqDiaKiMTa2OYPU/EAH3f0Ai4OqYgAsQhMyyCjCKMNpUDKk2YyDLhcV3t0mxJMZEGiZe3HyDWWUQypT2DEYAkbp9Ha0YJi6dnGf+9BUG/QKAMpV1hDpLBvhYlHGjYlBQlAVREw1psPlzA68N8pEKgNQ16r78folvP9aZOXiMYRmJGpk52uLB87ukvAXcIN/+vvXq3rO0YKqYGqqKmaEpYX6WeGKDQ9MFRRoSNbLza4fe7ymOl9dfA8h+pvHq8sUv7en2uRgT3W7388en67N71vsd5/OPZj+kYUqfVr7OjZ//BRjUGmnYsJxdAAAAAElFTkSuQmCC',
  },
  {
    name: 'Shoes',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALzSURBVDjLjVJ5SNNhGFac9U//iDlnTtNEYyRKKnZIUOaVeeWSeZY6E2VUkJk2Sg0PNFwtL5zlgiUjxBRLZcMJm1eubWzeTvebxzzWptM8Zoft7TfBEtTqg4cPnu97nvfh4TUBAJMduNQgR1LrZ7g5PLWuqlf7k96p+ZbLXVhOfjMlOp4pc9j9dwd7CCeaPCjn46K8d04PPSo9XGIg9fZ3pQR8utj0nwYnSsZM3enyF6yhlS8+FROs263z/edKRll4sshyP/EeA4e8oaRm+dr3UzlDz+0okrNUzsJEAF3eYksZ8CHkj786Q1MKvEqQdq9CRbt34biAkDnC/iOmDjrf56qHGSLdIj5V7G17U+haIdBqwysm+LbpsstO2fLyEKZqjdKshvQGNbhmjjVaJ8ge/DbwKBhmfBhd3WIKdSt0vkZdLdAu8eWrkFCDiLHBfHv3vPGmCOaMwZeGIEnsWcDFSfOxJMkhE7QgDFpQQp1YtxZWpeiwieqJwV3rIlqHCe5U8tRLKS+RQZtESVp83RxcKEIG0amB0bUqwMdKadsdoAW5URpUA2V8jQYX2X16J5HVlY6TydWK/rQa5VRA+eRyAF35GRsr9UGnRsYwpsE5ScbeNijmLmxWCTSQ3zq/Tq6eaDOSRwN5nsTSMSG7cxHiypSQVDcL2GjJ4+2366KrpMpJOEWWtey7B7uBxo2Pe60CMmsWaI8K4X2UC/B8zaEpHA/UiBujFsHdlgeL46TePrnywWAaon8SfatPmnF+a7OVBoYRDmy8vQefKG6GWj/nggMNCJSBhkTmDGCJwnyOH0apR8VQFgqQZQFQ5Ajapxehze/wzB4hWpKnVZQ4I7BIsRJUpNiwDOsj8nwxBoOkEXaf5VwcGPk9BoElyGroMwRCSxUQUqwAj9T+Xo4/Zna9lgyAir6iq6NDMZ1mBu+CbQx/LXEHXaRjecIU5x/zWY6geWgOSIopdIRitjj+ZtT/MjCim2SXzfU3mzTGRm+VUWzkfwHZspOnT6PVHAAAAABJRU5ErkJggg==',
  },
  {
    name: 'Music',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJZSURBVDjLjZNfTFJRHMdBmX/m1Pln+qDTNjcmD77oo62trYd667H10nNPvrbWIy+u0FFAOhrMzWZKXaYE8YAx4+Ll8kfL/NPoIuBdmAVjCQQb1LdzLkg2wzrb5557zu/8Pud3/xwZABmFNLlKpbqi1Wr9SqXyKhkr6FwFxejo6EWj0cjRNXSumkcvAuk4QsBuRyKRAG+zSWOhAr3fcDqlWMjhqMYqG8vkdLDV2IhdloUoitgh/dv6eqTq6iQ25XLser1SjK7ZrAgq1ZUF4ZYWMHNziMViYMxmbHR3I97ZiXhbG4LNzWBMpnKM9Ht/E3xtb8fq8DBm+vvhGhxEZGAA0b4+7Pf0YI+I7K2teNjUhJcNDUiQis4IMl1dOBofx+exMRyOjEAksvjQEKJEFCEiobcXH0lVQkcHUgrFnwKe51EqlWpSLBaRz+claKNzNKemIJfLIRAIIJVK4smSA48ZN6YtPPTWEGYsr1HIZ88X0GSr1YoF+xosngjCiSyiyQL4yDFWeBHzK2/g8/nOCmipJxKGYaBn/NgRj+GPfcf6fg5ewtanPHRL3tqCE6hAs+iD8KWA9UgWrJDF6ocMQgcFPHoRBMdx/xbonvPYFjNYC5eTKUGxgPvzrPSY1V+ZCkjSj9MCyuIrDq7QAYKxHLhYHgGyu+1dBtOzC7A/1f0WuFwupNPpb1Ry+mUmjpJwsu9JJRwM5AtonvGYmrUgsGyAffIm7l2/cEMS6PV6uN1ueDyec2HJOWBMU3BobmF7+QGME5dykkCtVrPkGON/mbx7G+Y7134aJi7jF1A6sIfsK39SAAAAAElFTkSuQmCC',
  },
  {
    name: 'Music',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACoSURBVCjPY/jPAIMMCgxmYKiAEAOKwhmMDGZ//v/5/+M/qhI0BW/+gxQBlTDiUPDl/3v8Cn7//4VfwR/cVkB8kfI27S0WR+7rm/ui70X7i9YX88O7whtflANh7ouUPqgCBsbZLyBGAq1hRLBiX4BZiODBxgIpgAWPOYM/BgukGCl4En9jsswYkIIHKIzBgiiABg9QGINlxoAUPEBhDJYZwhdmDDZYWAoAtTEEdnXdy7IAAAAASUVORK5CYII=',
  },
  {
    name: 'Tools',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGvSURBVDjLxZPbSgJRGIV9BB+h+yikuomIJigo6UBnKtJOUFSkSBIhMUZmBywUNDtQG6KMCrITXVnzCANSYUNNOoMzzEjuR/jbXWjQjN0UdLFuNnt9e/9r8RsAwPAbGf4c0BsSi8b2JOS5UN9cpwo7d6Kw82fqW19IRK0rqaIfAb1B0eS7zeC1mwzu9AtU7pwYKfe5iukzBZsXeJMuoCcoGH3EGI5loXPjy5yTeZGnCBhmj2Vc53oxagBdfsG+y2BwRhS20LzD2yK7eq0C5eTsGsD0gczs3GeBfJcuBKid5WjvpQrta0lGA5hAEhO+y0KThy8IqHZw9GJUJY/oALr8KRSOvUN3QIgWApjdr1FPVPkcAWkAjW6eWr7KwExExj9kgB2HEpSNPlK6NTYv8WjpQoGaGW7wu7li7GnQeSRDtf0Z6dbYHUgxxGhqcPNofD+NK6cS+arKR5+M/SEBV9kSqNT6YKp3cdoMnBEZquzPdOV0gupYT7JtvmS+zhYvz5Jw2RJLnCoeiNPWTRE0AMeRBLYDCaZQGiaJxvfS+Usj2yIMEVm3RLAQ84Ae4N+28QM8btMbbDzl6wAAAABJRU5ErkJggg==',
  },
  {
    name: 'Games',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVDjLlZJZSJRRFMd/39JipZXZmCURrRBjKshkJW20CFGSQlAotENQr9FT1IP2HoFPFRFhCSMYGS1GEUUrkZHY2DItUs30kTnjrN9dehhzFAzqwuHcc+6f3z3ncIyL9/uPa80BqVWxUgqpQCiFlAqpNEKqESaRQiOVetZYv8gHYCutj9T5cgv4j3Piyrtlf+62VKoAoP3DBYQSCClwlcCVbtZLMfx2bEUjrisnjABoAHYt3fdPv8eSAldIsgCpAGh5EP4nwLaKfNIjAWIIALCzykPrwxA7VhUO5/yPQ9RVZmMnkhxdgSsVSmtsC/yPwliWSdvjMIYJ5pCo/WkYtKIodJ7C8V/wMh+oAMCUUqEB2zKoW+HBNqG20sN2n4canweAGp+H1RNusWBWiDlVu6ld8poXTYurAYxTbZ/0oU1F3O/5hWGM7tc2IZZS5DvX8ebdY3rpRmJ97xFRxcC7V/HAs679tisUWmvGWVBdPpPOLocNpdm1uP3yB4tzAkwt2YKMdzOxoJik7KNoTdkkEetvtoXKDNEyDTq7HIBhbxrgKuiLz2Ba/0dMy8EwY4zPcyAZZ/BbyrKFEJkZmLCupIB7rx3WejMVJMPdBB+dIX+6RokEpvoFZi7aTfPmciDZHYgctF2ZacE7dwrffiZYUJhD8Psg8vMNjM9Xmbe8Cp2+hSGj9NxMYSWTJFKSjx8i9Q0tQb8tpX54suVtWVqqya6QuEIiheLw7A7K128g7TRj21N5dSfNpU+bCedVMBiNd1y7UOMHQGs9pn1pq36SCjXpWGCrfn56ZfTsnoUNY+nsv63s16DTGRm4Oy/+M5bo7f1xdO+5t61j6X4DmUx477d3qncAAAAASUVORK5CYII=',
  },
  {
    name: 'Automotive',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFjSURBVDjLpZPdS8JgFMb9FyUpieiDwoKklUNhUwIJKYhCRFrah1FSzDRaFGFRFHbRF0mSkJX3QTddeKfz9J7z5mbtIpoPPLww9vzOw9leBwA4OrHDOaWOL2jVWnDnDeRt5vQLSJvPENgog3/9CcS1EviSRZhMPICwdAfe+A3Iyasa5ggQyVb1WP4d/msheqkTACfbsWf+Agggp1/BjoZnzzhA2qrQg3DBNErQPIZRy0XTqMHIyTeALawFSJV+AhLFKJ3NZpOCuYoJ6A8fcwBu+68Guq5bGvRNH3EAfqrfwoktY7jdjUaD3ukNHXCAuPpomYhBUFyGMfhZHjWMcsv7HCAo9wYgVVKMyhTOiHTiVAp+rBgAlz/LARPxW0sDqtnWoF6vWxp0iRkO8Maubf0HTp8Krbugji0W6M8amTuHocgpDMzk2ZYPaVHuoAY90h50B3Ks9i6brALLoFUCdHwbOwV8AQoMLgCS+2NeAAAAAElFTkSuQmCC',
  },
  {
    name: 'Computers',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIfSURBVDjLpZPNS5RRFMZ/577v+L5jmlmNoBgE4iLIWkgxmTtx4R8QLXLRB1GYG4lAwlWkCH1sShcRuIgWYUQoBIUVgojLyowWLSRhSCNtchzn672nxYxT6hRBD/cuzuW5D+c5H6Kq/A9cgM6+0VtBTk4tJwM/kS7BspvDsAc7w4w8uXGyxwUIrHRev9AcqYlERMRFAS3+E1RBdSNWglyGs9eenwbyAsuJwIvsjUjX7QfU7duF51gC9cBUYYT8NYJjhM8fZ+nvuUg2EClaSKbBGJfGhv0cjLbiGAfVAMQFEYwIIgZjDCHHYO2WGmzY9DwfP1yRz/cv0KLJLQLZTIpsah1EULVYDbDWIICq4khALpNE1W7PQBW+xmN8W4qTtTmsBvxIL5IJ6pECp8ZbYX0tDmpKC3xZLCe0kPr1oBFUU0XyCmEWFnT7HNgC3zhlGMcr6TtITJBLvKK6+jtX7z/ElDV4cGJzBn9COv6MPZXTNDcfpX53I6/nnrL+ftKPdtfddAHUWgRYmp8rKRAKPabtSAeBCThc287Eh1GiTS3Mfxq75OZnLd+coYG+YvQ7rtzpJyQVdBw4B8DltnuMzw4DY74LsDNs4jaXqqotl3wLC4KFw+panLnYNG9jU/S2jzD44gx+vlYpF2CHZx6dH3h5LJnVJmtL7dJxf+bdtNdyqJXx2WHKxGXqzSTAkPzrOke76waBLqASWAWGZ+7Gen8CJf/dMYh8E3AAAAAASUVORK5CYII=',
  },
  {
    name: 'Kids',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK2SURBVBgZBcHLjxN1AADg79eZttvddttll+WxIGrAV4QYTbxoYsSLgjc5arx68qCGf8G7J+NBEg8e9GqURDEmEiOJAWNUwIi8sryWDbSdmc60Mx2/Lxw78caZ1fXVo1EUAYAAACAIgICymrt/7/6P8er66tHPPzklNIJyPgNAENRqAWSzBEFdN9TzWq3y0ckPj8ZRFKmUwuxL6fcXrJzJbJ18xFKv6/LlX1xMP3Nra6jXW3Z3eyiKm0Zp7t1jtWYcaQAMh9uGT7eMkkR2+m9JcluSJEJxQTEZm2Rj00liMkmUeSqEOYI4APr9ndQzi+/v4OPz2m+tWd+zV2d2xaQ8pDfoaUUNcbMlyXIhFAgaQDAcDiXJ2MP1ymilNPn6X6q5OvvZrEhk49SsyBR5alpkQqhBDNDvr1PPDPrLhu89Y+XTbeUre7TXCo9MtzW7+y22I81W0zibYkSgQQB5XkiTzHA0NF6qPHiC/Iv/1FWuMf1WPklMi1SeJubTVABBHACdzkB3OdVfXgbNtx/V+eCsuDpg7+pf8s7ERvcP7daW6eSaqPGOgDgAxsNUkhRI/bZ5x41Zw66DlSdPXbZ5PLUr+kYx+slg8Yj2uW1hNRPQEIKA5cFuFgZ+z0rXpk2DwU53XjtgX7xisrXXoDuycX1B54dLbrQqdbMFYqjr2rmbV13YvKTb7cnzXJKkkqLw61MNh7+6Ijl/3eZK0+3nHzdqBvtbbRAHZGVqq5ppt7qWOn15MdVd6Or/ed2+W5lWkwfPHnbzsZZ2e8HStKCuQUwQQkPPsknItKuOxdC16+I9rc2Jqy8dURxMvHz2oX/27xa1m5irZqWAuCwrVVXZ2PGcjVUCCMIhvMpaCCC8OPdCNBMttESNSDWvlFUlvHni+Hc719dej5oxggAIAAAIAIGyrGzd3Tr9P5JrNp8Zt4rCAAAAAElFTkSuQmCC',
  },
  {
    name: 'Shoes',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJBSURBVDjLhdKxa5NBGMfx713yvkmbJnaoFiSF4mJTh06Kg4OgiyCCRXCof4YIdXdxFhQVHPo3OFSoUx0FySQttaVKYq2NbdO8ed/L3fM4JG3tYPvAcfBw9+HHPWdUlf/V0tLSqKo+EpEHInJFRIohhDUR+RBCeDM7O7ua55QSkRfVanVufHyckZERrLV0Op2Zra2tmXq9fg+YsmcAdyYnJykUCke9OI6ZmJgghHAZ4KwE3ntPs9mkVCohIjQaDWq1GiEEAM5KoHEcY62lVCrRarUoFotUKpUjIL/y/uqXYmV62ph/LSVrr30P4bEFcM4B0Ov1jk547/uAUTs1ceNdZIwB7V/GGHz6+9LXxY96eDiEgHMOY8xJAK8p4grZz5cElwNbwZgyxYu3EFM01lriOCZJEqIoIooiALIsGwA9Y1UcwcWoKNLdpLu9zvbnBWqNBhuvn5EDUmB0EH/1E2TZw5U+YLQovkun+Ytsaw1xCbnCOap334LC7s4Oe/ttvA+ICLmhMXRxDufczUECS37oAuevPwUEVFFp4/eXkXSdYc2IopSepnjtUh5/wg9gfn6+OQBUNaRIUkfDHhraSLoBKqikIF3yHJDLHaAkFOLciVHnyVAVj/S2Ub/XRyQD9aAZKgkaOohvo6ENgykcA07VEFDfQv1uf4W9Y8y30bCPhg4qKZJtMnjTPqBO/vhkZ7h3EJeRslWNQMqgY2jIAIfa/m5sIKSpqpPsGEiz599e3b+GchtD+bSvjQJm2SG6cNj6C+QmaxAek5tyAAAAAElFTkSuQmCC',
  },
  {
    name: 'Games',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAInSURBVDjLpZNBSJRBFMd/37papinFUgZmYESIFiGRYdQhynueig4eomNE0NmDidc8du7arUNFKJSpIKQHAwlNKkUzTVdd3W++mTfzOuxK2RoEzeENPHi//3/mvRepKv9z0gD65aVK7geqFhWHeoeKRSVBfQLO4MWgEoMz1HY+jXYDvFDecrOErgoRFAOgkH12q9RBsr5ApSoa4kI2AtUARCi/CFFqH+riPZ4gQrBLSG4MQoKqLdzBQjBoMGiIqcjcILj8HgCfAIIGA+qKRb8XGzTkQQW1eziQrdWC5V3KMSGYIiSGEBdEZLsUELzBzLxDkk/gLajgzSb7TxwpKAdDz8QUWfOAR3/8QQrAx6vI5gLVTbepbuniwOlrEBzq8xDyqM9jxFKfaeJ+ZXmpg0gVtzxJdmCYmva7RFFEz/c5WJrFBsGKcOzQKZrq2siZbTr665wRWzH0cE3TO/0+2NbF2kA360OPqb1yDwmW681deA344AkoixvznKm/xJaN0+Nzb+3Z3lRFGgAxRGUpqlrvEE+9IDf6HCMWr4GvqzO4IEhwOO/YTHKcO36ZLZdPj30eNsU5MGRf9aNiUBdj4w+Y2irEC0drGpDg8Rr4tjHH4eo6JuZHGJkd/miF1uhvy9T5pNEba7HBYsRyMtOcutjYwfu5UQanX09a4cJinybRv25jS29q5XzD1cyb6cFxG2hf7FNbbMC/ARq7oxUfyjJx8OXLfSo7+Z9JyXr5I2wfSAAAAABJRU5ErkJggg==',
  },
  {
    name: 'Garden',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFESURBVBgZBcG9S9RxAAfg565DI51uCBocpGhoqM1VaAjByXAImvoXDtr6D4JAaG2oyXtpKJGEltYcGntDErEhEI3kvDP7fb+fnqcVAAAAQAeg39XLqsVcyl62bTw8AkTE5tqb8WHOU1MzzUFej1+uR4SIzeWPOcu/TPI7JznNecZ5ngcrEa3YnJ/7fHehY6Kqqiq+eedgP7cH4zZ6dxZmnamKoiqGnpjTXcxj2tSVq/4qGkXRGOlrfDcvK7TJ0qypoiiKob5G9cWsukSHoCiqamQgiiqKoE12p2YUxVBf0aiK6ybs0qbu/HJZMTRQFEWjuOFU3aFNnn06vLCnr1EURbHq1PF+ntIKXiz/+fDTFV/90HHNTWdOTO69fU8rYH0tr7rzc2YUF8aOx3m0NYJWAPe76VmttzK1bzsbW0dAKwAAAID/tYu/URIDsoEAAAAASUVORK5CYII=',
  },
];

async function main() {
  console.log(`Start seeding ...`);

  console.log(`Start seeding ... Categories`);

  for (const data of categoriesData) {
    await prisma.category.create({
      data: data,
    });
  }
  console.log(`Start seeding ... Users`);
  // const json = [{ id: 1 }, { id: 2 }] as Prisma.JsonArray;

  for (const data of usersData) {
    await prisma.user.create({
      data: {
        ...data,
        password: await argon.hash(data.password),
      },
    });
  }

  console.log(`Start seeding ... Products`);

  for (const data of productsData) {
    const generateIdNumber = (min: number, max: number) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    };
    await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
        categoryId: generateIdNumber(1, usersData.length),

        favourites: {
          connect: {
            id: generateIdNumber(1, usersData.length),
          },
        },
      },
    });
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    // process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
