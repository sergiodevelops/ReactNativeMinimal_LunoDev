# GENERAL paths
export USR_LIB=/usr/lib/

# JAVA paths
export JVM=$USR_LIB/jvm/
export JVM_17=$JVM/jdk-17-oracle-x64
export JAVA_HOME=$JVM_17
export JAVA_HOME_BIN=$JAVA_HOME/bin

# ANDROID paths
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_TOOLS=$ANDROID_HOME/tools
export ANDROID_TOOLS_BIN=$ANDROID_TOOLS/bin
export ANDROID_PLATFORM_TOOLS=$ANDROID_HOME/platform-tools
export ANDROID_EMULATOR=$ANDROID_HOME/emulator

# ADD paths
export PATH=$PATH:$JAVA_HOME_BIN # add java bin
export PATH=$PATH:$ANDROID_TOOLS # add android tools
export PATH=$PATH:$ANDROID_TOOLS_BIN # add android tools bin
export PATH=$PATH:$ANDROID_PLATFORM_TOOLS # add android platform tools
export PATH=$PATH:$ANDROID_EMULATOR # add android emulator