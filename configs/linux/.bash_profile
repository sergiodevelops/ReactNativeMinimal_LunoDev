# GENERAL environments
export USR_LIB=/usr/lib


# NODE v20.11 environments
export NODE_V20_11=$HOME/.nvm/versions/node/v20.11.0
export NODE_V20_11_BIN_MODULES=$NODE_V20_11/bin
export PATH=$PATH:$NODE_V20_11_BIN_MODULES/yarn # add yarn path


# IDE code editor environments
export REACT_EDITOR=webstorm


# JAVA v17 environments
export JVM=$USR_LIB/jvm
export JVM_17=$JVM/jdk-17-oracle-x64
export JAVA_HOME=$JVM_17
export JAVA_HOME_BIN=$JAVA_HOME/bin

export PATH=$PATH:$JAVA_HOME_BIN


# ANDROID v13 environments
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_TOOLS=$ANDROID_HOME/tools
export ANDROID_TOOLS_BIN=$ANDROID_TOOLS/bin
export ANDROID_PLATFORM_TOOLS=$ANDROID_HOME/platform-tools
export ANDROID_EMULATOR=$ANDROID_HOME/emulator

export PATH=$PATH:$ANDROID_TOOLS
export PATH=$PATH:$ANDROID_TOOLS_BIN
export PATH=$PATH:$ANDROID_PLATFORM_TOOLS
export PATH=$PATH:$ANDROID_EMULATOR


echo "all environments loaded with success"