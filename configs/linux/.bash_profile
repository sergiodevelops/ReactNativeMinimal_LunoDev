# GENERAL environments
export USR_LIB=/usr/lib/

# NODE v20.11 environments
export NODE_V20_11=/home/sjuarez/.nvm/versions/node/v20.11.0/lib
export NODE_V20_11_MODULES=$NODE_V20_11/lib/node_modules/
export NODE_V20_11_NPM=$NODE_V20_11_MODULES/npm
export NODE_V20_11_YARN=$NODE_V20_11_MODULES/yarn

# IDE code editor environments
export REACT_EDITOR=webstorm

# JAVA v17 environments
export JVM=$USR_LIB/jvm/
export JVM_17=$JVM/jdk-17-oracle-x64
export JAVA_HOME=$JVM_17
export JAVA_HOME_BIN=$JAVA_HOME/bin

# ANDROID v13 environments
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_TOOLS=$ANDROID_HOME/tools
export ANDROID_TOOLS_BIN=$ANDROID_TOOLS/bin
export ANDROID_PLATFORM_TOOLS=$ANDROID_HOME/platform-tools
export ANDROID_EMULATOR=$ANDROID_HOME/emulator


# ADD environments to PATH linux bash system
export PATH=$PATH:$JAVA_HOME_BIN # add java bin
export PATH=$PATH:$ANDROID_TOOLS # add android tools
export PATH=$PATH:$ANDROID_TOOLS_BIN # add android tools bin
export PATH=$PATH:$ANDROID_PLATFORM_TOOLS # add android platform tools
export PATH=$PATH:$ANDROID_EMULATOR # add android emulator