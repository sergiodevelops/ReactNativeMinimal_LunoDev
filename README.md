<h1 style="color: red; text-align: center; margin: 0; padding: 0;">React Native & Web Semantic (CSR & SSR)</h1>
<h2 style="text-align: center; margin: 0; padding: 0;">by <strong style="color: blue">LUNO⚛Dev</strong></h2>

[![React Native and Web Semantic with CSR & SSR tecniches](documentation/react-navigation-native-web_v1.0.6_2024-07-14.gif "React Native & Web Semantic (CSR & SSR)")](https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/)

[🔗⬆️ Click here for see this project deployed on web platform 🔗️⬆️](https://sergiodevelops.github.io/ReactNativeMinimal_LunoDev/)

```
ReactNativeMinimal_LunoDev
```

## System Info (dev environment)
```bash
yarn react-native info
```
or
```bash
npm run react-native info
```
```
info Fetching system and libraries information...
System:
  OS: Linux 5.15 Ubuntu 20.04.6 LTS (Focal Fossa)
  CPU: (8) x64 Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz
  Memory: 4.39 GB / 15.51 GB
  Shell:
    version: 5.0.17
    path: /bin/bash
Binaries:
  Node:
    version: 20.11.0
    path: /tmp/xfs-bc5ab604/node
  Yarn:
    version: 3.6.4
    path: /tmp/xfs-bc5ab604/yarn
  npm:
    version: 10.8.1
    path: ~/.nvm/versions/node/v20.11.0/bin/npm
  Watchman:
    version: 4.9.0
    path: /usr/bin/watchman
SDKs:
  Android SDK:
    API Levels:
      - "31"
      - "33"
      - "34"
      - "35"
    Build Tools:
      - 30.0.3
      - 34.0.0
      - 35.0.0
    System Images:
      - android-33 | Google APIs Intel x86_64 Atom
      - android-35 | Google APIs Intel x86_64 Atom
    Android NDK: Not Found
IDEs:
  Android Studio: AI-241.15989.150.2411.11948838
Languages:
  Java:
    version: 17.0.11
    path: /usr/bin/javac
  Ruby: Not Found
npmPackages:
  "@react-native-community/cli": Not Found
  react:
    installed: 18.2.0
    wanted: 18.2.0
  react-native:
    installed: 0.74.3
    wanted: ^0.74.2
npmGlobalPackages:
  "*react-native*": Not Found
Android:
  hermesEnabled: true
  newArchEnabled: false
iOS:
  hermesEnabled: Not found
  newArchEnabled: false
```

```bash
node -v
```
```
v20.11.0
```

```bash
npm -v
```
```
10.8.1
```

```bash
yarn -v
```
```
1.22.22
```

```
$ which $(package)
Example:
```
```bash
which node
# $HOME/.nvm/versions/node/v20.11.0/bin/node
```
```bash
which java
# /usr/bin/java
```
```bash
which yarn
# $HOME/.nvm/versions/node/v20.11.0/bin/yarn
```
```bash
which npm
# $HOME/.nvm/versions/node/v20.11.0/bin/npm
```

```bash
java --version
```
```
java 17.0.11 2024-04-16 LTS
Java(TM) SE Runtime Environment (build 17.0.11+7-LTS-207)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.11+7-LTS-207, mixed mode, sharing)
```

```bash
# solo funciona si estan correctamente instaladas las variables de entorno
# en este caso de $ANDROID_HOME 
emulator -v
```
```
INFO    | Storing crashdata in: /tmp/android-sjuarez/emu-crash-34.2.15.db, detection is enabled for process: 120127
INFO    | Android emulator version 34.2.15.0 (build_id 11906825) (CL:N/A)
ERROR   | No AVD specified. Use '@foo' or '-avd foo' to launch a virtual device named 'foo'
```

## Install dependencies and run 

```bash
# with YARN
yarn
```
```bash
# or with NPM
npm install
```

## Run for development 

### Run for Android or iOS platform

```bash
# with YARN
yarn start
```
```bash
# or with NPM
npm run start
```

### Run for Web server platform

```bash
# with YARN
yarn client:web # client web server
yarn client:mobile # iOS/android
```
```bash
# or with NPM
npm run client:web
```
