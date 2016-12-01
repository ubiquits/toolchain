<a name="2.0.1-0"></a>
## [2.0.1-0](https://github.com/ubiquits/toolchain/compare/v2.0.0-0...v2.0.1-0) (2016-11-19)



<a name="2.0.0-0"></a>
# [2.0.0-0](https://github.com/ubiquits/toolchain/compare/v1.0.0-0...v2.0.0-0) (2016-11-19)


### Bug Fixes

* **test:** Fixed tests running in parallel ([0aa428f](https://github.com/ubiquits/toolchain/commit/0aa428f))



<a name="1.0.0-0"></a>
# [1.0.0-0](https://github.com/ubiquits/toolchain/compare/v0.3.3...v1.0.0-0) (2016-11-19)


### Bug Fixes

* **tests:** Switched order of unified tests due to karma bug ([5b4538e](https://github.com/ubiquits/toolchain/commit/5b4538e))
* **upgrade:** Added babel compilation to deal with the regression in angular injector ([61f2ab1](https://github.com/ubiquits/toolchain/commit/61f2ab1))
* **upgrade:** Unified casing of test shims, removed babel transpilation hack, renamed tsconfig base to remove .all, removed testbed bootstrapping, added inclusion of common specs to server scope, ([975a2bd](https://github.com/ubiquits/toolchain/commit/975a2bd))



<a name="0.3.3"></a>
## [0.3.3](https://github.com/ubiquits/toolchain/compare/v0.3.2...v0.3.3) (2016-08-03)


### Bug Fixes

* **init:** Add validation to initialization of project name to ensure compatibility with package.json naming conventions ([d9d0d9b](https://github.com/ubiquits/toolchain/commit/d9d0d9b))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/ubiquits/toolchain/compare/v0.3.1...v0.3.2) (2016-08-01)


### Bug Fixes

* **compile:** Temporarily suppress sourcemap output in compile ([7e4b1cd](https://github.com/ubiquits/toolchain/commit/7e4b1cd))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/ubiquits/toolchain/compare/v0.3.0...v0.3.1) (2016-07-28)


### Bug Fixes

* **tsdoc:** Fix tsdoc not working with ts[@2](https://github.com/2).0.0 ([e8a228c](https://github.com/ubiquits/toolchain/commit/e8a228c))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/ubiquits/toolchain/compare/v0.2.4...v0.3.0) (2016-07-27)


### Bug Fixes

* **remote conn:** Stop server key generation prompting for password ([1ece880](https://github.com/ubiquits/toolchain/commit/1ece880))


### Features

* **connection:** Implement basic remote connection passthrough of credentials, add option to skip browser compilation, ([9dfd210](https://github.com/ubiquits/toolchain/commit/9dfd210))
* **crypto:** Completed implementation of password prompting for key generation and jwt signing ([0acdadd](https://github.com/ubiquits/toolchain/commit/0acdadd))
* **crypto:** Implement key generation and jwt signing ([b965d16](https://github.com/ubiquits/toolchain/commit/b965d16))
* **crypto:** Implemented passthrough of jwt for authentication, added key generation to the quickstart tour ([fe10440](https://github.com/ubiquits/toolchain/commit/fe10440))
* **remote conn:** Add ability for tour to skip, pass through terminal column width to server ([642ddd2](https://github.com/ubiquits/toolchain/commit/642ddd2))



<a name="0.2.4"></a>
## [0.2.4](https://github.com/ubiquits/toolchain/compare/v0.2.3...v0.2.4) (2016-07-20)


### Bug Fixes

* **watch:** Update watch to use the dist destination ([4469b1c](https://github.com/ubiquits/toolchain/commit/4469b1c))



<a name="0.2.3"></a>
## [0.2.3](https://github.com/ubiquits/toolchain/compare/v0.2.2...v0.2.3) (2016-07-20)


### Bug Fixes

* **bin:** Update bin execution to exit process when failure occurs ([32811a7](https://github.com/ubiquits/toolchain/commit/32811a7))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/ubiquits/toolchain/compare/v0.2.0...v0.2.2) (2016-07-19)


### Bug Fixes

* **npm:** Dropped copying of package.json into lib as it does not work with travis ci deploy pattern ([bcf7b9f](https://github.com/ubiquits/toolchain/commit/bcf7b9f))


### Features

* **npm:** Added copying of package.json to lib so it can be published from there ([5d802ea](https://github.com/ubiquits/toolchain/commit/5d802ea))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/ubiquits/toolchain/compare/v0.1.42...v0.2.0) (2016-07-19)


### Features

* **typescript:** Updated to typescript 2.0, fixed number of issues with build ([fa2c256](https://github.com/ubiquits/toolchain/commit/fa2c256))



<a name="0.1.42"></a>
## [0.1.42](https://github.com/ubiquits/toolchain/compare/v0.1.41...v0.1.42) (2016-07-07)


### Features

* **gitter:** Add gitter sidecar support ([df23d46](https://github.com/ubiquits/toolchain/commit/df23d46))



<a name="0.1.41"></a>
## [0.1.41](https://github.com/ubiquits/toolchain/compare/v0.1.40...v0.1.41) (2016-07-07)


### Features

* **docs:** Updated docs template for news articles ([0e13b45](https://github.com/ubiquits/toolchain/commit/0e13b45))



<a name="0.1.40"></a>
## [0.1.40](https://github.com/ubiquits/toolchain/compare/v0.1.39...v0.1.40) (2016-07-05)



<a name="0.1.39"></a>
## [0.1.39](https://github.com/ubiquits/toolchain/compare/v0.1.38...v0.1.39) (2016-07-05)



<a name="0.1.38"></a>
## [0.1.38](https://github.com/ubiquits/toolchain/compare/v0.1.37...v0.1.38) (2016-07-05)



<a name="0.1.37"></a>
## [0.1.37](https://github.com/ubiquits/toolchain/compare/v0.1.36...v0.1.37) (2016-07-05)


### Features

* **docs:** Add drafts plugin ([fbba3a0](https://github.com/ubiquits/toolchain/commit/fbba3a0))



<a name="0.1.36"></a>
## [0.1.36](https://github.com/ubiquits/toolchain/compare/v0.1.35...v0.1.36) (2016-07-04)



<a name="0.1.35"></a>
## [0.1.35](https://github.com/ubiquits/toolchain/compare/v0.1.34...v0.1.35) (2016-07-01)


### Bug Fixes

* **docs:** Fix doc sort order for guide collection to be collectionSort, title ([c5219ab](https://github.com/ubiquits/toolchain/commit/c5219ab))



<a name="0.1.34"></a>
## [0.1.34](https://github.com/ubiquits/toolchain/compare/v0.1.33...v0.1.34) (2016-06-30)


### Features

* **watcher:** Add env flag to force nodemon to allow color output ([4bd2ea5](https://github.com/ubiquits/toolchain/commit/4bd2ea5))



<a name="0.1.33"></a>
## [0.1.33](https://github.com/ubiquits/toolchain/compare/v0.1.32...v0.1.33) (2016-06-28)



<a name="0.1.32"></a>
## [0.1.32](https://github.com/ubiquits/toolchain/compare/v0.1.31...v0.1.32) (2016-06-22)



<a name="0.1.31"></a>
## [0.1.31](https://github.com/ubiquits/toolchain/compare/v0.1.30...v0.1.31) (2016-06-22)



<a name="0.1.30"></a>
## [0.1.30](https://github.com/ubiquits/toolchain/compare/v0.1.29...v0.1.30) (2016-06-20)



<a name="0.1.29"></a>
## [0.1.29](https://github.com/ubiquits/toolchain/compare/v0.1.28...v0.1.29) (2016-06-20)



<a name="0.1.28"></a>
## [0.1.28](https://github.com/ubiquits/toolchain/compare/v0.1.27...v0.1.28) (2016-06-20)



<a name="0.1.27"></a>
## [0.1.27](https://github.com/ubiquits/toolchain/compare/v0.1.26...v0.1.27) (2016-06-20)


### Bug Fixes

* **chalk:** Fixed incorrect chalk call ([d246a8a](https://github.com/ubiquits/toolchain/commit/d246a8a))



<a name="0.1.26"></a>
## [0.1.26](https://github.com/ubiquits/toolchain/compare/v0.1.25...v0.1.26) (2016-06-20)


### Bug Fixes

* **initialization:** Fixed default for name using email default ([e8e9363](https://github.com/ubiquits/toolchain/commit/e8e9363))



<a name="0.1.25"></a>
## [0.1.25](https://github.com/ubiquits/toolchain/compare/v0.1.24...v0.1.25) (2016-06-20)


### Features

* **tour:** Implement basic tour to familiarize users ([c6b1b85](https://github.com/ubiquits/toolchain/commit/c6b1b85))



<a name="0.1.24"></a>
## [0.1.24](https://github.com/ubiquits/toolchain/compare/v0.1.23...v0.1.24) (2016-06-18)


### Bug Fixes

* **initialization:** Add forced fallback when package is empty ([e1a71d1](https://github.com/ubiquits/toolchain/commit/e1a71d1))
* **initialization:** Added fallback for if the current user signature cannot be found for commit ([0dda8fe](https://github.com/ubiquits/toolchain/commit/0dda8fe))
* **initialization:** Added fallback for when the username/email can't be found ([000cfde](https://github.com/ubiquits/toolchain/commit/000cfde))
* **initialization:** Correct fallback for commit author to verify the email ([e053d58](https://github.com/ubiquits/toolchain/commit/e053d58))



<a name="0.1.23"></a>
## [0.1.23](https://github.com/ubiquits/toolchain/compare/v0.1.22...v0.1.23) (2016-06-18)



<a name="0.1.22"></a>
## [0.1.22](https://github.com/ubiquits/toolchain/compare/v0.1.21...v0.1.22) (2016-06-17)



<a name="0.1.21"></a>
## [0.1.21](https://github.com/ubiquits/toolchain/compare/v0.1.20...v0.1.21) (2016-06-17)



<a name="0.1.20"></a>
## [0.1.20](https://github.com/ubiquits/toolchain/compare/v0.1.19...v0.1.20) (2016-06-17)



<a name="0.1.19"></a>
## [0.1.19](https://github.com/ubiquits/toolchain/compare/v0.1.18...v0.1.19) (2016-06-16)



<a name="0.1.18"></a>
## [0.1.18](https://github.com/ubiquits/toolchain/compare/v0.1.17...v0.1.18) (2016-06-15)



<a name="0.1.17"></a>
## [0.1.17](https://github.com/ubiquits/toolchain/compare/v0.1.16...v0.1.17) (2016-06-14)



<a name="0.1.16"></a>
## [0.1.16](https://github.com/ubiquits/toolchain/compare/v0.1.15...v0.1.16) (2016-06-14)



<a name="0.1.15"></a>
## [0.1.15](https://github.com/ubiquits/toolchain/compare/v0.1.14...v0.1.15) (2016-06-14)



<a name="0.1.14"></a>
## [0.1.14](https://github.com/ubiquits/toolchain/compare/v0.1.13...v0.1.14) (2016-06-14)



<a name="0.1.13"></a>
## [0.1.13](https://github.com/ubiquits/toolchain/compare/v0.1.12...v0.1.13) (2016-06-14)



<a name="0.1.12"></a>
## [0.1.12](https://github.com/ubiquits/toolchain/compare/v0.1.11...v0.1.12) (2016-06-13)



<a name="0.1.11"></a>
## [0.1.11](https://github.com/ubiquits/toolchain/compare/v0.1.10...v0.1.11) (2016-06-13)



<a name="0.1.10"></a>
## [0.1.10](https://github.com/ubiquits/toolchain/compare/v0.1.9...v0.1.10) (2016-06-10)



<a name="0.1.9"></a>
## [0.1.9](https://github.com/ubiquits/toolchain/compare/v0.1.8...v0.1.9) (2016-06-10)



<a name="0.1.8"></a>
## [0.1.8](https://github.com/ubiquits/toolchain/compare/v0.1.7...v0.1.8) (2016-06-09)



<a name="0.1.7"></a>
## [0.1.7](https://github.com/ubiquits/toolchain/compare/v0.1.6...v0.1.7) (2016-06-09)


### Features

* **docs:** Made metalsmith port configurable, updates to the templates and styling for docs ([8be63a3](https://github.com/ubiquits/toolchain/commit/8be63a3))



<a name="0.1.6"></a>
## [0.1.6](https://github.com/ubiquits/toolchain/compare/v0.1.5...v0.1.6) (2016-06-09)



<a name="0.1.5"></a>
## [0.1.5](https://github.com/ubiquits/toolchain/compare/v0.1.4...v0.1.5) (2016-06-09)


### Features

* **docs:** Added check to only include the livereload plugin if in watch mode. ([11d2f73](https://github.com/ubiquits/toolchain/commit/11d2f73)), closes [#6](https://github.com/ubiquits/toolchain/issues/6)



<a name="0.1.4"></a>
## [0.1.4](https://github.com/ubiquits/toolchain/compare/v0.1.3...v0.1.4) (2016-06-08)


### Features

* **cli:** Major refactor of the doc deployment strategy. ([08cfaf7](https://github.com/ubiquits/toolchain/commit/08cfaf7)), closes [#4](https://github.com/ubiquits/toolchain/issues/4)
* **deploy:** Broke down the deploy script into slightly smaller components ([621efd6](https://github.com/ubiquits/toolchain/commit/621efd6))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/ubiquits/toolchain/compare/v0.1.2...v0.1.3) (2016-06-08)


### Features

* **cli:** Updates to styles, fixed package author extraction, fixed issue where non module missing errors caused local fallback, added headingsidentifier metalsmith plugin, added alias for ubiquits bin ([ae64c1e](https://github.com/ubiquits/toolchain/commit/ae64c1e)), closes [#3](https://github.com/ubiquits/toolchain/issues/3)



<a name="0.1.2"></a>
## [0.1.2](https://github.com/ubiquits/toolchain/compare/v0.1.1...v0.1.2) (2016-06-08)


### Features

* **cli:** Updated quickstart repo name ([a205836](https://github.com/ubiquits/toolchain/commit/a205836))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/ubiquits/toolchain/compare/v0.1.0...v0.1.1) (2016-06-08)


### Features

* **cli:** Fixed logging error when called from external, added prefer global, fixed double output of linter ([ac6388e](https://github.com/ubiquits/toolchain/commit/ac6388e))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/ubiquits/toolchain/compare/v0.0.13...v0.1.0) (2016-06-08)


### Features

* **cli:** Implemented initializer task, still need to start watchers on intitializer ([c0657ca](https://github.com/ubiquits/toolchain/commit/c0657ca))



<a name="0.0.13"></a>
## [0.0.13](https://github.com/ubiquits/toolchain/compare/v0.0.11...v0.0.13) (2016-06-03)



<a name="0.0.11"></a>
## [0.0.11](https://github.com/ubiquits/toolchain/compare/v0.0.10...v0.0.11) (2016-06-03)



<a name="0.0.10"></a>
## [0.0.10](https://github.com/ubiquits/toolchain/compare/v0.0.8...v0.0.10) (2016-06-02)


### Bug Fixes

* **npm:** fixed broken package.json ([6175b95](https://github.com/ubiquits/toolchain/commit/6175b95))


### Features

* **deployment:** reordered deployment script so paths are correct ([cc43a8e](https://github.com/ubiquits/toolchain/commit/cc43a8e))
* **documentation:** adds documentation deployment script ([a95ec56](https://github.com/ubiquits/toolchain/commit/a95ec56))
* **documentation:** dropped api, implemented new layout with custom handlebars helpers ([06adfb6](https://github.com/ubiquits/toolchain/commit/06adfb6))
* **documentation:** Implemented metalsmith build process for docs ([fa2e556](https://github.com/ubiquits/toolchain/commit/fa2e556))
* **documentation:** implemented non overwriting of assets ([c4949c7](https://github.com/ubiquits/toolchain/commit/c4949c7))
* **documentation:** re-added api with _blank targets for externals, implemented metalsmith define, date formatter & headings, updated theme ([1b7d252](https://github.com/ubiquits/toolchain/commit/1b7d252))
* **documentation:** Updated paths to source from config, refactored to .hbs extension, added typedoc default theme ([bb0b4e6](https://github.com/ubiquits/toolchain/commit/bb0b4e6))



<a name="0.0.8"></a>
## [0.0.8](https://github.com/ubiquits/toolchain/compare/v0.0.7...v0.0.8) (2016-05-28)


### Features

* **exceptions:** Added source mapping support for api exception stacktracing ([6787443](https://github.com/ubiquits/toolchain/commit/6787443))



<a name="0.0.7"></a>
## [0.0.7](https://github.com/ubiquits/toolchain/compare/v0.0.6...v0.0.7) (2016-05-27)


### Features

* **coverage:** Added coveralls task ([c8f9224](https://github.com/ubiquits/toolchain/commit/c8f9224))



<a name="0.0.6"></a>
## [0.0.6](https://github.com/ubiquits/toolchain/compare/v0.0.5...v0.0.6) (2016-05-27)


### Bug Fixes

* **coverage:** Fixed coverage pathing ([a599357](https://github.com/ubiquits/toolchain/commit/a599357))



<a name="0.0.5"></a>
## [0.0.5](https://github.com/ubiquits/toolchain/compare/v0.0.4...v0.0.5) (2016-05-27)


### Features

* **travis:** Add custom chrome flags for travis to use ([a8b5cb6](https://github.com/ubiquits/toolchain/commit/a8b5cb6))



<a name="0.0.4"></a>
## [0.0.4](https://github.com/ubiquits/toolchain/compare/v0.0.3...v0.0.4) (2016-05-27)


### Features

* **infrastructure:** Implemented live reloading ([286776f](https://github.com/ubiquits/toolchain/commit/286776f))
* **infrastructure:** Refactored to output es6 modules and separate lib from dist for package management, fixed nodemon not working without gulpfile ([1b1cbe8](https://github.com/ubiquits/toolchain/commit/1b1cbe8))



<a name="0.0.3"></a>
## [0.0.3](https://github.com/ubiquits/toolchain/compare/v0.0.2...v0.0.3) (2016-05-25)


### Features

* **browser:** Fixed unit test for api to ignore both main files on build ([6984374](https://github.com/ubiquits/toolchain/commit/6984374))
* **infrastructure:** Removed complilation of _demo, renamed api to server and nested source in src dir ([f4dbb9b](https://github.com/ubiquits/toolchain/commit/f4dbb9b))



<a name="0.0.2"></a>
## [0.0.2](https://github.com/ubiquits/toolchain/compare/2933c77...v0.0.2) (2016-05-25)


### Features

* **browser:** Added browser config, reconfigured to support external loading ([610a465](https://github.com/ubiquits/toolchain/commit/610a465))
* **npm:** Added package.json ([2933c77](https://github.com/ubiquits/toolchain/commit/2933c77))



