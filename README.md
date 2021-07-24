<p align="center">
    <img src="encryptlab.png"></img>
</p>

<p align="center">
    A Free and Comprehensive Encrypt & Decrypt Tools with example code in Node.js.
</p>

<div align="center">

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![tag](https://img.shields.io/github/tag/fauzan121002/encryptlab.svg)](https://github.com/fauzan121002/encryptlab) [![CI](https://github.com/fauzan121002/encryptlab/workflows/Node.js%20CI/badge.svg)](https://github.com/fauzan121002/encryptlab/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/fauzan121002/encryptlab/blob/master/LICENSE) [![Issue](https://img.shields.io/github/issues/fauzan121002/encryptlab)](https://img.shields.io/github/issues/fauzan121002/encryptlab) [![Forks](https://img.shields.io/github/forks/fauzan121002/encryptlab)](https://img.shields.io/github/forks/fauzan121002/encryptlab) [![Stars](https://img.shields.io/github/stars/fauzan121002/encryptlab)](https://img.shields.io/github/stars/fauzan121002/encryptlab)

</div>

The purpose of EncryptLab is to make it easier for developers to understand how each encryption works with tools and example code in Node.js.

### List of Available Encryption

- [Triple DES](#tripledes)

- [RSA](#rsa)

- [Blowfish](#blowfish)

- [Twofish](#twofish)

- [AES](#aes)

### Usage

Using SDK

```bash
npm install encryptlab
```

```js
const encryptlab = require("encryptlab");

// encryption list
console.log(encryptlab);

(async () => {
  const encrypted = await encryptlab.tripleDes.encrypt(
    "Hello World",
    "HelloWorldKey"
  );
  const decrypted = await encryptlab.tripleDes.decrypt(
    "aH1rtsLpBFA9P6DqbrQr0w==",
    "HelloWorldKey"
  );
  console.log(encrypted);
  console.log(decrypted);
})();
```

or

Using NPX Local Web Server

```bash
# the server will listening on port 3000!
npx encryptlab
```

### How to start Local Development ?

```bash
# first. install dependencies
$ npm install

# then. serve with hot reload at localhost:3000
$ npm run dev

# etc
# build css for production
$ npm run build:css
# watch file changes
$ npm run watch
# run test
$ npm run test
```

### Want to add any encryption method ?

Feel free to create proposal in [repository Github Issue](https://github.com/fauzan121002/encryptlab/issues) to discuss it first before do your work.

### Contributing

Want to make EncryptLab more perfect? Let's contribute and follow the [contribution guide](.github/CONTRIBUTING.md).

### Contributors

Thanks to all of you who spend times to build this repository.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://fauzan.tech"><img src="https://avatars3.githubusercontent.com/u/50759463?v=4?s=120" width="120px;" alt=""/><br /><sub><b>Muhammad Fauzan</b></sub></a><br /><a href="#maintenance-fauzan121002" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://ahmadsaugi.com"><img src="https://avatars2.githubusercontent.com/u/45036724?v=4?s=120" width="120px;" alt=""/><br /><sub><b>Ahmad Saugi</b></sub></a><br /><a href="https://github.com/fncolon/encryptlab/commits?author=zuramai" title="Documentation">📖</a></td>
    <td align="center"><a href="https://andriawan.com"><img src="https://avatars3.githubusercontent.com/u/13099373?v=4?s=120" width="120px;" alt=""/><br /><sub><b>Muhammad Irwan Andriawan</b></sub></a><br /><a href="#tool-andriawan" title="Tools">🔧</a></td>
    <td align="center"><a href="https://www.dihak.my.id"><img src="https://avatars3.githubusercontent.com/u/10445482?v=4?s=120" width="120px;" alt=""/><br /><sub><b>Dihak</b></sub></a><br /><a href="#design-dihak" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/trasherdk"><img src="https://avatars.githubusercontent.com/u/5003891?v=4?s=120" width="120px;" alt=""/><br /><sub><b>TrasherDK</b></sub></a><br /><a href="#ideas-trasherdk" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://linktr.ee/funfuncfunction"><img src="https://avatars.githubusercontent.com/u/50759463?v=4?s=120" width="120px;" alt=""/><br /><sub><b>Muhammad Fauzan</b></sub></a><br /><a href="https://github.com/fncolon/encryptlab/commits?author=fncolon" title="Code">💻</a> <a href="https://github.com/fncolon/encryptlab/commits?author=fncolon" title="Documentation">📖</a> <a href="#example-fncolon" title="Examples">💡</a> <a href="https://github.com/fncolon/encryptlab/pulls?q=is%3Apr+reviewed-by%3Afncolon" title="Reviewed Pull Requests">👀</a> <a href="#security-fncolon" title="Security">🛡️</a> <a href="#tool-fncolon" title="Tools">🔧</a> <a href="https://github.com/fncolon/encryptlab/commits?author=fncolon" title="Tests">⚠️</a> <a href="#design-fncolon" title="Design">🎨</a> <a href="#question-fncolon" title="Answering Questions">💬</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### License

EncryptLab is under the [MIT License](LICENSE.md)

![https://www.producthunt.com/posts/encryptlab?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-encryptlab](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=272289&theme=light)
